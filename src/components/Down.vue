<template>
  <div style="position: absolute; top: 700px;">
    <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="main" style="width: 133px">处理中心</el-menu-item>
      <el-menu-item index="event" style="width: 133px">处理中心</el-menu-item>
      <el-menu-item index="me" style="width: 133px">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Down",
  data(){
    return{
      activeIndex: '',
    }
  },
  methods:{
    handleSelect(key, keyPath){
      // console.log(keyPath)
      // this.activeIndex = keyPath
    }
  }
}
</script>

<style scoped>
.el-menu-demo {
  width: 1432px;
  height: 72px;
  color: rgb(255, 208, 75);
  border-bottom-color: rgb(255, 208, 75);
  background-color: rgb(84, 92, 100);
}

</style>