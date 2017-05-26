<template>
  <div id="sigma-status">
    <Navigation></Navigation>
    <frame url="https://status.auroraproject.xyz/"></iframe>
  </div>
</template>

<script>
  import Frame from '@/components/Iframe'
  import Navigation from '@/components/Navigation'
  export default {
    name: 'Status',
    components: { Navigation, Frame }
  }
</script>
