<template>
  <div>
    <router-link to="/login">
      <h1 class="el-icon-back" style="position: absolute; left: 20px">返回</h1>
    </router-link>
    <div class="bd">
      <el-form :model="form" status-icon :rules="rules" ref="" label-width="80px" size="medium">
        <el-form-item label="用户名" prop="username" style="margin-top: 50px">
          <el-input v-model="form.username" placeholder="6到16位字符或数字"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname" style="margin-top: 50px">
          <el-input v-model="form.nickname" placeholder="无所谓看你自己"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="margin-top: 50px">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="6到20位字符或数字"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" style="margin-top: 50px">
          <el-input type="password" v-model="form.checkPass" autocomplete="off"
                    placeholder="6到20位字符或数字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var checkUsername = (rule, value, callback) => {
      // console.log(value.length)
      if (value == '') {
        return callback(new Error('用户名不能为空'));
      }
      setTimeout(() => {
        if (value.length <= 4) {
          callback(new Error('用户名长度不能小于4位'));
        } else {
          if (value.length >= 17) {
            callback(new Error('用户名长度不能大于或16位'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
        this.key = false;
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
        this.key = false;
      } else {
        this.key=true
        callback();
      }
    };
    return {
      form: {
        username: "",
        nickname : "",
        password: "",
        checkPass: "",
      },
      key: false,
      rules: {
        username: [
          {validator: checkUsername, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}

        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  created() {
    // console.log(this.form)
  },
  methods:{
    resetForm(){
      this.form={}
    },
    submitForm(){
      // console.log(this.form)
      // console.log(this.key)
      if(this.key) {
        this.request.post("http://localhost:9090/user/register", this.form).then(res => {
          if (res.code === "200") {
            this.$message.success("注册成功，请重新登录")
            this.form = {}
            this.$router.push("/login")
          } else {
            this.$message.error(res.msg);
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.bd {
  width: 700px;
  height: 500px;
  position: absolute;
  top: 150px;
  left: 400px;
  border: 3px solid rgb(225, 225, 225);
}

</style>