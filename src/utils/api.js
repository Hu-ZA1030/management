import fetch from "./fetch.js"

// 登入用户的接口
export function userLogin(data){
    return fetch({
        // url:"/user/login",
		url:"/api/users/login",
        method:"POST",
        data
    })
}
export function userRegis(data){
    return fetch({
        // url:"/user/regist",
		url:"/api/users/regist",
        method:"POST",
        data
    })   
}    




// 获取首页的推荐列表
export function getGoodList(params){
    return fetch({
        // url:"/jd/getHotGoodList",
		url:"/api/good/list",
        method:"GET",
        params
    })
}

// 删除商品列表
export function updeteleList(params){
    return fetch({
        // url:"/jd/delGood",
		url:"/api/good/del",
        method:"GET",
        params
    })
}

// 获取所有的商品类
export function getCastes(params){
    return fetch({
        // url:"/jd/getAllCates",
		url:"api/cate/getAllCates",
        method:"GET",
        params

    })
}

export function getCateGoodList(params){
	return fetch({
		url:"/api/cate/getCateGoodList",
		method:"GET",
		params
	})
}

// 添加数据
export function addGood(data){
    return fetch({
        // url:"/jd/addGood",
		url:"/api/good/add",
        method:"POST",
        data
    })
}

// 添加商品详情的文章
export function editDesc(data){
	return fetch({
		url:"/api/article/create",
		method:"POST",
		data
	})
}

// 上传图片
export function uploadimg(data){
	return fetch({
		url:"/upload/img",
		method:"POST",
		data
	})
}

export default{
    getGoodList, 
    updeteleList,
    userLogin,
    userRegis,
    getCastes,
    addGood,
	editDesc,
	getCateGoodList,
	uploadimg,
}