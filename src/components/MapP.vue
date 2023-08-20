<template>
  <div>
    <div id="container" style="width: 520px; height: 600px;" class="map">
      <div class="searchbox">
        <img class="usellogo"
             src="data:image/png;base64,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"
             draggable="false" data-spm-anchor-id="0.0.0.i0.6b8e1c4er6SJLD">
        <div>
          <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state"
              :fetch-suggestions="(queryString,cb)=>querySearch(queryString,cb,loc)"
              placeholder="请输入内容"
              @select="handleSelect">
            <i
                class="el-icon-s-promotion el-input__icon"
                slot="suffix"
                @click="handleIconClick">
            </i>
            <template slot-scope="props" class="li">
              <span class="name" style="display:block">{{ props.item.name }}</span>
              <span class="addr">{{ props.item.address }}</span>
            </template>
          </el-autocomplete>
        </div>
        <div class="direntry usel" @click="drawer=true">
          <img class="fa-dir icontip"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAkCAYAAABxE+FXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTdGRDQzNzk1MUE0MTFFNkJENThBRUM3QkJFQTlBNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTdGRDQzN0E1MUE0MTFFNkJENThBRUM3QkJFQTlBNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFN0ZENDM3NzUxQTQxMUU2QkQ1OEFFQzdCQkVBOUE0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFN0ZENDM3ODUxQTQxMUU2QkQ1OEFFQzdCQkVBOUE0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrQHkWQAAAG5SURBVHja5Jg/KEVRHMfPfe+RpEgkw/MkUiKDwYCIRFGKzUp5A7IYrJJBBpNFPYmISGGQ9J56CwaDxWAji2LwL0We76nfIN0/597zx+BXn+Gdezqf3vnd3/mdrlWbyDDByAdp8AB6wBuTjJDgPAskQB1oA0s0ZkQ+Dvp//B4EUybkjWDOZnwG9OmUF4JNkO2QijVKhXI5X3wFxFzm5IE9UKxaPgl6BdYoBzsOuxNI3kQ5FY0WsKhCXgQ2QJbPtYbAhIyc53kVRAO+Q/OgK6ic1263RPWEqTqq/cpbwTSTD34MH4ACUXkJ5TnM1EQl2PZaL0QTeJ5LmdroAAtecp7nTqYnRkHcTT7G9Mas04MI5dsrMi5HsPaWqiX+rzxiYH1e81XU/Sro/TnjnVCXPEadrgHk2jxvBx+q5VG669UIzG1WJc8BA/RvLZM5LwMjdA/wE2lZeT0Y9nmFegGnYF9WHhco1ztwCa7BDXhWte1O4k9wDpLg1mSdX4F1cG/ykOGHxy44cmlEWuRfYJm22vjZvuVXrEp+AVJ/0dXe6eKptaU+2ozxLxPH4Em3/PDXZ5BX2uoTmW37FmAA/hxExSsxtXsAAAAASUVORK5CYII="
               draggable="false" data-spm-anchor-id="0.0.0.i0.6b8e1c4eH5RXGG"
               @click="go"
          >
          <i class="close-btn iconfont icon-close"></i>
        </div>
      </div>
    </div>
    <Down/>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false">
      <h1>选择出行方式</h1>
      <el-card style="margin-top: 10px"><button class="button button1">行走</button></el-card>
      <el-card style="margin-top: 10px"><button class="button button1">骑行</button></el-card>
      <el-card style="margin-top: 10px"><button class="button button1">开车</button></el-card>
    </el-drawer>
  </div>
</template>

<script>

import AMapLoader from "@amap/amap-jsapi-loader";
import store from "@/store";
import ElementUI from "element-ui";
import Down from "@/components/Down.vue";

export default {
  name: "MapP",
  components:{
    Down,
  },
  props: {
    userAddress: String,
  },
  data() {
    return {
      restaurants: [],
      state: '',
      loc: '',
      newgo: {
        name: "",
        address: "",
        location:"",
      },
      path:[],
      drawer: false,
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var that = this
      AMapLoader.load({
        key: "3129bb5df6f2389e9b16ace8972950ad",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        var map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 13
        });
        AMap.plugin('AMap.Geolocation', function () {
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 5000,          //超过10秒后停止定位，默认：5s
            buttonPosition: 'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition(function (status, result) {
            if (status === 'complete') {
              ElementUI.Message({
                message: '定位成功',
                type: 'success'
              });
              let lng = result.position.lng.toString()
              let lat = result.position.lat.toString()
              that.loc = lng + ',' + lat
              // console.log(that.loc)
            } else {
              ElementUI.Message({
                message: '定位失败，请刷新页面',
                type: 'error'
              });
            }
          });
        });
      }).catch(e => {
        console.log(e);
      })
    },
    querySearch(queryString, cb, loc1) {
      if (this.isNull(queryString)) {
        this.restaurants = store.getters.getPoi
      } else {
        // this.request.get("/amap/poi",{
        //   params:{
        //     keyword: queryString,
        //     location: loc1,
        //   }
        // }).then(res=>{
        //   if(res.data.infocode === "10000"){
        //     this.restaurants = res.data.pois
        //   }else{
        //     ElementUI.Message({
        //       message: '请输入明确的目的地的，尽量输入2-3个字',
        //       type:"success"
        //     })
        //   }
        //
        // })
      }
      // const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // console.log("ok", typeof this.restaurants)
      cb(this.restaurants);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.address.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      // console.log(item);
      // console.log(item.name)
      this.state = item.address
      this.newgo = {
        nickname: item.name,
        address: item.address,
      }
    },
    handleIconClick() {
      // console.log(this.newgo)
      store.commit("insertSearch", this.newgo)
    },
    isNull(str) {
      if (str === "") {
        return true;
      }
      const regu = "^[ ]+$";
      const re = new RegExp(regu);
      return re.test(str);
    },
    go(){
      const path = []
      path.push()
    }
  },
  created() {
    this.restaurants = store.getters.getPoi
  }
}
</script>

<style scoped>

@import "../assets/css/map.css";

</style>