<template>
  <div id="backdrop" v-bind:class=classObject></div>
</template>

<script>
export default {
  name: 'backdrop',
  data () {
    return {
      classObject: {
        light: true,
        dark: false
      }
    }
  },
  beforeCreate () {
    let bus = this.$root.eventBus
    let backdrop = this
    bus.$on('backdrop-switch', function (style) {
      console.log(backdrop.classObject)
      // let backdrop = document.getElementById('backdrop')
      // backdrop.className = ''
      // backdrop.classList.toggle(style)
    })
    bus.$on('backdrop-light', function (style) {
      backdrop.classObject.light = true
      backdrop.classObject.dark = false
    })
    bus.$on('backdrop-dark', function (style) {
      backdrop.classObject.dark = true
      backdrop.classObject.light = false
    })
  }
}
</script>

<style scoped>
#backdrop {
  position: fixed;
  width: 100%;
  height: 100%;

}
.light {
  background-image: linear-gradient(160deg, #18ae90, #16826c 50%, #145246 75%);
}
.dark {
  background-image: linear-gradient(160deg, #1c816c, #165b4d 50%, #0b372f 75%);
}

</style>
