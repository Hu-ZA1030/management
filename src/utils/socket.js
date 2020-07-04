// 将socket 使用全局,然后挂载到main的入口文件
import io from "socket.io-client"

let socket = io("http://10.36.147.147:3000")
socket.on("connet",function(){
	console.log("socket连接成功")
})

export default  socket