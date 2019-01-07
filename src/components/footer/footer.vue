<template>
  <div class="footer">
      <a class="footer-cont" @click="ChangeMenu('/hello')">
        <i class="iconfont icon-tianqi_" style="font-size: 3rem"></i>
        <!--span class="footer-span">天气</span-->
      </a>
      <a class="footer-cont" @click="ChangeMenu('/Mine')">
        <i class="iconfont icon-wode1" style="font-size: 3rem"></i>
        <!--span class="footer-span">我的</span-->
      </a>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      userName: '',
      password: '',
      loading: false
    }
  },
  methods: {
    ChangeMenu (i) {
      console.dir(i)
      this.$router.push({path: i})
    }
  }
}
</script>
<style>
  .footer {
    height: 5rem;
    width: 100%;
    position: fixed;
    margin-top: 10%;
    background: seashell;
    opacity: 0.2;
    border-bottom-color: black;
    border-bottom: 2px;
  }
  .footer-cont {
    margin-top: 6%;
    float: left;
    width: 50%;
    height: 3rem;
    line-height: 1.8rem;
    font-size: 2rem;
    text-align: center;
  }
  .footer-span {
    z-index: 3;
    color: black;
  }
</style>
