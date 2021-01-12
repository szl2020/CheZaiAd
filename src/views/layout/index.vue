<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">
        <div class="aside-header">
        <i class="el-icon-s-home"></i>
        <span>主页</span>
        </div>
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title" style="padding-left:0">
                <i class="el-icon-s-cooperation"></i>
                <span>工作台</span>
              </template>
              <router-link to="/exanine">
               <el-menu-item>
                <template slot="title" >审核管理</template>
              </el-menu-item></router-link>
             
              <el-menu-item>
                <template slot="title">申诉管理</template>
              </el-menu-item>
              <el-menu-item>
                <template slot="title">广告签约管理</template>
              </el-menu-item>
              <el-menu-item>
                <template slot="title">广告内容管理</template>
              </el-menu-item>
              <el-menu-item>
                <template slot="title">活动内容管理</template>
              </el-menu-item>
              <el-menu-item>
                <template slot="title">积分提现管理</template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-promotion"></i>
                <span>积分管理</span>
              </template>
              <el-menu-item>
                <template slot="title">商户管理</template>
              </el-menu-item>
              <el-menu-item>
                <template slot="title">商品积分</template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item>
                <template slot="title">车主档案</template>
              </el-menu-item>
              <el-menu-item>
                <template slot="title">管理员档案</template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <router-view></router-view>
      </el-container>
    </el-container>
    
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // toexanine(){
    //     console.log('111');
    //     this.$router.push({
    //         path:'/exanine'
    //     })
    // }
  },
};
</script>
<style>
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: left;
  height: 800px;
}
.aside-header{
height:40px;
padding:5px 10px;
color:white;
}
</style>