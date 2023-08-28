<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="button button1" @click="jump">点我</button>
  </div>
</template>
<script>

export default {
  name:"About",
  methods:{
    jump() {
      this.$message.success("傻逼,我叫你点你就点？")
      // console.log("????")
    }
  },
  data(){
    return{
      ttt : 1,
    }
  },
  created() {
    // console.log(this.ttt)
    // this.ttt = 2;
    // console.log(this.ttt)
  }
}
</script>


<style scoped>

.button {
  background-color: #1E90FF;
  width: 400px;
  height: 80px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.button1:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(59 225 175);
}


.button-all{
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}


</style>