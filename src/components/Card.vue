<template>
  <div class="maker">
    <div class="avatar">
      <figure class="image is-96x96">
        <img :src=avatar :alt=name>
        <div class="overlay" :class=overlay></div>
      </figure>
    </div>
    <div class="maker-content">
      <div><p class="title is-4">{{ name }}</p></div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['avatar', 'name', 'content', 'overlay']
}
</script>

<style scoped>
.maker {
  display: flex;
  margin: auto;
  max-width: 350px;
  padding: 1rem; }
.maker-content { padding: 0 0 0 1rem; }
.overlay {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
  background-size: 20px;
}
.python { background-image: url("./../assets/AlexUserIcon.png"); }
.js { background-image: url("./../assets/AwakUserIcon.png");}
.ruby { background-image: url("./../assets/ValebuUserIcon.png"); }
</style>
