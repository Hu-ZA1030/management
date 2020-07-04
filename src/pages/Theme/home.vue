<template>
  <div class="home">
   
    <DateForm></DateForm>
  </div>
</template>

<script>
export default {
  components: {
    DateForm: () => import("@/components/common/DateForm/Date.vue")
  },
  data: function() {
    return {
      
    };
  },
  methods: {
  //   submitForm(formName) {
  //     this.$refs[formName].validate(valid => {
  //       if (valid) {
  //         alert("submit!");
  //       } else {
  //         console.log("error submit!!");
  //         return false;
  //       }
  //     });
  //   },
  //   resetForm(formName) {
  //     this.$refs[formName].resetFields();
  //   }
  }
};
</script>
<style lang="scss">
.home {
  .el-container {
    position: relative;
  }
  .demo-ruleForm {
    background: #f2f3f5;
    margin: 10px;
    padding-top: 35px;
    padding-left: 45px;
    height: 200px;
    position: absolute;
    top: 60px;
    left: 145px;
    border: 1px solid #c3c3c3;
    .el-form-item {
      float: left;
      .underline {
        display: inline-block;
        width: 25px;
        height: 32px;
        text-align: center;
      }
    }
    .sumSub {
      margin-left: 35px;
    }
    .btn-box {
      // float: none;
      // position: absolute;
      // left: 50px;
      // bottom: 30px;
      margin-bottom: 20px;
      .el-button {
        margin-right: 25px;
      }
    }
  }
}
</style>