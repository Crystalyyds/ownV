<template>
  <el-container style="min-height: 100vh">
    <el-aside style="width: 220px;">
      <Aside/>
    </el-aside>
    <el-container style="width: 100%">
      <el-header style="height: 80px;padding:0px">
        <Header :user="user"/>
      </el-header>
      <el-main style="width: 100%;height: 100%">
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
      this.request.get("/api/user/find").then(res => {
        this.user = res?.data ?? {}
        // console.log(this.user)
        store.commit("setUser",this.user)
        store.commit("insertSearch",this.user)
        // console.log(store.getters.getUser.nickname)
      })
    }
  },
  created() {
    this.load()
    // console.log(this.user)
  },
  computed:{

  },
  mounted(){
    document.querySelector('body').setAttribute('style',  'margin : 0px');
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
