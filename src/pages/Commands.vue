<template>
  <div id="sigma-commands">
    <section class="hero is-fullheight"></section>
    <Navigation></Navigation>
    <loader id="loader"></loader>
    <div class="container animated fadeIn" style="width: auto;">
      <h1 class="title"><fa icon="fa-terminal"></fa> Commands</h1>

      <div class="ui styled accordion category animated fadeIn" v-for="category in commands">
        <div class="title"><i class="dropdown icon"></i><fa :icon=category.icon></fa> {{category.name }}</div>
        <div class="content commands">
          <div class="command" v-for="command in category.commands">
            <h1>{{ command.names.primary }}</h1>
            <p>{{ command.desc }}</p>
            <p class="usage">Example: <span>{{ command.usage }}</span></p>
            <p class="aliases" v-if=command.names.alts>
              Alternative names: <strong>{{ command.names.alts.join(', ') }}</strong>
            </p>
            <p class="owner" v-if=command.admin>
              <strong>Warning:</strong> This command can only be used by <strong><fa icon='fa-cogs'></fa> Bot owners</strong>!<br />
              <span>The bot owner is the person hosting the bot on their machine.<br />
              This is <strong>not the discord server owner</strong> and <strong>not the person who invited the bot</strong> to the server.<br /></span>
            </p>
            <p class="partner" v-if=command.partner>
              <strong>Warning:</strong> This command can only be used by <strong><fa icon='fa-diamond'></fa> Partners</strong>!
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import './../../node_modules/semantic-ui-css/components/accordion.js'
import Navigation from '@/components/Navigation'
import Fa from '@/components/FaIcon'
import Loader from '@/components/Loader'
export default {
  name: 'Sigma-commands',
  data () {
    return {
      initialized: false,
      commands: []
    }
  },
  components: { Navigation, Fa, Loader },
  beforeMount () {
    this.$root.sigma.navmenu.conditional['sigma-commands'] = {
      left: [
        {
          text: 'Open all',
          class: 'sigma-cmd-open',
          method: (event) => {
            $('.ui.accordion').accordion('open', 0)
            $(event.target).hide()
            $('.sigma-cmd-close').show()
          }
        },
        {
          text: 'Close all',
          class: 'sigma-cmd-close',
          style: {display: 'none'},
          method: (event) => {
            $('.ui.accordion').accordion('close', 0)
            $(event.target).hide()
            $('.sigma-cmd-open').show()
          }
        }
      ]
    }
    let api = this.$root.api
    $.get(`${api}/commands`, (data) => {
      this.commands = data
      $('#loader').hide()
    })
  },
  mounted () {
    document.title = 'Sigma: The Database - Commands'
  },
  updated () {
    if (!this.initialized) {
      $('.ui.accordion').accordion({
        onOpen: () => {
          let total = $('.ui.accordion').length
          let active = $('.ui.accordion .title.active').length
          if (total === active) {
            $('.sigma-cmd-open').hide()
            $('.sigma-cmd-close').show()
          } else {
            $('.sigma-cmd-open').show()
            $('.sigma-cmd-close').show()
          }
        },
        onClose: () => {
          let active = $('.ui.accordion .title.active').length
          if (active === 0) {
            $('.sigma-cmd-open').show()
            $('.sigma-cmd-close').hide()
            return
          } else {
            $('.sigma-cmd-open').show()
            $('.sigma-cmd-close').show()
          }
        }
      })
      this.initialized = true
    }
  }

}
</script>

<style scoped>
.hero {
  position: fixed;
  width: 100%;
  height: calc(100% - 3.5rem);
}
.container { margin-top: 4rem; }
.container h1 { color: white; }
@media screen and (max-width: 999px), print { .container h1.title { text-align: center; } }
.ui.accordion {
  width: auto;
  margin: 1rem;
  font-size: 1rem; }
.ui.accordion .content { padding: 0.5em 2.5em 1.5em; }
.ui.styled.accordion .title { color: rgba(100, 100, 100, 0.4); }
.ui.styled.accordion .title:hover, .ui.styled.accordion .title.active { color: rgb(100, 100, 100) }
.command:not(:last-child) { margin-bottom: 2rem; }
.command h1 { font-size: 1.5rem; }
.command h1, .aliases strong { color: #1B6F5F; }
.command h1, .command p { margin-bottom: 0.5rem; }
p.usage { margin-bottom: 0.75rem; }
.usage span {
  padding: .2rem .4rem;
  font-size: 0.95rem;
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  color: #fff;
  background-color: #292b2c;
  border-radius: .2rem; }
.partner strong { color: #0099FF; }
.owner strong { color: #DB0000; }
.owner span { color: #636c72; }
.owner span strong { color: #636c72; }
</style>
