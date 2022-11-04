// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// 路由規則描述數組
const routes = [
  {
    path: '/',
    redirect: '/WindowMain/Chat'
  },
  {
    path: '/WindowMain',
    component: () => import('../Window/WindowMain.vue'),
    children: [
      {
        path: 'Chat',
        component: () => import('../Window/WindowMain/Chat.vue'),
      },
      {
        path: 'Contact',
        component: () => import('../Window/WindowMain/Contact.vue'),
      },
      {
        path: 'Collection',
        component: () => import('../Window/WindowMain/Collection.vue'),
      },
    ]
  },
  {
    path: '/WindowSetting',
    component: () => import('../Window/WindowSetting.vue'),
    children: [
      {
        path: 'AccountSetting',
        component: () => import('../Window/WindowSetting/AccountSetting.vue')
      }
    ]
  },
  {
    path: '/WindowUserInfo',
    component: () => import('../Window/WindowUserInfo.vue')
  }
]

export let router = createRouter({
  history: createWebHistory(), // 與 CustomScheme 兼容得很好
  routes
})