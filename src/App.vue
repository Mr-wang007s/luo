<template>
  <div id="background">
    <v-header v-show="$route.meta.showHeader"></v-header>
    <router-view/>
    <v-footer v-show="$route.meta.showFooter"></v-footer>
  </div>
</template>

<script>
import foot from './components/footer/footer.vue'
import head from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    'v-footer': foot,
    'v-header': head
  }
}
</script>

<style>
  #background{
    position: fixed;
    margin: 0;
    height: 100%;
    width: 100%;
    margin-left: -2.1%;
    margin-top: -2.1%;
    background: url("./style/picture/background.jpg");
    background-size: 100% 100%;
  }
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
