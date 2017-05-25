<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Config from './config'
export default {
  name: 'app',
  data () { return Config }
}
</script>

<style>
html { overflow-y: initial !important; }
.fa { padding-top: 4px; }
a.button {
  transition: all .15s ease-in-out;
  color: #1B6F5F;
  border-color: #FFF; }
a.button:hover {
  color: #FFF;
  background-color: #1ABC9C;
  border-color: #1ABC9C; }
.tag.is-white { color: #1B6F5F; }
</style>
