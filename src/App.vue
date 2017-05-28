<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    document.getElementById('preloader').classList += 'animated fadeOut'
  }
}
</script>

<style>
html { overflow-y: initial !important; }
.hero { background-image: linear-gradient(160deg, #18ae90, #16826c 50%, #145246 75%); }
.fa { vertical-align: baseline; }
a.button {
  transition: all .15s ease-in-out;
  color: #1B6F5F;
  border-color: #FFF; }
a.button:hover {
  color: #FFF;
  background-color: #1ABC9C;
  border-color: #1ABC9C; }
::-webkit-scrollbar {
  background-color: #F1F1F1;
  border-left: 1px solid #fff;
}
::-webkit-scrollbar-thumb {
  background-color: #CDCDCD;
  border: 3px solid #F1F1F1;
}
::-webkit-scrollbar-thumb:hover { background-color: #A8A8A8; }
.ui {
  font-size: 14px;
  line-height: 20px; }
</style>
