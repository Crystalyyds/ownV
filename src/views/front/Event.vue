<template>
  <div style="background-color: rgb(242,243,245)">
    <div class="dd">
      <RecycleScroller
          class="scroller"
          :items="ok"
          :item-size="135"
          key-field="id"
          v-slot="{ item }"
      >
        <div style="background-color: white; padding-top: 10px">
          <div style="background-color:#E3DAEB;height: 120px;border-radius: 20px" @click="hello(item.id)">
            <div class="entry">
              <span>用户: {{ item.name }} </span>
              <span class="Time">时间:{{ item.createTime }} </span>
            </div>
            <div class="content-wrapper">
              <div class="title-row">
                标题: {{ item.title }}
              </div>
              <div class="abstract">
                内容: {{ item.content }}
              </div>
              <div>
                <el-button type="danger" @click="del(item.id)" class="delCss">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </RecycleScroller>
    </div>
    <div>
      <Down/>
    </div>
  </div>
</template>

<script>
import Down from "@/components/Down.vue";
import {RecycleScroller} from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
//https://github.com/frontend-afei/virtual-list-demo
//

export default {
  name: "Event",
  components: {Down, RecycleScroller},
  data() {
    return {
      ok: [],
    }
  },
  methods: {
    load() {
      this.request.get("/event/users/" + 1).then(res => {
        this.ok = res.data
        for (var t in res.data) {
          var arr = this.ok[t].createTime.split(".")
          this.ok[t].createTime = arr[0]
        }
      })
    },
    del(id) {
      console.log(id)
      this.request.delete("/event/delete/" + id).then(res => {
        if (res.code == '200') {
          this.$message('删除成功')
        } else {
          this.$message('删除失败')
        }
      })
      this.load()
    },
    hello(id) {
      this.$router.push("/home/content/" + id)
    }
  },
  created() {
    this.load()
  },

}
</script>

<style scoped>
.scroller {
  height: 700px;
  width: 1000px;
  position: absolute;
  left: 200px;
}

.desc {

}

.dd {
  background-color: white;

}

.entry {
  cursor: pointer;
  position: relative;
  padding: 12px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.Time {
  cursor: pointer;
  position: relative;
  top: -20px; left: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.content-wrapper {
  padding-left: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e4e6eb;
  width: 100%;
}

.title-row {
  margin-bottom: 8px;
  text-align: left;
}

.abstract {

  margin-bottom: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.delCss {
  position: relative;
  left: 400px;
  top: -85px;
  height: 50px;
  width: 80px
}


</style>