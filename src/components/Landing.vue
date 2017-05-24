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

            <h1 class="title has-text-centered"><i class="fa fa-code-fork" aria-hidden="true" style="font-size: 30px;"></i> Our projects</h1>

            <div class="tile sigma">
              <article class="tile is-child notification">
                <p class="title">Apex Sigma</p>
                <p class="subtitle">A bot made to bring knowledge to your discord server.</p>
              </article>
            </div>

            <div class="tile hastebin">
              <article class="tile is-child notification">
                <p class="title">Hastebin</p>
                <p class="subtitle">Just a regular hastebin, hosted by us.</p>
              </article>
            </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero { background: linear-gradient(160deg, #18AE90 0%, #16826C 50%, #145246 75%) }
.hero, .tile, .title, .subtitle { color: #fff; }
.hero .columns, .hero .columns .column { margin: auto; }

.splash .fa { padding-top: 4px; }





.logo { max-width: 400px; }
.tile {
  margin: 5px;
  background-size: cover; }
.tile.sigma article { background-image: url("./../assets/SigmaTile.png"); }
.tile.hastebin article { background-image: url("./../assets/HasteTile.png"); }
</style>
