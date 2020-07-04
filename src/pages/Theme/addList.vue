<template>
  <div class="addList">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" style="width: 300px;" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="img">
       <el-input v-model="ruleForm.img" style="width: 300px;" placeholder="请输入图片地址"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
       <el-input v-model="ruleForm.desc" style="width: 300px;" placeholder="请输入商品描述"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="cates">
        <el-select v-model="ruleForm.cates" placeholder="请选择商品类型">
          <el-option v-for="item in Cates" :key="item._id" :label="item.cate_zh"  :value="item.cate"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" prop="price">
          <el-input v-model="ruleForm.price" style="width: 300px;" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="是否热销" prop="hot">
          <el-radio v-model="radio" label="true">是</el-radio>
          <el-radio v-model="radio" label="false">否</el-radio>
      </el-form-item>

	<el-form-item label="上传图片" class="uploadImg">
		<!-- 上传 -->
			<el-upload
				:show-file-list='false'
				:action="img.baseUrl+'/upload/img'"
				:on-success="success">
				<el-button size="small" type="primary">点击上传</el-button>
			</el-upload>
	</el-form-item>

      <el-form-item class="btn-box">
        <el-button type="primary" @click="submitForm">添加</el-button>
        <el-button @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
	import img from "@/utils/img.js"
export default {
  data: function() {
    return {
		img,
		imgs:"",
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
		var date=new Date();
		var timer=date.getTime().toString()
      this.$http.getCastes({timer}).then(res=>{
        console.log("获取所有的商品类型",res)
        // 将所有的商品类型都赋予cates
        this.Cates = res
      })
  },
  methods: {
    submitForm() {
	// 判断 我们是输入网址图还是上传图片
	if(this.imgs){
		this.ruleForm.img = img.baseUrl+this.imgs
	}
    //  传入的数据
      let data = {
        img:this.ruleForm.img,
        name:this.ruleForm.name,
        desc:this.ruleForm.desc,
        price:Number(this.ruleForm.price),
        cate:this.ruleForm.cates,
        hot:Boolean(this.radio)
      }
      // console.log("添加信息",data)
      console.log("value",this.value)
      this.$http.addGood(data).then(res=>{
        console.log("添加成功",res)
      })
    },
    resetForm() {
      this.ruleForm.img=""
      this.ruleForm.name=""
      this.ruleForm.desc=""
      this.ruleForm.price=""
    },
	success(res){
		console.log("图片上传成功",res.data.url)
		// this.ruleForm.img= res.data.url
		this.imgs = res.data.url
	}
  }
};
</script>

<style lang="scss" scoped>
  .addList{
    width: 500px;
    height: 600px;
    border: 1px solid #ccc;
    margin:  25px auto;
    .el-form{
      padding-left: 35px;
      padding-top: 35px;
      .el-button{
        margin-right: 20px;
      }
    }
	.uploadImg{
		margin-bottom: 60px;
	}
  }
</style>
