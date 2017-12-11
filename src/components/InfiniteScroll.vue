<template>
  <div class="infinite-scroll">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['triggerDistance', 'scrollDisabled', 'scrollFn'],
  methods: {
    scrollListenerFn () {
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let innerHeight = window.innerHeight
      if (scrollTop + innerHeight >= scrollHeight - this.triggerDistance) {
        if (!this.scrollDisabled) {
          this.scrollFn()
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListenerFn)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollListenerFn)
  }
}
</script>

<style scoped lang="scss">
  .infinite-scroll {

  }
</style>
