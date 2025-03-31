<template>
  <div class="image-header">
    <div class="header-top">
      <div class="header-content">
        <div class="logo">
          <img src="../img/2222.png" alt="Logo" />
          <span class="company-name">上海都亭消防技术工程有限公司</span>
        </div>
        <!-- 汉堡菜单按钮 -->
        <button class="menu-btn" @click="toggleMenu">☰</button>
        <!-- 导航栏 -->
        <nav class="nav" :class="{ 'nav-active': isMenuOpen }">
          <a href="javascript:void(0)" @click="scrollToSection('serve')">服务范围</a>
          <a href="javascript:void(0)" @click="scrollToSection('zhanshi')">项目展示</a>
          <a href="javascript:void(0)" @click="scrollToSection('our')">联系我们</a>
          <a href="javascript:void(0)" @click="scrollToSection('about')">关于我们</a>
        </nav>
      </div>
    </div>
    <div class="header-min">
      <div class="text-left">
        <h1>专业消防维保，</h1>
        <h1>守护您的安全防线</h1>
        <h3>从设计到检测，我们提供一站式消防解决方案，24小时应急响应，让隐患无处藏身！</h3>
      </div>
    </div>
  </div>

  <div id="serve">
    <Serve />
  </div>
  <div id="zhanshi">
    <Zhanshi />
  </div>
  <div id="our">
    <Our />
  </div>
  <div id="about">
    <About />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Serve from '/src/components/Serve.vue'
import Zhanshi from '/src/components/Zhanshi.vue'
import Our from '/src/components/our.vue'
import About from '/src/components/About.vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false; // 点击后关闭菜单
  }
};
</script>

<style scoped>
.image-header {
  width: 100%;
  height: 700px;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../img/head_banner2.jpg') no-repeat center center;
  background-size: cover;  /* 背景图铺满容器 */
  background-attachment: fixed;  /* 固定背景，避免超出 */
}


.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  color: #fff;
  position: relative;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  margin-right: 10px;
}

.company-name {
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.nav a:hover {
  border-color: #FFCA42;
}

.header-min {
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.text-left {
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  color: #fff;
}

h1 {
  color: #fff;
}

h3 {
  color: #B4C7E7;
}

.menu-btn {
  display: none;
  font-size: 24px;
  background: none;  /* 确保背景透明 */
  border: none;  /* 去掉按钮的边框 */
  color: #000;  /* 设置按钮的文字颜色为黑色 */
  cursor: pointer;
}

@media (max-width: 768px) {
  .header-content {
    /* flex-direction: column;
    align-items: center;
    text-align: center; */
	display: flex;
	align-items: center;
	background-color: #fff;
    padding: 10px;
  }
  .image-header {
      width: 100%;
      height: auto; /* 让高度自适应 */
      min-height: 400px; /* 设置最小高度，避免背景过小 */
      background-size: cover;
      background-position: center;
    }
  
    .header-min {
      height: auto;
      padding: 40px 20px;
    }
  
    h1 {
      font-size: 1.5rem;
    }
  
    h3 {
      font-size: 0.9rem;
    }
	
	.company-name {
		color: #000;
	  font-size: 0.7rem;  /* 将字体大小调整为更小的值 */
	}

  .menu-btn {
      display: block;
      /* position: absolute;
      top: 15px;
      right: 20px; */
      color: #000;  /* 修改菜单按钮颜色为黑色，适应手机端 */
    }
  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    padding: 10px;
    width: auto;
    min-width: 120px;
  }

  .nav a {
    display: block;
    padding: 10px;
    color: white;
    text-align: center;
  }

  .nav.nav-active {
    display: flex;
  }

  .header-min {
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 0.9rem;
  }
}
</style>
