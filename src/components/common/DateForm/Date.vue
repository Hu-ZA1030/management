<template>
  <div class="date">
     <!-- 筛选 -->
    <div class="filter">
      <el-row type='flex' align='middle'>
        <el-col :span="3">
          <span>品类筛选：</span>
        </el-col>
        <el-col :span="7">
          <el-select v-model="cate" placeholder="请选择">
            <el-option
              v-for="item in cates"
              :key="item.id"
              :label="item.cate_zh"
              :value="item.cate">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" fixed prop="name" label="商品" width="150">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.img"/>
          </template>
      </el-table-column>
      <el-table-column align="center" prop="name" label="商品名称" width="130" ></el-table-column>
      <el-table-column  align="center" prop="desc" label="商品描述" width="380"></el-table-column>
      <el-table-column align="center" prop="price" label="价格" width="120">
        <template slot-scope="scope">
         <span>￥</span> <span v-text="scope.row.price"></span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="cate" label="品类" width="100"></el-table-column>
      <el-table-column align="center" prop="create_time" label="上架时间" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
	
		
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteSome(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑弹框 -->
        <el-drawer
            title="编辑信息"
            :visible.sync="drawer"
            
            direction="ltr"
            >
            <template slot="title">
              <span></span>
            </template>
            <editGood ></editGood>
        </el-drawer>

    <!-- 分页器 -->
    <div class="page">
      <el-pagination
        background
        @current-change='currentChange'
        :current-page='Number(page)'
        layout="prev, pager, next, sizes"
        :total="100">
      </el-pagination>
    </div>
  </div>

  
</template>
<script>
import moment from "moment"
export default {
  components:{
    editGood: () => import("@/components/common/DateForm/editGood.vue")
  },
  data: function() {
    return {
      tableData: [],
      page:"",
      size:5,
      cates:[],
      cate:"",
      cate_zh:[],
      drawer:false,
    }
  },
  watch:{
    cate:function () {
        this.page = 1
        this.init()
		console.log(this.cate)
    }
  },
  mounted(){
    this.init()
    // 调用接口，接收所有的品类
	var date=new Date();
	var timer=date.getTime().toString()
    this.$http.getCastes({timer}).then(res=>{
     
      res.unshift({cate:"",cate_zh:"全部品类"})
      this.cates = res
      // console.log("获取成功",this.cates)
    })


  },
  methods:{
       init(){
        //  初始化页面
         let params={
           page:this.page,
           size:this.size,
           cate:this.cate,
           hot:true
         }
		console.log("params",params)
         this.$http.getGoodList(params).then(res=>{
			console.log("res",res)
            res.list.map((ele,idx)=>{
              res.list[idx].create_time = moment(ele.create_time).format("YYYY-MM-DD:H:HH")
            })
            this.tableData = res.list
            console.log("tableData",res)
         })
       },
       currentChange(page){
        //  分页器跳转页码
        //  console.log("page",page)
         this.page = page
         this.init()
       },
       deleteSome(row){
        //  删除商品
        console.log(row)
        let params ={
          id:row._id
        }
        this.$http.updeteleList(params).then(res=>{
          console.log(res)
        })
        this.init()
       },
       handleClick(row){
         console.log("获取",row)
         this.drawer = true
       },
		
	}
}
</script>
<style lang="scss">
.date{
    width: 89%;
    height: 800px;
    position: absolute;
    top:60px;
    left: 155px;
    overflow: auto;
    .img{
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .filter{
      margin: 10px 0;
    }
}

</style>