<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column prop="username" label="日期" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Manage"
}
</script>

<style scoped>

</style>