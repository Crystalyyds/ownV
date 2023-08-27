<template>
  <div>
    <el-container>
      <el-aside>
        <div>
          <el-input v-model="input" placeholder="请输入内容" class="ipt" suffix-icon="el-icon-search"></el-input>
          <div class="did" style="border:3px solid #000">
            <div v-for="item in users">
              <div class="listc">{{item.user}}</div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main style="background-color: #009cf9">
        <div>

        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "Chat",
  data() {
    return {
      count: 50,
      input: "",
      users: [],
    }

  },
  methods: {
    load() {
      this.count += 2
    }
  },
  created() {
    this.load()
    this.users = [
      {
        user: '1',
      },
      {
        user: '2',
      },
      {
        user: '3',
      },
      {
        user: '4',
      },
      {
        user: '5',
      }, {
        user: '6',
      },
      {
        user: '7',
      },
      {
        user: '8',
      },
      {
        user: '9',
      },
      {
        user: '10',
      },
      {
        user: '11',
      },
      {
        user: '12',
      },
      {
        user: '13',
      },
      {
        user: '14',
      },

    ]
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.listc {
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 70px;
  border-bottom: 1px solid #000;
}


::-webkit-scrollbar {
  width: 0px;
}

.ipt {
  width: 200px;
  height: 40px;
}

.lluser {
  background-color: #909399;
  height: 70px;
  margin-top: 0px;
}

::v-deep .el-input--mini .el-input__inner {
  height: 40px;
}

.did {
  margin-top: 10px;
  height: 75vh;
  overflow: scroll;
}
</style>