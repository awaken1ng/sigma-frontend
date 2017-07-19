import json
import os
import shutil
import time
import re
import hashlib
import subprocess
import zipfile

forced = True

if forced:
  print('Forcing update')
  config = {
  	"import_icon": {
  		"last": {
  			"file": "",
  			"created": 0,
  			"sha1": ""
  		}
  	}
  }
else:
  # import the config
  with open('config.json') as file:
    file = file.read()
    config = json.loads(file)
last = config['import_icon']['last']  # last imported

path = 'C:\\Users\\Awakening\\Downloads\\'  # folder to iterate through
pattern = 'icomoon'  # file filter
modified = False  # flag to keep track whether newer file was found

if subprocess.check_output("tasklist").decode('utf-8').find('node.exe') != -1:
  print('! Node is running, Webpack might interfere with the script')

for (root, folders, files) in os.walk(path):
  for file in files:
    if file.find(pattern) != -1:
      # get the file creation date
      created = os.path.getctime(os.path.join(root + file))
      # compare it to the last imported file
      if created > last['created']:
        print(f'Newer file found - {file}, created on {time.ctime(created)}')
        # if the file is newer, save it's data
        modified = True
        last['file'] = file
        last['created'] = created

if modified:
  print(f'Calculating SHA-1 on {last["file"]}')
  # calculate the SHA-1
  blocksize = 65536
  hasher = hashlib.sha1()
  with open(os.path.join(path + last['file']), 'rb') as file:
      buffer = file.read(blocksize)
      while len(buffer) > 0:
          hasher.update(buffer)
          buffer = file.read(blocksize)
  # save the result
  last['sha1'] = hasher.hexdigest()

  assets = 'C:\\Users\\Awakening\\git\\sigma-frontend\\src\\assets\\'
  print(f'Unpacking {last["file"]}')
  with zipfile.ZipFile(os.path.join(path + last['file'])) as zip:
    # delete the old stylesheet
    if os.path.exists(os.path.join(assets + 'custom_icons.sass')):
      print('Found the old stylesheet, deleting')
      os.remove(os.path.join(assets + 'custom_icons.sass'))

    print('Opening the stylesheet from the archive')
    with zip.open('style.css') as file:
      stylesheet = file.read().decode('utf-8')
    print('Converting .css into .sass')
    # turning css into sass
    stylesheet = re.sub('[{};]', '', stylesheet)
    stylesheet = re.sub(',\n\s+', ', ', stylesheet)
    stylesheet = re.sub('.+color.+', '', stylesheet)  # remove icon coloring
    # write to file
    print('Writing the stylesheet')
    with open(os.path.join(assets + 'custom_icons.sass'), 'w') as file:
      file.write(stylesheet)

    # delete the old fonts
    if os.path.exists(os.path.join(assets + 'fonts')):
      print('Deleting the old fonts')
      shutil.rmtree(os.path.join(assets + 'fonts'))
    # extract the fonts from the archive
    print('Extracting the fonts from archive')
    for ext in ['eot', 'svg', 'ttf', 'woff']:
      print(f'- Extracting icomoon.{ext}')
      zip.extract(f'fonts/icomoon.{ext}', path=assets)

    if not forced:
      print('Saving the information about the archive')
      with open('config.json', 'w') as file:
        file.write(json.dumps(config))
