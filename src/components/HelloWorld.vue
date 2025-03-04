<template>
  <div class="image-header">
    <div class="header-top">
		<div class="header-content">
			<div class="logo">
				<img src="../img/2222.png" alt="Logo" />
				<span class="company-name">上海都亭消防技术工程有限公司</span>
			</div>
			<nav class="nav">
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

  <!-- 给每个部分添加唯一的 ID -->
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
import Serve from '/src/components/Serve.vue'
import Zhanshi from '/src/components/Zhanshi.vue'
import Our from '/src/components/our.vue'
import About from '/src/components/About.vue'

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.image-header {
  padding: 30px 100px;
  position: relative;
  width: 100%;
  height: 700px;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('../img/head_banner2.jpg') no-repeat center center/cover;
  box-sizing: border-box;
}


.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  position: relative; /* 确保文字位于伪元素之上 */
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  margin-right: 10px;
  /* border-radius: 50px; */
}

.company-name {
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 20px; /* 设置子元素之间的间距 */
}

.nav a {
  margin-left: 20px;
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
	padding-left: 20px;
	display: flex;
	height: 80%;
	align-items: center;
	justify-content: space-between;
}
.text-left {
	width: 40%;
	padding-left: 60px;
  color: #fff;

}
h1 {
	color: #fff;
}
h3 {
	color: #B4C7E7;
}
.text-right {
	margin-right: 20px;
	/* background-color: #fff; */
	width: 40%;
	height: 100%;
	display: flex;
	justify-content: center;
}

</style>
