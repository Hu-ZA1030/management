// 引入Vue
import Vue from "vue"
//引入路由
import VueRouter from "vue-router"

// 注册路由
Vue.use(VueRouter)

const Home = ()=> import("@/pages/Theme/home.vue") 
const AddList = ()=>import("@/pages/Theme/addList.vue")
import Login from "@/pages/Theme/login.vue"
import Editor from "@/pages/Theme/editor.vue" 
import Chat from  "@/pages/Theme/chat.vue"

// 创建 路由实例
let router = new VueRouter({
    mode:"hash",
    routes:[
        {path:"/home",alias:"/",component:Home},
        {path:"/login", components:{login:Login}},
        {path:"/addList",component:AddList},
		{path:"/editor",component:Editor},
		{path:"/chat",component:Chat}
    ]
})


// 



// 抛出实例
export default router