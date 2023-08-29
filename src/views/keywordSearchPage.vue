<template>
  <div class="top"></div>
  <div class="search-result-table">
    <el-table :data="tableData" size="large" class="table_box" style="width: 100%;padding: 17px 0;
        --el-table-border-color: none;
        --el-table-bg-color: none;
        --el-table-tr-bg-color: none" :row-class-name='tableRowClassName'
        header-cell-class-name="table-header-cell">
      <el-table-column prop="comname" label="公司信用编码" width="180">
      </el-table-column>
      <el-table-column prop="name" label="公司简称" width="180">
      </el-table-column>
      <el-table-column prop="industry" label="所属行业">
      </el-table-column>
      <el-table-column prop="area" label="地区">
      </el-table-column>
      <el-table-column prop="type" label="交易方式">
      </el-table-column>
      <el-table-column prop="sponser" label="主办券商">
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const _tableData = [{
  comname: '2016-05-02',
  name: '王小虎',
  industry: '上海市普陀区金沙江路 1518 弄',
  area: '北京',
  type: '线上',
  sponser: '腾讯'
}, {
  comname: '2016-05-04',
  name: '王小虎',
  industry: '上海市普陀区金沙江路 1517 弄',
  area: '北京',
  type: '线上',
  sponser: '腾讯'
}, {
  comname: '2016-05-01',
  name: '王小虎',
  industry: '上海市普陀区金沙江路 1519 弄',
  area: '北京',
  type: '线上',
  sponser: '腾讯'
}, {
  comname: '2016-05-03',
  name: '王小虎',
  industry: '上海市普陀区金沙江路 1516 弄',
  area: '北京',
  type: '线上',
  sponser: '腾讯'
}]
const tableData = ref(_tableData)

function tableRowClassName(rowIndex) {
  if (rowIndex.rowIndex % 2 != 0) {
    console.log('rowIndex', rowIndex.rowIndex)
    return 'evenRow';
  }
  return 'oddRow';
}

</script>

<style lang="scss">
.top {
  width: 100vw;
  height: 60px;
  background-color: #000;
}
// 表格的样式
.search-result-table {
  padding: 20px;
  .table-header-cell{
    background: #375A88 !important;
    text-align: center;
    color: #FABA02;
    font-weight: bold;
    .cell{
      font-weight: bold;
    }
  }
  .evenRow {
    background: #0C385E !important;
  }
  .oddRow {
    background: #062340 !important;
  }
  .el-table tr {
    color: #fff;
    td {
      text-align: center;
    }
  }
  .el-table tr:hover>td {
    background-color: #47658c7d !important;
  }

  .el-table__inner-wrapper{
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
