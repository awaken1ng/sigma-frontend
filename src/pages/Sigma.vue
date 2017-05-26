<template>
  <div id="sigma">
    <Navigation></Navigation>
    <section class="hero fadeIn" >
      <div class="hero-body has-text-centered animated fadeIn">
        <img class="logo fadeIn" src="./../assets/logo_sigma_light.png">
        <h1 class="title fadeIn">This is Sigma, the Database Giant.</h1>
        <h2 class="subtitle fadeIn">A bot made to bring knowledge to your Discord server.</h2>
        <a class="button fadeIn" :href=invite>Add to Discord</a>
        <br />
        <div class="version">
          <span class="tag is-white">Version {{ `${version.major}.${version.minor}.${version.patch}` }}</span> <span class="tag is-white">Codename {{ codename }}</span>
        </div>
      </div>
    </section>

    <section class="section makers animated fadeIn">
      <h1 class="title has-text-centered"><fa icon="fa-coffee" size=30></fa> The Makers</h1>
      <div class="container">
        <div class="columns">
          <div class="column" v-for="maker in makers">
            <card :key=maker.name :avatar=maker.avatar :overlay=maker.overlay :name=maker.name :content=maker.about></card>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-text-centered stats animated fadeIn">
      <h1 class="title "><fa icon="fa-table" size=30></fa> Stats</h1>
      <div class="container">
        <loader id="loader" inline="true"></loader>
        <div class="columns">
          <div class="column">
            <stat v-for="stat in stats" class="animated fadeIn" :key=stat.label :label=stat.label :value=stat.value :icon=stat.icon></stat>
          </div>
        </div>
      </div>
    </section>
   </div>
</template>

<script>
import $ from 'jquery'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Fa from '@/components/FaIcon'
import Stat from '@/components/Stat'
import Loader from '@/components/Loader'

export default {
  name: 'Sigma-main',
  data () {
    return {
      version: this.$root.sigma.main.placeholders.version,
      codename: this.$root.sigma.main.placeholders.codename,
      invite: this.$root.sigma.links.invite,
      makers: this.$root.sigma.main.makers,
      stats: []
    }
  },
  components: { Navigation, Card, Fa, Stat, Loader },
  mounted () {
    document.title = 'Sigma: The Database'
    let api = this.$root.api
    $.get(`${api}/overview`, (data) => {
      $('#loader').hide()
      this.version = data.version.version
      this.codename = data.version.codename
      this.stats.push({label: 'Active servers', value: data.stats.ServerCount, icon: 'fa-server'})
      this.stats.push({label: 'Active users', value: data.stats.UserCount, icon: 'fa-user'})
      this.stats.push({label: 'Commands used', value: data.stats.CMDCount, icon: 'fa-terminal'})
      this.stats.push({label: 'Messages processed', value: data.stats.MSGCount, icon: 'fa-comments'})
      this.stats.push({label: 'Songs Played', value: data.stats.MusicCount, icon: 'fa-music'})
    })
  }
}
</script>

<style scoped>
.hero-body { margin: auto; }
.hero .logo { max-height: 250px; }
.hero .title, .hero .subtitle { color: #fff; }
.tag.is-white { color: #1B6F5F; }
.version { padding-top: 1rem; }
.version span {
  border-radius: 2px;
  margin: 0 5px;}
#loader { margin: 3rem auto; }
@media screen and (max-width: 911px), print {
  .columns:not(.is-desktop) { display: block; }
   .card { max-width: 500px; } }
</style>
