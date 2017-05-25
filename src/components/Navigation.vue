<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item" href="/#">
        <img src="./../assets/logo_sigma.png" alt="">
      </a>
      <a class="nav-item" href="/#sigma">
        Home
      </a>

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
      <a class="nav-item" href="https://sigma.auroraproject.xyz/commands">
        Commands
      </a>
      <a class="nav-item" href="https://status.auroraproject.xyz/">
        Status
      </a>
      <a class="nav-item" href="https://sigma.auroraproject.xyz/leaderboard">
        Leaderboard
      </a>
      <a class="nav-item" href="https://github.com/aurora-pro/apex-sigma">
        Github
      </a>
      <a class="nav-item" href="https://discordapp.com/invite/Ze9EfTd">
        Discord
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    openNavMenu: (event) => {
      event.target.classList.toggle('is-active')
      document.querySelector('.nav-menu').classList.toggle('is-active')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
