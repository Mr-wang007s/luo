<template>
  <div>
    <div class="form">
      <el-scrollbar style="height: 110%">
        <div  v-for="item of link_local" :key="item.code">
          <p @click="view(item)">{{item.title}}</p>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export const cityData = [
  { title: '北京市', code: '101010100', spell: 'beijing', province: '北京市' },
  { title: '昌平', code: '101010700', spell: 'changping', province: '北京市' },
  { title: '朝阳', code: '101010300', spell: 'chaoyang', province: '北京市' },
  { title: '大兴', code: '101011100', spell: 'daxing', province: '北京市' },
  { title: '房山', code: '101011200', spell: 'fangshan', province: '北京市' },
  { title: '丰台', code: '101010900', spell: 'fengtai', province: '北京市' },
  { title: '海淀', code: '101010200', spell: 'haidian', province: '北京市' },
  { title: '怀柔', code: '101010500', spell: 'huairou', province: '北京市' },
  { title: '门头沟', code: '101011400', spell: 'mentougou', province: '北京市' },
  { title: '密云', code: '101011300', spell: 'miyun', province: '北京市' },
  { title: '平谷', code: '101011500', spell: 'pinggu', province: '北京市' },
  { title: '石景山', code: '101011000', spell: 'shijingshan', province: '北京市' },
  { title: '顺义', code: '101010400', spell: 'shunyi', province: '北京市' },

  { title: '上海市', code: '101020100', spell: 'shanghai', province: '上海市' },
  { title: '宝山', code: '101020300', spell: 'baoshan', province: '上海市' },
  { title: '崇明', code: '101021100', spell: 'chongming', province: '上海市' },
  { title: '奉贤', code: '101021000', spell: 'fengxianqu', province: '上海市' },
  { title: '嘉定', code: '101020500', spell: 'jiading', province: '上海市' },
  { title: '金山', code: '101020700', spell: 'jinshan', province: '上海市' },
  { title: '闵行', code: '101020200', spell: 'minhang', province: '上海市' },
  { title: '浦东', code: '101021300', spell: 'pudong', province: '上海市' },
  { title: '青浦', code: '101020800', spell: 'qingpu', province: '上海市' },
  { title: '松江', code: '101020900', spell: 'songjiang', province: '上海市' },
  { title: '徐家汇', code: '101021200', spell: 'xuhui', province: '上海市' },

  { title: '天津市', code: '101030100', spell: 'tianjin', province: '天津市' },
  { title: '宝坻', code: '101030300', spell: 'baodi', province: '天津市' },
  { title: '北辰', code: '101030300', spell: 'beichen', province: '天津市' },
  { title: '东丽', code: '101030400', spell: 'dongli', province: '天津市' },
  { title: '蓟县', code: '101031400', spell: 'jixian', province: '天津市' },
  { title: '津南', code: '101031000', spell: 'jinnan', province: '天津市' },
  { title: '静海', code: '101030900', spell: 'jinghai', province: '天津市' },
  { title: '宁河', code: '101030700', spell: 'ninghe', province: '天津市' },
  { title: '武清', code: '101030200', spell: 'wuqing', province: '天津市' },
  { title: '西青', code: '101030500', spell: 'xiqing', province: '天津市' },

  { title: '重庆市', code: '101040100', spell: 'chongqing', province: '重庆市' },
  { title: '巴南', code: '101040900', spell: 'banan', province: '重庆市' },
  { title: '北碚', code: '101040800', spell: 'beibei', province: '重庆市' },
  { title: '璧山', code: '101042900', spell: 'bishan', province: '重庆市' },
  { title: '长寿', code: '101041000', spell: 'changshou', province: '重庆市' },
  { title: '城口', code: '101041600', spell: 'chengkou', province: '重庆市' },
  { title: '大足', code: '101042600', spell: 'dazu', province: '重庆市' },
  { title: '垫江', code: '101042200', spell: 'dianjiang', province: '重庆市' },
  { title: '丰都', code: '101043000', spell: 'fengdu', province: '重庆市' },
  { title: '奉节', code: '101041900', spell: 'fengjie', province: '重庆市' },
  { title: '涪陵', code: '101041400', spell: 'fuling', province: '重庆市' },
  { title: '合川', code: '101040300', spell: 'hechuan', province: '重庆市' },
  { title: '江津', code: '101040500', spell: 'jiangjin', province: '重庆市' }
]

export default {
  name: 'HelloWorld',
  data () {
    return {
      city_map: new Map(),
      link_local: [],
      province: '',
      city_message: {
        code: ''
      }
    }
  },
  beforeMount () {
    let a = sessionStorage.getItem('key')
    if (!a) {
      this.province = '北京市'
    } else {
      this.province = JSON.parse(a).province
    }
    console.dir(a)
  },
  mounted () {
    // this.getWeather()
    this.getCity()
  },
  methods: {
    getWeather: function () {
      this.$axios.get('/api/101030700.html')
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    view: function (item) {
      console.dir(item)
      this.city_message.code = item.code
      this.$router.push({path: '/view', query: { userId: 123 }})
    },
    getCity: function () {
      console.dir(this.province)
      let tempMap = new Map()
      cityData.forEach(item => {
        tempMap.set(item.spell, item)
      })
      this.city_map = tempMap
      this.link_local = []
      this.city_map.forEach((v, k, m) => {
        if (v.province === this.province) {
          this.link_local.push(v)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zoom{
    display:block;
    width:300px;
    height:240px;
    padding-left: 10%;
    -moz-transform:scale(2,2);
    text-align: center;
  }
  .form {
    height: 500px;
    padding-top: 10%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>
