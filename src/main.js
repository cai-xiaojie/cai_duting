import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // 引入路由配置

const app = createApp(App)  // 创建 Vue 应用实例
app.use(router)  // 使用 Vue Router
app.mount('#app')  // 挂载 Vue 应用到 index.html 的 #app 元素