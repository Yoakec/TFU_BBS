import AppVue from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main.vue'),
      children:[
        {path:'/user/create', name:'usercreate',component:() => import('../views/User/userCreate.vue')},
        {path:'/user/update/:id', name:'userupdate',component:() => import('../views/User/userCreate.vue')},
        {path:'/user/list', name:'userlist',component:() => import('../views/User/userList.vue')},
      ]
    }
  ]
})

export default router
