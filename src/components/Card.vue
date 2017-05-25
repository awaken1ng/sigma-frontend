<script>
export default {
  name: 'card',
  props: ['avatar', 'name', 'content', 'overlay'],
  template: `<div class="card">
    <div class="card-image">
      <figure class="image is-64x64">
        <img :src=avatar :alt=name>
        <img class="overlay" :src=overlay>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content"><p class="title is-4">{{ name }}</p></div>
      </div>
      <div  class="content">
        {{ content }}
      </div>
    </div>
  </div>`
}
</script>

<style scoped>
.card {padding: 1rem; }
.card-content { padding: 0 0 0 1rem; }
.overlay {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
}
</style>
