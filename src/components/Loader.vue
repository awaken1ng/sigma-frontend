<template>
  <div :id=id class="ui segment">
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loader',
    props: ['id']
  }
</script>

<style>
  .ui.loader { border: none; }
</style>
