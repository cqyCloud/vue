import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import headNav from '../components/common/headNav'
import newsList from '../components/news/newslist'
import photoList from  '../components/photoshare/photolist'
// import shopList from '../components/shop/shoplist'

//安装全局组件
Vue.component('headNav',headNav)

//数据请求
import Axios from 'axios'
Axios.defaults.baseURL = "http://localhost:3000/vueProject"
Vue.prototype.$ajax = Axios

Vue.prototype.dataURL = function (file,title,id) {
  id = (id === undefined)?'':id;
  return file+'?title='+title+id;
}
// import $ from 'jquery'
// Vue.prototype.$jq = $;

// mint-ui 组件库
import  Mint from 'mint-ui'
import  'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      name:'news.list',
      path:'/news/list',
      component:newsList
    },
    {
      name:'photo.list',
      path:'/photo/list',
      component:photoList
    },
    // {
    //   name:'shop.list',
    //   path:'/shop/list',
    //   component:shopList
    // }
  ]
})
