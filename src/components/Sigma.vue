<template>

  <div id="sigma">
    <Navigation></Navigation>
    <section class="hero">
      <div class="hero-body has-text-centered">
        <img class="logo" src="./../assets/logo_sigma_light.png">
        <h1 class="title">This is Sigma, the Database Giant.</h1>
        <h2 class="subtitle">A bot made to bring knowledge to your Discord server.</h2>
        <a class="button" href="https://discordapp.com/oauth2/authorize?client_id=216437513709944832&scope=bot&permissions=8">Add to Discord</a>
      </div>
    </section>
   </div>
</template>

<script>
// import $ from 'jQuery'
import Navigation from '@/components/Navigation'
export default {
  name: 'Sigma-main',
  data () {
    return {
      version: []
    }
  },
  components: { Navigation }
  // mounted () {
    // $.get('', (data) => {
      // this.version = data
    // })
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero { background-image: linear-gradient(160deg,#18ae90,#16826c 50%,#145246 75%); }
.hero-body { margin: auto; }
.hero .logo { max-height: 250px; }
.hero .title, .hero .subtitle { color: #fff; }
</style>
