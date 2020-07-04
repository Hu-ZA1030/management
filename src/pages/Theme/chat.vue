<template>
    <div class="chat">
		<h1>聊天室</h1>
		<div class="container">
			
			<!-- 聊天区 -->
			<div ref="chat" class="chat-box">
				<div class="row" v-for="item in msgArr" :key="item.id">
					<div v-html="item.msg"></div>
				</div>
			</div>
			
			<!-- 输入和发送 -->
			<div class="bottom">
				<input class="msg" type="text" v-model.trim="msg" @keydown.enter="send"/>
				<button class="btn" @click="send">发送</button>
			</div>
			
		</div>
	</div>
</template>
<script>
export default {
	name:"Chat",
	data:function(){
		return{
			socket:null,
			content:"",
			msg:"",
			count:"",//用于计算聊天消息的数量，作用：来让滚动条处于底端
			msgArr:[],// 存储聊天消息 
		}
	},
	mounted(){
		// 创建 客户端 socket 实例
		this.$socket.on("student",(msg)=>{
			this.count++ 
			this.msgArr.push({
				id:this.count,
				msg:"<div>"+msg+"</msg>"
			})
		})
	},
	updated(){
		let chatRef = this.$refs.chat
		chatRef.scrollTo = chatRef.scrollHeight
	},
	methods:{
		// 向服务器发送消息
		send(){
			if(this.msg){
				this.$socket.emit("server",this.msg)
				this.msg = ""
			}
		}
	}
    
}
</script>
<style lang="scss" scoped>
	.chat{
		
		width: 1100px;
		// border: 1px solid black;
		h1{
			font-size: 26px;
		}
		.container{
			background: #4A604E;
			width: 750px;
			height: 500px;
			border: 1px solid black;
			margin: 25px auto;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.chat-box{
				width: 400px;
				height: 450px;
				// border: 1px solid red;
				background: white;
				// margin: auto;
				border: 1px solid #9c9c9c;
				overflow: auto;
				overflow-x: hidden;
				word-wrap:break-word;
				.row{
					width: 400px;
					line-height: 35px;
				}
			}
			.bottom{
				width: 400px;
				height: 35px;
				.msg{
					height: 35px;
					width: 340px;
					border: 0;
				}
				.btn{
					border: 0;
					height: 37px;
					width: 54px;
					margin-top:2px ;
					margin-left: 2px;
				}
			}
		}
	}

</style>