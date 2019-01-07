<template>
    <div class="form">
      <el-scrollbar style="height: 110%" :v-if="WeatherInfo.cityid">
        <div>
          <p>{{WeatherInfo.AP}}</p>
          <p>{{WeatherInfo.Radar}}</p>
          <p>{{WeatherInfo.SD}}</p>
          <p>{{WeatherInfo.WD}}</p>
          <p>{{WeatherInfo.WS}}</p>
          <p>{{WeatherInfo.WSE}}</p>
          <p>{{WeatherInfo.city}}</p>
          <p>{{WeatherInfo.cityid}}</p>
          <p>{{WeatherInfo.isRadar}}</p>
          <p>{{WeatherInfo.njd}}</p>
          <p>{{WeatherInfo.sm}}</p>
          <p>{{WeatherInfo.temp}}</p>
          <p>{{WeatherInfo.time}}</p>
        </div>
      </el-scrollbar>
      <button @click="back()">返回</button>
    </div>
</template>

<script>

export default {
  name: 'View',
  data () {
    return {
      city_map: new Map(),
      link_local: [],
      code: '',
      WeatherInfo: {
        AP: '',
        Radar: '',
        SD: '',
        WD: '',
        WS: '',
        WSE: '',
        city: '',
        cityid: '',
        isRadar: '',
        njd: '',
        sm: '',
        temp: '',
        time: ''
      }
    }
  },
  mounted () {
    console.dir(this.$router)
    this.getWeather(this.$router.query)
  },
  methods: {
    back () {
      this.$router.push({path: '/hello'})
    },
    getWeather (code) {
      console.dir(code)
      this.$axios.get('api/' + code + '.html').then((response) => {
        this.WeatherInfo = response.data.weatherinfo
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .form {
    height: 500px;
    padding-top: 10%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>
