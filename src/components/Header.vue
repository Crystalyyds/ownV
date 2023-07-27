<template>
  <div style="height: 80px;background-color: rgb(84,92,100)" >
    <div v-if="A">
      <a class="login" href="login" >login in</a>
      <a class="register" href="register">register</a>
    </div>
  </div>
</template>

<script>
export default {
name: "Header",
  data(){
  return{
    A:true
    }
  }
}
</script>

<style scoped>
.login{
  color: hsla(0,0%,100%,.5);
  text-decoration: none;
  font-size: 25px;
  position: relative;
  top: 20px;
  left: 450px;
}
.register{
  color: hsla(0,0%,100%,.5);
  text-decoration: none;
  font-size: 25px;
  position: relative;
  top: 20px;
  top: 20px;
  left: 500px;
}
</style>