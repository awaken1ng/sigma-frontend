<template>
  <div id="sigma-status">
    <Navigation></Navigation>
    <frame url="https://status.auroraproject.xyz/"></iframe>
  </div>
</template>

<script>
  import Frame from '@/components/IFrame'
  import Navigation from '@/components/Navigation'
  export default {
    name: 'Status',
    components: { Navigation, Frame }
  }
</script>
