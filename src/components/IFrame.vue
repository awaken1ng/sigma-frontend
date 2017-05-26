<template>
  <iframe :src=url width="100%" height="100%">
    <p>Your browser does not support iframes.</p>
  </iframe>
</template>

<script>
  export default {
    name: 'frame',
    props: ['url']
  }
</script>

<style scoped>
  iframe { position: absolute; }
</style>
