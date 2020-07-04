<template>
  <div class="addGood">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" style="width: 200px;" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="img">
        <el-input v-model="ruleForm.img" style="width: 200px;" placeholder="请输入图片地址"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="ruleForm.desc" style="width: 200px;" placeholder="请输入商品描述"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="cates">
        <el-select v-model="ruleForm.cates" placeholder="请选择商品类型">
          <el-option v-for="item in Cates" :key="item._id" :label="item.cate_zh" :value="item.cate"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price" style="width: 200px;" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="是否热销" prop="hot">
        <el-radio v-model="radio" label="true">是</el-radio>
        <el-radio v-model="radio" label="false">否</el-radio>
      </el-form-item>

      <el-form-item class="btn-box">
        <el-button type="primary" @click="submitForm">修改</el-button>
        <el-button @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
 data: function() {
    return {
      radio:"true",
      Cates:[],
      value:"",
      ruleForm: {
        name: "",
        img:"",
        desc:"",
        cates: "",
        price:"",
        hot:"",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ]
      }
    };
    },
    mounted(){
      // 调用接口，获取所有的商品类
      this.$http.getCastes({}).then(res=>{
        console.log("获取所有的商品类型",res)
        // 将所有的商品类型都赋予cates
        this.Cates = res
      })
  },
  methods: {
    submitForm() {
    
    },
    resetForm() {
      this.ruleForm.img=""
      this.ruleForm.name=""
      this.ruleForm.desc=""
      this.ruleForm.price=""
  
    }
  }
};
</script>
<style lang="scss" scoped>
    .addGood{
      width: 400px;
      height: 700px;
      margin: 5px auto;
      .el-form{
        width: 300px;
        height: 500px;
        background: #ffffff;
        position: absolute;
        top: 0;bottom: 0;
        left: 0;right:0;
        margin:25px auto;
       
      }
    }
</style>