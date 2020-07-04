<template>
  <div class="theme">
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <div class="head-img">
          <i class="el-icon-thumb"></i>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-platform">&nbsp;概况</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-shop">&nbsp;店铺</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-goods">&nbsp;商品</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-tickets">&nbsp;订单</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-custom">&nbsp;客户</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-s-data">&nbsp;数据</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-coin">&nbsp;资产</i>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>

      <el-container>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name" style="width: 300px;" placeholder="请输入商品名称或编/条码"></el-input>
          </el-form-item>
          <el-form-item label="商品分组" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="商品类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="销量" >
            <el-col :span="11">
              <el-form-item prop="date1">
                 <el-input v-model="ruleForm.name" style="width: 130px;" placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2"><span class="underline">-</span></el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-input v-model="ruleForm.name" style="width: 130px;" placeholder=""></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
           <el-form-item label="价格" >
            <el-col :span="11">
              <el-form-item prop="date1">
                 <el-input v-model="ruleForm.name" style="width: 100px;" placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2"><span class="underline">-</span></el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-input v-model="ruleForm.name" style="width: 100px;" placeholder=""></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="库存扣减方式" prop="region" class="sumSub">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          
          <el-form-item class="btn-box">
            <el-button type="primary" @click="submitForm('ruleForm')">刷选</el-button>
            <el-button @click="resetForm('ruleForm')">导出</el-button>
          </el-form-item>
        </el-form>

        <el-main>
          <el-table>
            <el-table-column prop="date" label="商品名" width="300"></el-table-column>
            <el-table-column prop="name" label="价格" width="150"></el-table-column>
            <el-table-column prop="visits" label="访问量" width="140px"></el-table-column>
            <el-table-column prop="stock" label="库存" width="150px"></el-table-column>
            <el-table-column prop="volume" label="销量" width="150px"></el-table-column>
            <el-table-column prop="number" label="序号" width="50px"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="250px"></el-table-column>
            <el-table-column prop="operation" label="操作" width="150px"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
export default {
  data: function(){
    // const item = {
    //   date: "2016-05-02",
    //   name: "王小虎",
    //   address: "上海市普陀区金沙江路 1518 弄"
    // };
    return {
      // tableData: Array(20).fill(item),
      isCollapse: true,
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    }
  },
   rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>

<style lang="scss" >
@import "@/assets/common.scss";
.theme {
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
  .el-menu--collapse {
    width: 150px;
  }
  .el-menu-vertical-demo {
    background: #444444;
  }
  .head-img {
    width: 150px;
    height: 70px;
    background: #444444;
    i {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #fff;
      margin: 35px auto;
      font-size: 25px;
      color: red;
      text-align: center;
      line-height: 50px;
    }
  }
  .el-container{
    position: relative;
  }
  .demo-ruleForm{
    background: #F2F3F5;
    margin: 20px;
    padding-top: 35px;
    padding-left: 25px;
    width: 100%;
    height: 210px;
    position:absolute;
    top: 0px;
    left: 0px;
    .el-form-item{
      float: left;
    .underline{
      display:inline-block;
      width: 25px;
      height: 32px;
      text-align: center;
    }
    // .btn-box{
      
    // }
  }
    .sumSub{
      margin-left: 45px;
    }
  }
  .el-main{
    position:absolute;
    top: 250px;
    left: 0px;
    padding-top: 40px;
  }
}
</style>