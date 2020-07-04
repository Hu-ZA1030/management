<template>
  <div class="login">
    <div class="login-box">
      <h1 class="title">登入</h1>
      <el-form>
        <el-form-item label="用户名" class="username" >
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" >
          <el-input type="password" v-model="password" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" >
          <el-input type="password" v-model="checkPass" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="btnLogin">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
   data:function(){
     return{
       username:"",
       password:"",
       checkPass:""
     }
   },
  methods: {
    btnLogin(){
        let data = {
          username: this.username,
          password: this.password
        }
      this.$http.userLogin(data).then(res=>{
          console.log("注册成功",res)
          localStorage.setItem("token",res.token)
          document.cookie =this.username
         this.$router.replace("/home")

      })
    },
    resetForm(){

    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #333333;
  .login-box {
    width: 350px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
    top: 150px;
    left: 190px;
  }
  .title {
    width: 100%;
    height: 20px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
    margin-top: 25px;
  }
  .el-form {
    margin-top: 30px;
    .el-form-item__label{
      color: red;
    }
    .el-form-item {
      width: 100%;
      padding-left:25px;
      .el-input{
        width: 250px;
        float: right;
        margin-right: 25px;
      }
    }
  }
}
</style>