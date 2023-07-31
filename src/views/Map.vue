<template>
  <MapP></MapP>
</template>

<script>
import MapP from "@/components/MapP.vue";

export default {
  name: "Map",
  components: {MapP},
  data() {
    return {}
  },
  methods: {
    load() {
      var map = new AMap.Map('container');
// 构造地图对象的方法二：使用地图容器对象创建
      map = new AMap.Map(document.getElementById("container"));
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>