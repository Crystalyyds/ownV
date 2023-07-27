<template>
  <div style="width: 220px ">
    <el-col>
      <el-menu
          style="height: 781px;width: 220px ;border-right: 0px"
          router
          default-active="http://localhost:8080"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          route
          active-text-color="#ffd04b">
        <img src="../assets/logo.png" alt="" style="height: 80px;width: 100px; ">
        <el-menu-item index="/" >
          <i class="el-icon-menu"></i>
          <span slot="title" >首页</span>
        </el-menu-item>
        <el-menu-item index="/user" >
          <i class="el-icon-menu"></i>
          <span slot="title">用户</span>
        </el-menu-item>
        <el-menu-item index="/file">
          <i class="el-icon-setting"></i>
          <span slot="title">文件</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
name: "Aside"
}
</script>


<style scoped>
.photo{
  width: 400px;
  height: 400px;
}

</style>