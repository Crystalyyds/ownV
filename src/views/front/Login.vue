<template>
  <div>
    <div class="t">
      <img src="@/assets/logo.png" class="lg" alt="">
      <router-link to="/login" class="fk">游客反馈</router-link>
    </div>
    <div>
      <img src="@/assets/cc1.jpg" alt="" class="photo"/>
      <div v-if="A" >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="login-title" @click="change">密码登录</span>
            <span class="login-title" style="position: relative;left: 50px" @click="change">手机登录</span>
          </div>
          <div class="login-form">
            <el-form :model="form" ref="loginForm">
              <el-form-item prop="username">
                <el-input type="text" v-model="form.username" auto-complete="off" placeholder="请输入用户名">
                  <template slot="prepend"><i style="font-size:20px" class="el-icon-user"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="text" v-model="form.password" auto-complete="off" placeholder="请输入密码">
                  <template slot="prepend"><i style="font-size:20px" class="el-icon-key"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-top: 30px">
                <el-button style="width:100%; height: 50px;font-size: 18px;"
                           type="primary" @click="handleLogin" :loading="loading">登录
                </el-button>
              </el-form-item>
              <router-link to="/register" style="text-decoration:none">新用户注册</router-link>
            </el-form>
          </div>
        </el-card>
      </div>
      <div v-if="B"  >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="login-title" @click="change">密码登录</span>
            <span class="login-title" style="position: relative;left: 50px" @click="change">手机登录</span>
          </div>
          <div class="login-form">
            <el-form :model="form" ref="loginForm">
              <el-form-item prop="username">
                <el-input type="text" v-model="form.phone" auto-complete="off" placeholder="请输入手机号">
                  <template slot="prepend"><i style="font-size:20px" class="el-icon-user"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="text" v-model="form.password" auto-complete="off" placeholder="请输入验证码"
                style="width: 180px;position: relative;left: -36px">
                  <template slot="prepend"><i style="font-size:20px" class="el-icon-key"></i></template>
                </el-input>
                <button>获取验证码</button>
              </el-form-item>
              <el-form-item style="margin-top: 30px">
                <el-button style="width:100%; height: 50px;font-size: 18px;"
                           type="primary" @click="handleLogin" :loading="loading">登录
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      form: {},
      form1: {},
      A: true,
      B: false,
    }
  },
  methods: {
    handleLogin() {
      this.request.post("http://localhost:9090/user/login", this.form).then(res => {
        if (res.code === '200') {
          localStorage.setItem("user", JSON.stringify(res.data))
          this.$message.success("登录成功")
          this.form = {}
          this.$router.push("/")
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    change(){
      this.A = !this.A;
      this.B = !this.B;
    }
  }
}
</script>

<style scoped>
.photo {
  width: 100%;
  height: 600px;
}

.login-title {
  font-size: 20px;
  position: relative;
  right: 80px;
}

.box-card {
  width: 375px;
  height: 340px;
  position: absolute;
  top: 220px;
  right: 40px;
}

.fk {
  padding-top: 20px;
  text-decoration: none;
  font-size: 25px;
  float: left;
  position: relative;
  left: 1230px;
}

.lg {
  height: 50px;
  padding-top: 16px;
  padding-left: 30px;
  float: left;


}

.t {
  height: 75px;
}

</style>

