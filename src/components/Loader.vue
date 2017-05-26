<template>
  <div :id=id class="ui segment" v-if="inline !== 'true'">
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>

  <div :id=id class="ui active centered inline loader" v-else></div>
</template>

<script>
  export default {
    name: 'loader',
    props: ['id', 'inline']
  }
</script>

<style>
  .ui.loader { border: none; }
</style>
