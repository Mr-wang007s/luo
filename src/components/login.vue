<template>
  <div>
    <div>
      <img class="zoom" src="../style/picture/login.png">
    </div>
    <h1 class="login_header">小志墨迹天气</h1>
    <div class="login_form">
      <div>
        <label class="login_label">用户:</label>
        <input v-model="userName" class="login_input"  placeholder="请输入用户名">
      </div>
      <div>
        <label class="login_label">密码:</label>
        <input v-model="password"  class="login_input" type="password" placeholder="请输入密码">
      </div>
      <el-button class="login_btn" type="primary" @click="login" :loading="loading" size="small">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      if (this.password) {
        this.$router.push({ path: '/hello' })
        this.loading = false
        console.dir('登陆成功')
      }
    }
  }
}
</script>

<style>
  .zoom{
    display:block;
    width:300px;
    height:240px;
    padding-left: 10%;
    -moz-transform:scale(2,2);
    text-align: center;
  }
  .login_form {
    padding-top: 10%;
    padding-left: 20%;
    padding-right: 10%;
  }
  .login_btn {
    margin-left: 20%;
    width: 100px;
    margin-top: 20%;
  }
  .login_input {
    height: 30px;
    width: 80%;
    margin-top: 15px;
    border-radius: 3px;
    border: 1px solid aliceblue;
  }
  .login_input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
  .login_header {
    padding-left: 25%;
    color: slategray;
    opacity: revert;
  }
  .login_label {
    color: slategray;
  }
</style>
