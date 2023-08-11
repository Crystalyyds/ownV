<template>
  <div>
    <div id="container" style="width: 100%;height: 700px"></div>
    <div>
      <el-button type="success" round
                 style="position: absolute;
                 top: 30px; width: 100px;height: 100px;
                 left: 1300px" :size="'medium'"
                 @click="openA"
      >添加新事件
      </el-button>
    </div>
    <div>
      <el-dialog title="用户信息" :visible.sync="A" width="30%">
        <el-form label-width="80px" size="small">
          <el-form-item label="标题">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="内容">
          <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="form.content">
          </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="A = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <Down/>
  </div>
</template>

<script>
import Down from "@/components/Down.vue";
import user from "@/views/User.vue";
export default {
  name: "Front",
  components: {Down},
  data() {
    return {
      A: false,
      form: {},
      userID: 0,
      userName:"",
      arr:[],
    }
  },
  mounted() {
    var that = this;

    var map = new AMap.Map('container', {
      resizeEnable: true,

    });

    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB',    //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition(function (status, result) {
        onComplete(result)
      });
    });

    //解析定位结果
    function onComplete(data) {
      that.form.lng = data.position.lng;
      that.form.lat = data.position.lat;
      that.arr[0] = data.position.lng;
      that.arr[1] = data.position.lat;
      // console.log(data)
    }

  },
  methods: {
    openA() {
      this.A = !this.A
    },
    save() {
      this.form.userId = 4
      this.request.post("/event/add/"+4,this.form).then(res => {
        console.log(res)
        if (res.code === '200') {
          this.$message.success("行程添加成功")
        } else {
          this.$message.error("行程添加失败")
        }
        this.form = {}
        this.form.name =this.userName
        this.A = false
      })
    },
    load(){
      this.request.get("/user/"+4).then(res=>{
        this.form.name = res.data.username
        this.userName = res.data.username
      })
    }
  },
  created() {
    this.load()
  }
}
</script>

<style scoped>
#container {
  width: 300px;
  height: 180px;
}

.To {
  position: absolute;
  top: 80px;
  left: 250px;
  box-sizing: border-box;
  text-indent: 2px;
  z-index: 2200;
  border: none;
  width: 219px;
  height: 100px;
  line-height: 20px;
  padding: 0;
  letter-spacing: 0.5px;
  font-size: 14px;
}


.Tw {
  position: absolute;
  top: 80px;
  left: 540px;
}

.info {
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: .25rem;
  position: fixed;
  top: 1rem;
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