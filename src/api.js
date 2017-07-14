import { api } from '@/config'

class Abstraction {
  constructor (api) {
    this.api = api
  }

  promise (endpoint, callback) {
    let promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', `${api}/${endpoint}`)
      xhr.onload = () => resolve(JSON.parse(xhr.responseText))
      xhr.onerror = () => reject(xhr)
      xhr.send()
    })
    promise.then((response) => callback(response))
    promise.catch((reason) => {
      console.log('Handle rejected promise')
      console.log(reason)
    })
  }
  get (endpoint, callback) {
    this.promise(endpoint, callback)
  }
}
let abstraction = new Abstraction(api)

export default abstraction
