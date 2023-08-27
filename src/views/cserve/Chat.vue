<template>
  <div>
    <el-container>
      <el-aside>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <ul class="infinite-list listc" v-infinite-scroll="load" style=""  >
          <li v-for="i in count" class="infinite-list-item">{{i }}</li>
        </ul>
      </el-aside>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "Chat",
  data(){
    return{
      count: 20,
      input:"",
    }

  },
  methods:{
    load(){
      this.count += 2
    }
  },
  created() {
    // this.load()
  }
}
</script>

<style scoped>
[v-cloak]{
  display: none;
}

.listc{
  overflow:auto;
  height:calc(50vh - 2px);
  width: 250px;
  list-style: none;
}
.lic{
  float:left
}

::-webkit-scrollbar {
  width: 0px;
}
</style>