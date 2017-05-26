<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item" href="/#">
        <img src="./../assets/logo_sigma.png" alt="">
      </a>
      <a class="nav-item hoverline" href="/#sigma">Home</a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <span class="nav-toggle" v-on:click="openNavMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <div class="nav-right nav-menu">
      <a v-for="item in navmenu" class="nav-item hoverline" :href=item.href>{{ item.text }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navmenu: this.$root.sigma.navmenu
    }
  },
  methods: {
    openNavMenu: (event) => {
      event.target.classList.toggle('is-active')
      document.querySelector('.nav-menu').classList.toggle('is-active')
    }
  }
}
</script>

<style scoped>
.nav { padding: 5px; }
.hoverline {
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.hoverline:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #1B6F5F;
  height: 2px;
  transition: right .3s ease-out;
}

.hoverline:hover:before,
.hoverline:focus:before,
.hoverline:active:before {
  right: 0; }
</style>
