<template>
  <div id="sigma-commands">
    <Navigation></Navigation>
    <section class="hero is-fullheight splash">
      <div class="hero-body">
        <div class="container animated fadeIn">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import Navigation from '@/components/Navigation'

export default {
  name: 'Sigma-commands',
  data () {
    return {
      commands: null
    }
  },
  components: { Navigation },
  mounted () {
    let api = this.$parent.api
    $.get(`${api}/commands`, (data) => {
      this.commands = data
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
