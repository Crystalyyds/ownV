<template>
  <div>
    <div style="margin: 10px 0">
      <el-popconfirm
          style="margin-left: 5px"
          confirm-button-text='确定'
          cancel-button-text='我再想想'
          slot="empty"
          icon="el-icon-info"
          icon-color="red"
          fit: true
          title="您确定删除吗？"
          @confirm="delall"
      >
        <el-button type="danger" slot="reference">批量删除 <i class="el-icon-remove-outline"></i></el-button>
      </el-popconfirm>
      <el-input style="width: 200px; margin-left: 5px" v-model="name" placeholder="请输入名字"></el-input>
      <el-input style="width: 200px; margin-left: 5px" class="ml-5" v-model="title"
                placeholder="请输入地址"></el-input>
      <el-input style="width: 200px; margin-left: 5px" v-model="content" class="ml-5"
                placeholder="请输入电话"></el-input>
      <el-button class="ml-5" style="margin-left: 5px" type="primary" @click="load">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
    </div>
    <div>
      <el-table
          ref="multipleTable"
          :data="ok"
          :row-style="{height: '60px'}"
          tooltip-effect="dark"
          style="width: 100%"
          @cell-click="cellHandleclick"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="200">

        </el-table-column>
        <el-table-column prop="name" label="名称" width="200"></el-table-column>
        <el-table-column prop="title" label="标题" width="200"></el-table-column>
        <el-table-column prop="content" label="内容" width="200" style="overflow: hidden;">请点开查看</el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success" @click="editform(scope.row)">编辑 <i class="el-icon-edit"></i></el-button>
            <el-popconfirm
                style="margin-left: 5px"
                confirm-button-text='确定'
                cancel-button-text='我再想想'
                icon="el-icon-info"
                icon-color="red"
                title="您确定删除吗？"
                @confirm="del(scope.row.id)"
            >
              <el-button type="danger" slot="reference">删除 <i class="el-icon-remove-outline"></i></el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <div style="padding: 10px 0">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
      <el-dialog title="事件信息" :visible.sync="A" width="30%">
        <el-form label-width="80px" size="small">
          <el-form-item label="用户名">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
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
      <div>
        <h1>还不知道</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Event",
  data() {
    return {
      ok: [],
      name: "",
      title: "",
      content: "",
      total: 0,
      pageNum: 1,
      pageSize: 5,
      multipleTable: [],
      form: {},
      A: false,
    }
  }, created() {
    this.load()
  },
  methods: {
    reset() {
      this.name = ""
      this.phone = ""
      this.address = ""
      this.load()
    },
    load() {
      this.request.get("/event/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
          address: this.address,
          phone: this.phone,
        }
      }).then(res => {
        this.ok = res.data.records
        this.total = res.data.total
      })
    },
    handleSizeChange(pageSize) {
      // console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },
    handleSelectionChange(val) {
      this.multipleTable = val
      // console.log(this.multipleTable)
    },
    add() {
      this.A = true
      this.form = {}
    },
    save() {
      this.request.post("/event/add", this.form).then(res => {
        if (res.code === '200') {
          this.$message.success("保存成功")
          this.A = false
          this.load()
        } else {
          this.$message.error("保存失败")
        }
      })
    },
    editform(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.form.gender == 0 ? row.gender = false : row.gender = true
      this.A = true
      // console.log(this.form.gender)
      // this.add()
    },
    del(id) {
      this.request.delete("/event/delete/" + id).then(res => {
        if (res.code === '200') {
          this.$message.success("删除成功")
          this.load()
        } else {
          this.$message.error("删除失败")
        }
      })
    },
    delall() {
      let ids = this.multipleTable.map(v => Number(v.id))
      this.request.post("event/delete/batch", ids).then(res => {
        if (res.code === '200') {
          this.$message.success("批量删除成功")
          this.load()
        } else {
          this.$message.error("批量删除失败")
        }
      })
    },
    imp() {
      this.$message.success("导入成功")
      this.load()
    },
    jump(row, event, column) {
      this.$router.push("/person/" + row.id)
    },
    jump1(row, event, column) {
      this.$router.push("/home/content/" + row.id)
    },
    cellHandleclick(row, column, cell, event) {
      //如果规定点击某一列执行，利用column中的label属性
      if (column.label === '用户名') {
        // console.log("ok")
        this.jump(row, event, column)
      }
      if (column.label === '内容') {
        // console.log("ok")
        this.jump1(row, event, column)
      }
    }
  }
}
</script>

<style scoped>

</style>