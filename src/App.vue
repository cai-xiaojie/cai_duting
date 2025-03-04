<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Serve from './components/Serve.vue'
import Zhanshi from './components/Zhanshi.vue'
import Our from './components/Our.vue'
import About from './components/About.vue'
</script>

<template>
  <div>
    <HelloWorld/>  
<!--    <Serve />      
    <Zhanshi />   
    <Our />        
    <About />      -->
  </div>
</template>

<style scoped>
/* 样式保持不变 */
</style>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
