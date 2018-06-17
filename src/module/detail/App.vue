<template>
  <div id="app">
    <img src="./images/logo.png">
    <div>详情内容</div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="createDate"
          label="创建日期"
          width="180">
          <template slot-scope="scope">
              <span>{{ scope.row.createDate |timeymdhandle}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="label"
          label="标签"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="类别">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import 'common/css/reset.css';
import Hello from 'components/Hello/Hello'
import { get_list } from 'src/model/api.js'

export default {
  name: 'app',
  data() {
    return {
      tableData: []
    }
  },
  components: {
    Hello
  },
  methods: {
    async getlist() {
      let res = await get_list();
      this.tableData = res.result;
    }
  },
  mounted() {
    this.getlist();
  }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
