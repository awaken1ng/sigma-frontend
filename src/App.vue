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
.fa { vertical-align: baseline; }
a.button {
  transition: all .15s ease-in-out;
  color: #1B6F5F;
  border-color: #FFF; }
a.button:hover {
  color: #FFF;
  background-color: #1ABC9C;
  border-color: #1ABC9C; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb {
  background: #7a7a7a;
  border-radius: 2px; }
.ui {
  font-size: 14px;
  line-height: 20px; }
</style>
