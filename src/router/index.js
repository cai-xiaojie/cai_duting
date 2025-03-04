import { createRouter, createWebHistory } from 'vue-router'
// 导入你的组件
import Serve from '../components/Serve.vue'
import Zhanshi from '../components/Zhanshi.vue'
import Our from '../components/Our.vue'
import About from '../components/About.vue'

// 配置路由
const routes = [
  { path: '/', component: Serve },
  { path: '/zhanshi', component: Zhanshi },
  { path: '/our', component: Our },
  { path: '/about', component: About },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
