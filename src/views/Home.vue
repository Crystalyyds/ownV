<template>
  <el-container>
    <el-aside style="width: 220px;height: 100%;">
      <Aside/>
    </el-aside>
    <el-container style="">
      <el-header style="height: 80px;padding:0px">
        <Header/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
export default {
  name: "Front",
  components:{
    Header,Aside
  },
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    }
  },
  created() {

  },
}
</script>

<style>
.item {
  display: inline-block;
  width: 100px;

  text-align: center;
  cursor: pointer
}

.item a {
  color: #1E90FF;
}

.item:hover {
  background-color: LightPink;
}
</style>
