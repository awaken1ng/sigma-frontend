<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html { overflow-y: initial !important; }
a.button {
  transition: all .15s ease-in-out;
  color: #1B6F5F;
  border-color: #FFF;
}
a.button:hover {
  color: #FFF;
  background-color: #1ABC9C;
  border-color: #1B6F5F;
}
</style>
