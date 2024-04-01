import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission from './mockServeData/permission'
/*
//定义mock请求拦截，请求地址是ip后面的内容；接口请求类型：看定义的api
Mock.mock('/api/home/getData',function(){
 //拦截到请求后的处理逻辑
 console.log("拦截到了")
 return []
}) */

Mock.mock('/api/home/getData',homeApi.getStatisticalData)

//用户列表的数据（定义接口）
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock(/api\/user\/getUser/,user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)