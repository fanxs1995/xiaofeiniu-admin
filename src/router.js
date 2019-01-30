import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import CartgoryList from './views/CartgoryList.vue'
import CartgoryAdd from './views/CartgoryAdd.vue'
import CartgoryDelete from './views/CartgoryDelete.vue'
import CartgoryUpdate from './views/CartgoryUpdate.vue'
import DishList from './views/DishList.vue'
import DishAdd from './views/DishAdd.vue'
import DishDelete from './views/DishDelete.vue'
import DishUpdate from './views/DishUpdate.vue'
import OrderList from './views/OrderList.vue'
import Security from './views/Security.vue'



Vue.use(Router)
//整个小牧路由词典。访问路径 <相对应>试图组建
export default new Router({
  routes: [
    {path: '/', redirect:"/Login" },
    {path: '/login', component:Login},
    {
      path:'/main',
      component:Main,
      children:[
        {path:"",redirect:"/table/list"},
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        {path:'/category/list',component:CartgoryList},
        {path:'/category/add',component:CartgoryAdd},
        {path:'/category/delete',component:CartgoryDelete},
        {path:'/category/update',component:CartgoryUpdate},
        {path:'/dish/list',component:DishList},
        {path:'/dish/add',component:DishAdd},
        {path:'/dish/delete',component:DishDelete},
        {path:'/dish/update',component:DishUpdate},
        {path:'/order/list',component:OrderList},
        {path:'/Security',component:Security}
      ]
    },
    {path: '*', component: NotFound}
  ]
})
