<template>
  <el-menu  style="min-height: 100%; overflow-x: hidden; border-right: 0px"
           text-color="#fff"
           active-text-color="#ffd04b"
           background-color="#545c64"
           router
  >
    <img src="../assets/logo.png" alt="" style="height: 80px;width: 100px; ">
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-menu"></i>
      <span slot="title">用户</span>
    </el-menu-item>
    <el-menu-item index="/file">
      <i class="el-icon-setting"></i>
      <span slot="title">文件</span>
    </el-menu-item>
    <el-menu-item index="/map">
      <i class="el-icon-setting"></i>
      <span slot="title">地图</span>
    </el-menu-item>
    <el-menu-item index="/role">
      <i class="el-icon-setting"></i>
      <span slot="title">权限</span>
    </el-menu-item>
    <el-menu-item index="/event">
      <i class="el-icon-setting"></i>
      <span slot="title">事件</span>
    </el-menu-item>
    <el-menu-item index="/chat">
      <i class="el-icon-setting"></i>
      <span slot="title">客服服务</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "Aside"
}
</script>


<style scoped>
.photo {
  width: 400px;
  height: 400px;
}

</style>