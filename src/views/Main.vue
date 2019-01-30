<template>
  <div class="Main">
    <!-- 左侧变栏 -->
    <el-container>
      <el-aside width="200px">左测变栏</el-aside>
      <el-container>
        <!-- 顶部信息栏 -->
        <el-header height="60px">顶部</el-header>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      //组件创建之前先要检查是都已经登录
      if(!this.$store.state.adminName){
        this.$router.push("/login");//没有登录 就跳转登录页面
      }
    },
  }
</script>
