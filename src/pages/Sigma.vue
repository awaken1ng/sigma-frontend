<template>
  <div id="sigma">
    <Navigation></Navigation>
    <section class="hero fadeIn" >
      <div class="hero-body has-text-centered animated fadeIn">
        <img class="logo fadeIn" src="./../assets/logo_sigma_light.png">
        <h1 class="title fadeIn">This is Sigma, the Database Giant.</h1>
        <h2 class="subtitle fadeIn">A bot made to bring knowledge to your Discord server.</h2>
        <a class="button fadeIn" href="https://discordapp.com/oauth2/authorize?client_id=216437513709944832&scope=bot&permissions=8">Add to Discord</a>
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
        <div class="columns">
          <div class="column">
            <stat v-for="stat in stats" :key=stat.label :label=stat.label :value=stat.value :icon=stat.icon></stat>
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

export default {
  name: 'Sigma-main',
  data () {
    return {
      version: { major: '0', minor: '00', patch: '0000' },
      codename: '-',
      makers: this.$parent.sigma.main.makers,
      stats: []
    }
  },
  components: { Navigation, Card, Fa, Stat },
  mounted () {
    document.title = 'Sigma: The Database'
    let api = this.$parent.api
    $.get(`${api}/version`, (data) => {
      this.codename = data.codename
      this.version = data.version
    })
    $.get(`${api}/stats`, (data) => {
      this.stats.push({label: 'Active servers', value: data.ServerCount, icon: 'fa-server'})
      this.stats.push({label: 'Active users', value: data.UserCount, icon: 'fa-user'})
      this.stats.push({label: 'Commands used', value: data.CMDCount, icon: 'fa-terminal'})
      this.stats.push({label: 'Message processed', value: data.MSGCount, icon: 'fa-comments'})
      this.stats.push({label: 'Songs Played', value: data.MusicCount, icon: 'fa-music'})
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
@media screen and (max-width: 911px), print {
  .columns:not(.is-desktop) { display: block; }
   .card { max-width: 500px; } }
.ui.statistic + .ui.statistic { margin: 0em 0em 0em 3em; }
</style>
