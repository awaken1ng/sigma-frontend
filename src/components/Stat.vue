<template>
  <div class="ui statistic">
    <div class="value">
      <span class="odometer">{{ value }}</span> <fa v-if=icon :icon=icon></fa>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </div>
</template>

<script>
  import Fa from '@/components/FaIcon'
  export default {
    name: 'stat',
    props: ['label', 'value', 'icon'],
    components: { Fa }
  }
</script>
