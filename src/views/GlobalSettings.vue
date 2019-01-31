<template>
  <div class="settings">
    <el-breadcrumb >
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-card shadow="never">
      <el-form label-width="130px">
        <el-form-item label="应用名称：">
          <el-input v-model="formDate.appName"></el-input>
        </el-form-item>
        <el-form-item label="应用API网址：">
          <el-input v-model="formDate.apiUrl"></el-input>
        </el-form-item>
        <el-form-item label="后台管理网址：">
          <el-input v-model="formDate.adminUrl"></el-input>
        </el-form-item>
        <el-form-item label="客户端App网址：">
          <el-input v-model="formDate.appUrl"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号：">
          <el-input v-model="formDate.icp"></el-input>
        </el-form-item>
        <el-form-item label="版权声明：">
          <el-input v-model="formDate.copyright"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="doSubmit">提交</el-button>
        <el-button type="" @click="doCancel">取消</el-button>
      </el-form-item>
      </el-form>
      
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      formDate:{
        appName:"",
        apiUrl:"",
        appUrl:"",
        adminUrl:"",
        icp:"",
        copyright:""
      } 
    }
  },
  mounted(){
      //将$store储存中的变量
     //this.formData =this.$store.state.globalSettings;  引用赋值 ，两个变量指向同一个对象
     //对象的赋值
     this.formDate.appName = this.$store.state.globalSettings.appName;
     this.formDate.apiUrl = this.$store.state.globalSettings.apiUrl;
     this.formDate.adminUrl = this.$store.state.globalSettings.adminUrl;
     this.formDate.appUrl = this.$store.state.globalSettings.appUrl;
     this.formDate.icp = this.$store.state.globalSettings.icp;
     this.formDate.copyright = this.$store.state.globalSettings.copyright;
  },
  methods: {
    doSubmit(){
      var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
      this.$axios.put(url,this.formDate).then((res)=>{
        if(res.data.code==200){
          this.$message.success("接口提交设置成功！");
          //TODO修改$store中的全局设置！！！
        }else{
          this.$message.error("接口提交设置失败！！！")
        }
        // console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    },
    doCancel(){
      this.formDate.appName = this.$store.state.globalSettings.appName;
      this.formDate.apiUrl = this.$store.state.globalSettings.apiUrl;
      this.formDate.adminUrl = this.$store.state.globalSettings.adminUrl;
      this.formDate.appUrl = this.$store.state.globalSettings.appUrl;
      this.formDate.icp = this.$store.state.globalSettings.icp;
      this.formDate.copyright = this.$store.state.globalSettings.copyright;
      console.log(this.$store.state.globalSettings);
    }
  },
}
</script>