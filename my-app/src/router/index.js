import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)

//1.创建路由组件
//2.将路由与组件进行映射
//3.创建router实例
//4.对创建的实例对外进行暴露
//5.创建和挂载根实例。注意：要通过 router 配置参数注入路由， 从而让整个应用都有路由功能

const routes = [
      //主路由
      { path: '/',
       component: Main,
       redirect:'/home',//重定向
       children:[
        //子路由
        { path: 'home', component: Home },//首页
        { path: 'user', component: User },//用户管理
        { path: 'mall', component: Mall },//商品管理
        { path: 'page1', component: PageOne },//页面1
        { path: 'page2', component: PageTwo },//页面2
    ]
  }
]

  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  export default router