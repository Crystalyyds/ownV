<template>
  <div>
    <el-container>
      <el-aside>
        <div>
          <el-input v-model="input" placeholder="请输入内容" class="ipt" suffix-icon="el-icon-search"></el-input>
          <div class="did" style="border:3px solid #000">
            <div v-for="item in users">
              <div class="listc">
                <div class="block">
                  <el-avatar v-if="item.avatarUrl" shape="square" :size="50" :src="item.avatarUrl"></el-avatar>
                  <el-avatar v-else shape="square" :size="50" >私</el-avatar>
                </div>
                <div v-if="item.gender===1" class="nameid">男用户{{item.id}}</div>
                <div v-else class="nameid">女 用户{{item.id}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main style="background-color: #009cf9">
        <div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "Chat",
  data() {
    return {
      count: 50,
      input: "",
      users: [],
      adm:{},
    }
  },
  methods: {
    ok(){
      const get = async ()=>{
        await this.request.get("/user/find").then(res=>{
          this.adm = res.data
          // console.log(this.adm)
        })
        this.request.get("/client/list/"+this.adm.id).then(res=>{
          this.users = res.data
        })
        // console.log(this.adm)
      }
      get()
    },
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