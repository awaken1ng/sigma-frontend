<template>
  <nav class="nav" v-show=active>
    <div class="nav-left">
      <span v-for="link in navmenu.left">
        <router-link v-if=link.img class="nav-item hoverline logo" :key=link.id :to=link.href><img :src=link.img></router-link>
        <router-link v-else class="nav-item hoverline" :key=link.id :to=link.href>{{ link.text }}</router-link>
      </span>
      <span v-for="link in navmenu.conditional">
        <a class="nav-item hoverline" :class=link.class :style=link.style v-on:click=link.method>{{ link.text }}</a>
      </span>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- empty span elements are used to form an icon -->
    <span class="nav-toggle" v-on:click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <div class="nav-right nav-menu">
      <span v-for="link in navmenu.right">
        <router-link v-if=link.id class="nav-item hoverline" :key=link.id :to=link.href>{{ link.text }}</router-link>
        <a v-else class="nav-item hoverline" target="_blank" :href=link.href>{{ link.text }}</a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggle: (event) => {
      let toggle = event.target
      let menu = document.querySelector('.nav-menu')

      toggle.classList.toggle('is-active')
      menu.classList.toggle('is-active')

      // Prevent stranded active classes
      if ((toggle.classList.contains('is-active')) && (!menu.classList.contains('is-active'))) {
        toggle.classList.remove('is-active')
      }
      if ((!toggle.classList.contains('is-active')) && (menu.classList.contains('is-active'))) {
        menu.classList.remove('is-active')
      }

      if ((toggle.classList.contains('is-active')) && (menu.classList.contains('is-active'))) {
        // Creating backdrop on menu open
        let backdrop = document.createElement('div')
        backdrop.setAttribute('id', 'navigation-backdrop')
        backdrop.setAttribute('style', 'position: fixed; width: 100%; height: 100%; z-index: 1; background: rgba(0,0,0,0.5);')
        backdrop.addEventListener('click', () => {
          // Close the menu and remove the backdrop
          toggle.classList.remove('is-active')
          menu.classList.remove('is-active')
          backdrop.remove()
        })
        document.getElementById('app').appendChild(backdrop)
      } else {
        // Removing backdrop on menu close
        let backdrop = document.getElementById('navigation-backdrop')
        if (backdrop) backdrop.remove()
      }
    }
  },
  data () {
    return {
      active: true,
      navmenu: this.$root.navigation
    }
  },
  mounted () {
    let bus = this.$root.eventBus
    bus.$on('nav-hide', () => { this.active = false })
    bus.$on('nav-show', () => { this.active = true })
    // Make sure the navigation is hidden on first load
    if (this.$route.name === 'ap-landing') this.active = false
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  width: 100%;
  padding: 5px;
}
.nav-left, .nav-right { overflow: hidden; }  /* Hide scrollbars that appear due to wrapping navigation items into spans */
.nav-toggle { height: auto; }
.nav a.nav-item { outline: none; }
.nav a.nav-item.logo.hoverline:hover:before { right: 100%; }  /* disable hoverline on logo */

.hoverline {
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden; }

.hoverline.router-link-exact-active.router-link-active:before { right: 0; }  /* highlight the currently open page */
.hoverline:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #1B6F5F;
  height: 2px;
  transition: right .3s ease-out; }

.hoverline:hover:before,
.hoverline:focus:before,
.hoverline:active:before {
  right: 0; }
</style>
