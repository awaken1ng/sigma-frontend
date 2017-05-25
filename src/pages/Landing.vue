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
            <h1 class="title has-text-centered"><fa icon='fa-code' size=30></fa> Our projects</h1>
            <tile v-for="project in projects" :key=project.id :id=project.id :title=project.title :description=project.description :target=project.target></tile>

            <h1 class="title has-text-centered" style="margin-top: 1.5rem;"><fa icon='fa-code-fork' size=30></fa> Other</h1>
            <tile v-for="project in others" :key=project.id :id=project.id :title=project.title :description=project.description :target=project.target></tile>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Tile from '@/components/Tile'
import Fa from '@/components/FaIcon'
export default {
  name: 'Landing',
  components: { Tile, Fa },
  data () {
    return {
      projects: this.$parent.landing.projects,
      others: this.$parent.landing.others
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero { background-image: linear-gradient(160deg, #18AE90 0%, #16826C 50%, #145246 75%) }
.hero, .tile, .title, .subtitle { color: #fff; }
.hero .columns, .hero .columns .column { margin: auto; }
.logo { max-width: 400px; }
.tile { margin: 10px auto;
  max-width: 700px;
  border-radius: 3px;
  background: unset;
  background-size: cover; }
.tile a { display: block;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  width: 100% }
.tile:hover { box-shadow: 0 0 20px rgba(0,0,0,0.2); cursor: pointer; }
.tile.sigma { background-image: url("./../assets/SigmaTile.png"); }
.tile.hastebin { background-image: url("./../assets/HasteTile.png"); }
.tile.bdlinestickers { background-image: url("./../assets/BDLineStickersTile.png"); }
@media screen and (max-width: 500px), print { .logo {max-width: 300px; } }
@media screen and (max-width: 400px), print { .logo {max-width: 200px; } }
@media screen and (max-width: 936px), print { .columns { display: block !important; } }
</style>
