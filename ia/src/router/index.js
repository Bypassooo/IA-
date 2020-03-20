import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import PageThree from '../views/PageThree'
import PageFour from '../views/PageFour'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '总线系统',
    component: Index,
    redirect:'/pageOne',
    children:[
      {
        path:'/pageOne',
        name:'日志对比',
        component: PageOne
      },
      {
        path:'/pageTwo',
        name:'其他',
        component: PageTwo
      }
    ]
  },
  {
    path: '/navigate',
    name: '集中交易系统',
    component: Index,
    children:[
      {
        path:'/pageThree',
        name:'页面3',
        component: PageThree
      },
      {
        path:'/pageFour',
        name:'页面4',
        component: PageFour
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
