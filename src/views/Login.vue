<template>
  <div class="login">
    <el-card class="xfn-login-card">
      <div slot="header">管理员登录</div>
      <div>
          <el-form label-width="100px">
            <el-form-item label="管理员名：">
              <el-input  placeholder="请输入管理员账号" v-model="formData.aname"></el-input>
            </el-form-item>
            <el-form-item label="登录密码：">
              <el-input type="password" placeholder="请输入管理员密码" v-model="formData.apwd" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">登录</el-button>
              <el-button type="" @click="doCancel">清除</el-button>
            </el-form-item>
          </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return {//表单中用户输入的数据
        formData:{aname:"admin",apwd:"123456"}
      }
    },
    methods:{
      doLogin(){//执行登录
      var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
      this.$axios.get(url).then((res)=>{
        if(res.data.code==200){//登陆成功
          //1.把用户名存到vue仓库
          this.$store.commit("setAdminName",this.formData.aname);
          //2.执行试图跳转
          this.$router.push("/main");    
        }else{//等哭失败
          this.$alert("用户或密码错误，请核对！！",{type:"error"}).then(()=>{}).catch(()=>{})
        }
        // console.log(res.data)
      }).catch((err)=>{
        console.log(err);
      })
      // console.log(url);
      },
      doCancel(){ //清除用户输入内容
        this.formData.aname="";
        this.formData.apwd="";
      }
    }
}
</script>

<style lang="scss">
  .xfn-login-card{
    width:450px;
    margin: 200px auto;
    .el-card__header{
       text-align: center;
    font-size: 1.2em;
    }
  }
</style>