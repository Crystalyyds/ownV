<template>
  <div>
    <el-container>
      <el-aside>
        <div>
          <el-input v-model="input" placeholder="请输入内容" class="ipt" suffix-icon="el-icon-search"></el-input>
          <el-button style="margin-left: 5px" @click="shou">搜</el-button>
          <div class="did" style="border:3px solid #000">
            <div v-for="item in users">
              <div class="listc">
                <div class="block">
                  <el-avatar v-if="item.avatarUrl" shape="square" :size="50" :src="item.avatarUrl"></el-avatar>
                  <el-avatar v-else shape="square" :size="50" >私</el-avatar>
                </div>
                <div v-if=" item.gender==1 " class="nameid">{{item.username}}</div>
                <div v-else class="nameid">{{item.username}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main style="background-color: #009cf9">
        <Communicate/>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import Communicate from "@/components/Communicate.vue";
export default {
  name: "Chat",
  components:{
    Communicate
  },
  data() {
    return {
      count: 50,
      input: "",
      users: [],
      adm:{},
    }
  },
  methods: {
    async ok(){
      const get = async ()=>{
        await this.request.get("/api/user/find").then(res=>{
          this.adm = res.data
          // console.log(this.adm)
        })
        if(this.adm.id){
          this.request.get("/api/client/list/"+this.adm.id,{
            params:{
              input: this.input
            }
          }).then(res=>{
            this.users = res.data
          })
        }else{
          this.$message.error("权限错误，请重新登录")
        }
      }
      await get()
    },
    shou(){
      console.log(this.input)
      this.request.get("/api/client/list/"+this.adm.id,{
        params:{
          input: this.input
        }
      }).then(res=>{
        if(res.code === 200){
          this.users = res.data
          // console.log(this.u)
        }else{
          this.$message.error("没有权限")
        }
      })
    }
  },
  created() {
    this.ok()
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.listc {
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 70px;
  border-bottom: 1px solid #000;
}


::-webkit-scrollbar {
  width: 0px;
}

.ipt {
  width: 200px;
  height: 40px;
}

::v-deep .el-input--mini .el-input__inner {
  height: 40px;
}

.did {
  margin-top: 10px;
  height: 75vh;
  overflow: scroll;
}

.block{
  position: relative;
  width: 70px;
  height: 60px;
  margin-top: 10px;
}
.nameid{
  width: 100px;
  height: 60px;
  font-size: 18px;
  position: relative;
  left: 100px;
  top: -45px;
}
</style>