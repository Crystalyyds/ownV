<template>
  <div>
    <div id="container" style="width: 100%; height: calc(100vh - 100px);"></div>
    <div class="info">
      <h4 id='status' class="hh"></h4>
      <hr>
      <p id='result' class="pp"></p>
      <hr>
    </div>
  </div>
</template>

<script>

export default {
  name: "MapP",
  props: {
    userAddress: String,
  },
  data() {
    return {
      l: "",
      r: ""
    }
  },
  mounted() {
    var map = new AMap.Map('container', {
      zoom: 12,
      center: [105.383610, 30.867264]
    });

    AMap.plugin('AMap.ToolBar', function () {//异步加载插件
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
    });

  },
  methods: {
    go() {
      this.request.get("https://restapi.amap.com/v3/geocode/geo?address=s&key=a383aad888722e5462d2e2392b7614e4").then(res => {

      })
    }
  },
  created() {
    this.go()
  },
}
</script>

<style scoped>
.info {
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: .25rem;
  position: fixed;
  top: 90px;
  background-color: white;
  width: auto;
  min-width: 22rem;
  border-width: 0;
  right: 1rem;
  box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
}

.hh {
  font-family: inherit;
  line-height: 1.8;
  font-weight: 300;
  color: inherit;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: .5rem;
}

.pp {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>