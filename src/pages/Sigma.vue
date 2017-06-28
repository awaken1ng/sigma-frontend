<template>
  <div id="sigma">
    <Navigation></Navigation>
    <section class="hero fadeIn" >
      <div class="hero-body has-text-centered animated fadeIn">
        <img class="logo animated fadeIn" src="./../assets/logo_sigma_light.png">
        <h1 class="title animated fadeIn">This is Sigma, the Database Giant.</h1>
        <h2 class="subtitle animated fadeIn">A bot made to bring knowledge to your Discord server.</h2>
        <a class="button animated fadeIn" :href=invite target="_blank">Add to Discord</a>
        <br />
        <div class="version">
          <span class="tag is-white animated fadeIn" v-if=version>Version {{ `${version.major}.${version.minor}.${version.patch}` }}</span>
          <span class="tag is-white animated fadeIn" v-if=codename>Codename {{ codename }}</span>
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
      version: false, // this.$root.sigma.main.placeholders.version,
      codename: false, // this.$root.sigma.main.placeholders.codename,
      invite: this.$root.sigma.links.invite,
      makers: this.$root.sigma.main.makers,
      stats: []
    }
  },
  components: { Navigation, Card, Fa, Stat, Loader },
  mounted () {
    document.title = 'Sigma: The Database'
    let api = this.$root.api
    $.get(`${api}/version`, (data) => {
      this.version = data.version
      this.codename = data.codename
    })
    $.get(`${api}/stats`, (data) => {
      $('#loader').hide()
      data = data.data.stats
      this.stats.push({label: 'Active servers', value: data.general.population.guilds, icon: 'fa-server'})
      this.stats.push({label: 'Active users', value: data.general.population.members, icon: 'fa-user'})
      this.stats.push({label: 'Commands used', value: data.general.cmd_count, icon: 'fa-terminal'})
      this.stats.push({label: 'Messages processed', value: data.events.message, icon: 'fa-comments'})
      this.stats.push({label: 'Songs Played', value: data.special.songs_played, icon: 'fa-music'})
    })
  }
}
</script>

<style scoped>
.hero-body { margin: auto; padding-bottom: 2rem; }
.hero .logo { max-height: 250px; }
.hero .title, .hero .subtitle { color: #fff; }
.tag.is-white { color: #1B6F5F; }
.version { margin-top: 1em; min-height: 1.68em; }
.version span {
  border-radius: 2px;
  margin: 0 5px; }
#loader { margin: 3rem auto; }
@media screen and (max-width: 911px), print {
  .columns:not(.is-desktop) { display: block; }
   .card { max-width: 500px; } }
</style>
