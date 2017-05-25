<template>

  <div id="sigma">
    <Navigation></Navigation>
    <section class="hero">
      <div class="hero-body has-text-centered">
        <img class="logo" src="./../assets/logo_sigma_light.png">
        <h1 class="title">This is Sigma, the Database Giant.</h1>
        <h2 class="subtitle">A bot made to bring knowledge to your Discord server.</h2>
        <a class="button" href="https://discordapp.com/oauth2/authorize?client_id=216437513709944832&scope=bot&permissions=8">Add to Discord</a>
        <br />
        <div class="version">
          <span class="tag is-white">Version {{ `${version.major}.${version.minor}.${version.patch}` }}</span> <span class="tag is-white">Codename {{ codename }}</span>
        </div>
      </div>
    </section>
    <section class="section makers">
      <h1 class="title has-text-centered"><fa icon="fa-coffee" size=30></fa> The Makers</h1>
      <div class="container">

      <div class="columns">
        <div class="column" v-for="maker in makers">
          <card :key=maker.name :avatar=maker.avatar :overlay=maker.overlay :name=maker.name :content=maker.about></card>
        </div>
      </div>
    </div>

    </section>
   </div>
</template>

<script>
import $ from 'jQuery'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Fa from '@/components/FaIcon'

export default {
  name: 'Sigma-main',
  data () {
    return {
      version: { major: '0', minor: '00', patch: '0000' },
      codename: '-',
      makers: this.$parent.sigma.main.makers
    }
  },
  components: { Navigation, Card, Fa },
  mounted () {
    let api = this.$parent.api
    $.get(`${api}/version`, (data) => {
      this.codename = data.codename
      this.version = data.version
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero { background-image: linear-gradient(160deg, #18ae90, #16826c 50%, #145246 75%); }
.hero-body { margin: auto; }
.hero .logo { max-height: 250px; }
.hero .title, .hero .subtitle { color: #fff; }
.version { padding-top: 1rem; }
.version span {
  border-radius: 2px;
  margin: 0 5px;}
.card { display: flex; margin: auto; max-width: 350px; }
@media screen and (max-width: 911px), print {
  .columns:not(.is-desktop) {
    display: block;
   }
   .card {
     max-width: 500px;
   }
}

</style>
