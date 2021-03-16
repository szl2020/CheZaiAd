<!--
 * @Author: your name
 * @Date: 2021-03-15 16:40:05
 * @LastEditTime: 2021-03-16 16:58:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CheZaiAd\src\views\exanine\index.vue
-->
<template>
  <div id="content">
    <div id="searchBox">
      <div id="shuaixuan">
        <i class="el-icon-search"> </i>
        <span style="font-weight: bold">筛选查询</span>
      </div>
      <el-form
        ref="form"
        :inline="true"
        :model="serachData"
        class="demo-form-inline"
        style="margin-left: 60px"
      >
        <el-form-item label="" style="width: 200px">
          <el-input
            v-model="serachData.name"
            placeholder="请输入姓名查询"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="serachData.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="serachData.exaninemanagement">
            <el-option label="未审核" value="unexamine"></el-option>
            <el-option label="已通过" value="adopt"></el-option>
            <el-option label="未通过" value="unadopt"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="insert" style="border-radius: 7px"
          >增加</el-button
        >
      </el-form>
    </div>
    <div style="margin-top: 20px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="vipid"
          label="会员编号"
          align="center"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="180">
        </el-table-column>
        <el-table-column prop="phonenumber" align="center" label="手机号">
        </el-table-column>
        <el-table-column prop="idcard" align="center" label="身份证号">
        </el-table-column>
        <el-table-column prop="date" align="center" label="提交日期">
        </el-table-column>
        <el-table-column prop="state" align="center" label="状态">
        </el-table-column>
        <el-table-column prop="exaninepeople" align="center" label="审核人">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >审核</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "exanine",
  data() {
    return {
      serachData: {
        name: "",
        date: "",
        exaninemanagement: "unexamine",
      },
      tableData: [
        {
          vipid:'1',
          phonenumber:'2',
          idcard:"222",
          date: "11",
          name: "123",
          address: "345",
          state:'1',
          exaninepeople:'23'
        },
      ],
    };
  },
  methods: {
    insert() {
      this.$axios.get('/api/mysql')
      .then(res=>res.data)
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style  scoped>
#searchBox {
  height: 190px;
  width: 100%;
  background: rgb(242, 242, 242);
  padding-top: 30px;
  box-sizing: border-box;
  text-align: left;
}
#shuaixuan {
  margin-left: 60px;
  margin-bottom: 30px;
}
</style>
