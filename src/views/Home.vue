<template>
  <el-container>
    <el-aside style="width: 220px;height: 100%;">
      <Aside/>
    </el-aside>
    <el-container style="">
      <el-header style="height: 80px;padding:0px">
        <Header :user="user"/>
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
import store from "@/store";
export default {
  name: "Front",
  components: {
    Header, Aside
  },
  data() {
    return {
      user: {},
    }
  },
  methods: {
    load() {
      this.request.get("/user/find").then(res => {
        this.user = res?.data ?? {}
        // console.log(this.user)
        store.commit("setUser",this.user)
        // console.log(store.getters.getUser.nickname)
      })
    }
  },
  created() {
    this.load()
    // console.log(this.user)
  },
  computed:{
    ok(){
    }
  }
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
