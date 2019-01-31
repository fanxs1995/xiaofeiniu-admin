<template>
  <div class="xfn_main-header">
    <h3 class="xfn-title">{{$store.state.globalSettings.appName}}后台管理</h3>
    <div class="xfn-right">
      当前用户：{{$store.state.adminName}}
      <el-button size="mini" @click="quit">退出</el-button>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    quit(){
      //情书当前登录的用户信息
      this.$store.commit("setAdminName",'');
      //跳回登录页面
      this.$router.push("/login");
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $header-height:60px;
  .xfn_main-header{
    background: #DCDFE6;
    border-radius: 5px;
    line-height: $header-height;
    height:$header-height;
    padding:0 10px;
    
    .xfn-title{
      color:#303133;
      float:left;
      margin:0;
    }
    
    .xfn-right{float:right;}
  }
</style>
