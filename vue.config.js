module.exports = {
    devServer: {
      port: 8787,
      proxy: {
		"/api":{
			target:"http://10.36.147.147:3000",
			ws:true,
			changeOrigin:true
		},
		"/upload":{
			target:"http://10.36.147.147:3000",
			ws:true,
			changeOrigin:true
		}
      }
    }
  }
  