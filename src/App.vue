<template>
  <div id="app">
    <backdrop></backdrop>
    <navigation></navigation>
    <router-view class="view"></router-view>
    <tail></tail>
  </div>
</template>

<script>
import navigation from '@/components/nav'
import backdrop from '@/components/Backdrop'
import tail from '@/components/Footer'

export default {
  name: 'app',
  components: { navigation, backdrop, tail },
  mounted () {
    let preloader = document.getElementById('preloader')
    preloader.classList.add('animated', 'fadeOut')
    preloader.getElementsByClassName('dimmer')[0].classList.add('animated', 'fadeOut')
    preloader.getElementsByTagName('section')[0].classList.add('animated', 'fadeOut')
  }
}
</script>

<style>
html { overflow-y: initial !important; } /* Reset vertical overflow */
body, button, input, select, textarea { font-family: 'Exo 2'; }
.ui { font-family: 'Exo 2'; }
#app { /* Stretch the application into fullscreen */
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.view {
  flex: 1;
  margin-top: 3rem;
}
.fa { vertical-align: baseline; } /* Center font awesome icons*/
.hero { background: unset; } /* Unset background for hero to be able to see the backdrop */

/* Style the buttons */
a.button {
  transition: all .15s ease-in-out;
  color: #1B6F5F;
  border-color: #FFF; }
a.button:focus,
a.button:hover {
  color: #FFF;
  background-color: #1ABC9C;
  border-color: #1ABC9C; }

/* Webkit scroller */
::-webkit-scrollbar {
  background-color: #F1F1F1;
  border-left: 1px solid #fff;
}
::-webkit-scrollbar-thumb {
  background-color: #CDCDCD;
  border: 3px solid #F1F1F1;
}
::-webkit-scrollbar-thumb:hover { background-color: #A8A8A8; }

/* I don't remember why I put this here */
.ui {
  font-size: 14px;
  line-height: 20px; }
</style>
