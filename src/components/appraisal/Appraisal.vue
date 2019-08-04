<template>
  <div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="VIA优势测试"
        name="first"
      >用户管理</el-tab-pane>
      <el-tab-pane
        label="INet职业测评"
        name="second"
      >配置管理</el-tab-pane>
      <el-tab-pane
        label="报告管理"
        name="third"
      >角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.el-tabs {
  background-color: #fff;
  height: 400px;
  border-radius: 15px;
  .el-tabs__header {
    background-color: #000;
  }
}
</style>
