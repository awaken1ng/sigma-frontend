<template>
  <nav class="nav animated fadeInDown">
    <div class="nav-left">
      <a class="nav-item" href="/#">
        <img src="./../assets/logo_sigma.png" alt="">
      </a>
      <a class="nav-item" href="/#sigma">Home</a>

    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle" v-on:click="openNavMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a v-for="item in navmenu" class="nav-item" :href=item.href>{{ item.text }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navmenu: this.$parent.$parent.sigma.navmenu
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
</style>
