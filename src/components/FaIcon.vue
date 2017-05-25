<script>
export default {
  name: 'fa',
  props: ['icon', 'size'],
  template: '<i class="fa" :class=icon :style=style aria-hidden="true"></i>',
  data () {
    return {
      style: { fontSize: 'inherit' }
    }
  },
  mounted (event) {
    let size = this.size
    if (typeof size !== 'undefined') {
      this.style.fontSize = size + 'px'
    }
  }
}
</script>
