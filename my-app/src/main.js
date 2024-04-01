import Vue from 'vue'
import App from './App.vue'
//import {Row,Button} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './api/mock'
import store from './store'
import Cookies from 'js-cookie';

Vue.config.productionTip =false;
Vue.config.performance=true;
Vue.config.devtools=true;

//全局引入
Vue.use(ElementUI)

//按需引入
//Vue.use(Row)
//Vue.use(Button)

//添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token=Cookies.get('token')
  //token不存在，说明当前用户未登录，应该跳转至登录页
  if(!token&&to.name!=='login'){
    next({ name:'login'})
  }else if(token&&to.name==='login'){//token存在,说明用户登录，此时跳转至首页
    next({name:'home'})
  }else{
    next()
  }
})

new Vue({
  store, 
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }

}).$mount('#app')
