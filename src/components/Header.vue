<template>
  <div style="height: 80px;background-color: rgb(84,92,100)">
    <div v-if="!user.username">
      <a class="login" href="login">login in</a>
      <a class="register" href="register">register</a>
    </div>
    <div class="name" v-else>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ user.username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item style="font-size: 14px; padding: 5px 0">
            <span style="text-decoration: none" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: Object,
  },
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.removeItem("token")
      this.$router.push("/login")
    },
  },
  mounted() {
    const that = this;
    // console.log('user', !!this.user)
  }
}
</script>

<style scoped>
.login {
  color: hsla(0, 0%, 100%, .5);
  text-decoration: none;
  font-size: 25px;
  position: relative;
  top: 20px;
  left: 450px;
}

.register {
  color: hsla(0, 0%, 100%, .5);
  text-decoration: none;
  font-size: 25px;
  position: relative;
  top: 20px;
  top: 20px;
  left: 500px;
}

.name {
  position: absolute;
  top: 25px;
  left: 1300px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.ed {
  width: 60px;
  height: 40px;
}
</style>