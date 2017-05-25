<script>
export default {
  name: 'tile',
  props: ['id', 'title', 'description', 'target'],
  template: `
  <div class="tile" :class="id">
    <a :href=target style="display: block; color: inherit; padding: 1.25rem 2.5rem 1.25rem 1.5rem;">
      <p class="title" style="color: inherit;">{{ title }}</p>
      <p class="subtitle" style="color: inherit;">{{ description }}</p>
    </a>
  </div>`
}
</script>
