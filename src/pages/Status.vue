<template>
  <div id="sigma-status">
    <Navigation></Navigation>
    <frame :url=link></iframe>
  </div>
</template>

<script>
  import Frame from '@/components/IFrame'
  import Navigation from '@/components/Navigation'
  export default {
    name: 'Status',
    components: { Navigation, Frame },
    data () {
      return {
        link: this.$root.sigma.links.status
      }
    },
    mounted () {
      document.title = 'Aurora Project - Status'
    }
  }
</script>
