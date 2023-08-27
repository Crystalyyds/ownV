<template>
  <div>
    <h1>聊天室</h1>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Chat",
  data(){
    return{
      count: 20,
    }

  },
  methods:{
    load(){
      // this.count += 2
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
  width: 310px;
  height: 1300px;
}
</style>