<template>
  <div id="my">
    <div id="container"></div>
    <div class="tt">
      <h1>{{ this.form.title }}</h1>
    </div>
    <div class="ct">
      {{ this.form.content }}
    </div>
    <div class="tm">
      {{ this.form.createTime }}
    </div>
  </div>
</template>

<script>


export default {
  name: "Content",
  data() {
    return {
      form: {},
    }
  },
  mounted() {
    console.log("ok")
    var that = this
    document.querySelector('body').setAttribute('style', 'background-color: #e6e6e6; magin:0px');
    var map = new AMap.Map("container", {
      resizeEnable: true
    })
  },
  methods: {
    load() {
      this.request.get("/event/get/" + this.$route.params.id).then(res => {
        this.form = res.data
        var arr = this.form.createTime.split(".")
        this.form.createTime = arr[0]
      })
    },
    back(){
      this.$router.push("/event")
    }
  },
  created() {
    this.load()
  }
}
</script>

<style scoped>
.ct {
  font-size: 18px;
  width: 1000px;
  height: 85%;
  text-align: left;
  position: absolute;
  left: 200px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
  background-color: rgb(255, 255, 255);
  padding: 20px 40px 0px 40px;
}

.tt {
  width: 400px;
  background-color: rgb(255, 255, 255);
  position: relative;
  left: 470px;
  border-radius: 20px;
}

.tm {
  position: absolute;
  font-size: 20px;
  right: 300px;
  top: 30px;
}
.back{
  position: absolute;
  left: 20px;
  width: 50px;
  height: 50px;
}
</style>