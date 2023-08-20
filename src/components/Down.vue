<template>
  <div class="dh">
    <el-row :gutter="20">
      <el-col :span="6">
        <h1 class="el-icon-s-promotion d1" @click="drawer = true"></h1>
        <h1 style="margin-top: 5px">Walking</h1>
      </el-col>
      <el-col :span="6">
        <h1 class="el-icon-s-promotion d1" ></h1>
        <h1 style="margin-top: 5px">Driving</h1>
      </el-col>
      <el-col :span="6">
        <h1 class="el-icon-s-promotion d1" ></h1>
        <h1 style="margin-top: 5px">go</h1>
      </el-col>
      <el-col :span="6">
        <h1 class="el-icon-s-promotion d1" ></h1>
        <h1 style="margin-top: 5px">go</h1>
      </el-col>
    </el-row>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Down",
  data(){
    return{
      drawer: false,
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.dh{
  position: absolute;
  Bottom: 20px;
  left: 240px;
  width: 520px;
  height: 60px;
  background-color: #909399;
  z-index: 99999;
}

.d1{
  margin-top: 6px;
  margin-bottom: 0px
}





</style>