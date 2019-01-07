<template>
  <div>
    <div class="form">
      <el-scrollbar style="height: 110%">
        <div  v-for="item of link_city" :key="item.code">
          <p @click="select(item)">{{item.title}}</p>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export const cityData = [
  { title: '北京市', code: '01010101', spell: 'beijing', province: '北京市' },
  { title: '上海市', code: '01012601', spell: 'shanghai', province: '上海市' },
  { title: '天津市', code: '01012901', spell: 'tianjin', province: '天津市' },
  { title: '重庆市', code: '01010401', spell: 'chongqing', province: '重庆市' }
]
export default {
  name: 'Mine',
  data () {
    return {
      link_city: [],
      msg: 'Welcome to Your Vue.js App',
      city_message: {
        title: '',
        province: ''
      }
    }
  },
  mounted () {
    this.getWeather()
  },
  methods: {
    getWeather: function () {
      this.link_city = cityData
    },
    select (item) {
      this.city_message.title = item.title
      this.city_message.province = item.province
      sessionStorage.clear()
      sessionStorage.setItem('key', JSON.stringify(this.city_message))
      console.dir(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form {
    height: 500px;
    padding-top: 10%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>
