<template>
  <section class="hero is-fullheight splash">
    <div class="hero-body">
      <div class="columns container">

        <div class="column">
          <div class="has-text-centered">
            <img class="logo" src="./../assets/logo_ap.png">
            <h1 class="title">Welcome, to the Aurora Project</h1>
            <h2 class="subtitle">
              We specialize in both
              <fa icon='fa-paint-brush'></fa> style
              and
              <fa icon='fa-lock'/></fa> security
            </h2>
          </div>
        </div>

        <div class="column">

            <h1 class="title has-text-centered"><fa icon='fa-code-fork'></fa> Our projects</h1>

            <div class="tile sigma">
              <a href="https://sigma.auroraproject.xyz/">
                <p class="title">Apex Sigma</p>
                <p class="subtitle">A bot made to bring knowledge to your discord server.</p>
              </a>
            </div>

            <div class="tile hastebin">
              <a href="https://haste.auroraproject.xyz/">
                <p class="title">Hastebin</p>
                <p class="subtitle">Just a regular hastebin, hosted by us.</p>
              </a>
            </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'landing'
  // data () {
  //   return {
  //     msg: 'Welcome'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero { background: linear-gradient(160deg, #18AE90 0%, #16826C 50%, #145246 75%) }
.hero, .tile, .title, .subtitle { color: #fff; }
.hero .columns, .hero .columns .column { margin: auto; }
.fa { padding-top: 4px; }
.fa-code-fork { font-size: 30px; }
.logo { max-width: 400px; }
.tile {
  margin: 5px;
  border-radius: 3px;
  background: unset;
  background-size: cover; }
.tile a { padding: 1.25rem 2.5rem 1.25rem 1.5rem; width: 100% }
.tile:hover { box-shadow: 0 0 20px rgba(0,0,0,0.2); cursor: pointer; }
.tile.sigma { background-image: url("./../assets/SigmaTile.png"); }
.tile.hastebin { background-image: url("./../assets/HasteTile.png"); }
</style>
