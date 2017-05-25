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
            <div class="ui statistic" v-for="stat in stats">
              <div class="value">
                {{ stat.value }} <fa v-if=stat.icon :icon=stat.icon></fa>
              </div>
              <div class="label">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
      <div class="container">
        <div class="columns">
          <div class="stack">
            <div class="tile is-parent" v-for="stat in stats">
              <article class="tile is-child box">
                <p class="title">{{ stat.title }}</p>
                <p class="subtitle">{{ stat.value }}</p>
              </article>
            </div>
          </div>
        </div>
      </div> -->

    </section>
   </div>
</template>

<script>
import $ from 'jquery'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Fa from '@/components/FaIcon'

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
  components: { Navigation, Card, Fa },
  mounted () {
    document.title = 'Sigma: The Database'
    let api = this.$parent.api
    $.get(`${api}/version`, (data) => {
      this.codename = data.codename
      this.version = data.version
    })
    $.get(`${api}/stats`, (data) => {
      this.stats.push({label: 'Active servers', value: data.ServerCount, icon: 'fa-server'})
      this.stats.push({label: 'Active users', value: data.UserCount, icon: 'fa-user', pad: 2})
      this.stats.push({label: 'Commands used', value: data.CMDCount, icon: 'fa-terminal', pad: 0})
      this.stats.push({label: 'Message processed', value: data.MSGCount, icon: 'fa-comments', pad: 0})
      this.stats.push({label: 'Songs Played', value: data.MusicCount, icon: 'fa-music'})
    })
  }
}
</script>

<style scoped>
.hero { background-image: linear-gradient(160deg, #18ae90, #16826c 50%, #145246 75%); }
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
