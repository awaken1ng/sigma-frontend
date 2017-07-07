<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <div class="columns">
          <div class="column is-two-thirds">
            <p>
              © Aurora Project: The place where <span class="robots">robots</span>, <span class="foxes">foxes</span> and <span class="tomatoes">tomatoes</span> are worshiped.
            </p>
          </div>
          <div class="column">
            <a class="icon" href="https://github.com/aurora-pro"><icon name="github"></icon> Github</a>
            <span class="separator">|</span><a class="icon" href="https://discordapp.com/invite/Ze9EfTd"><icon name="discord"></icon> Discord</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// TODO move hardcoded data into config
import icon from '@/components/Icon'
export default {
  name: 'Footer',
  components: { icon }
}
</script>

<style scoped>
footer {
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem 1.5rem;
}
p, a,span { color: white; }
.columns { align-items: center; }
/*.container { padding: 1.5rem; }*/
/* Space paragraphs in the footer */
div.content > p:not(:last-child) { padding: 1rem; }

.robots { color: #8fa9bc; }
.foxes { color: #aa6532; }
.tomatoes { color: #b03232; }

.container .column .icon { margin: 0 1rem; }
</style>
