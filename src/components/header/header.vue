<template>
  <div class="header">
    <a class="iconfont icon-fanhui header-cont" style="font-size: 2rem" @click="back()"></a>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .header {
    height: 2rem;
    z-index: 4;
    overflow: hidden;
    width: 100%;
    position: fixed;
    background: silver;
    opacity: 0.3;
  }
  .header-cont {
    padding-left: 1%;
    line-height: 2rem;
    height: 2rem;
    font-size: 2rem;
    z-index: 3;
  }
</style>
