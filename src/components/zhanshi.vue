<template>
  <div class="zhanshi" di="zhanshi">
    <div class="banner">
      <div class="left">
        <h1>项目展示</h1>
        <p>专业消防维保服务，守护安全每一刻。</p>
        <p>我们致力于提供高效、可靠的消防系统维护与检测，确保您的场所安全无忧。</p>
      </div>
    </div>
    <div class="card-content">
      <div class="card">
        <img src="../img/zhengda.png" alt="项目图片1" />
        <div class="overlay">证大家园养老院（维保检测）</div>
      </div>
      <div class="card">
        <img src="../img/hongye.png" alt="项目图片2" />
        <div class="overlay">红叶养老院（消防维保）</div>
      </div>
      <div class="card">
        <img src="../img/hongqiaoyouyi.png" alt="项目图片3" />
        <div class="overlay">虹桥友谊商城（消防检测）</div>
      </div>
      <div class="card">
        <img src="../img/wanxianguoji.png" alt="项目图片4" />
        <div class="overlay">万香国际创新港（消防维保）</div>
      </div>
      <div class="card">
        <img src="../img/waiguoyu.png" alt="项目图片5" />
        <div class="overlay">上海外国语大学附属外国语学校东校（消防检测）</div>
      </div>
      <div class="card">
        <img src="../img/yanjiusuo.png" alt="项目图片6" />
        <div class="overlay">中国船舶集团有限公司第七二六研究所（检测）</div>
      </div>
      <div class="card">
        <img src="../img/zaochuan.png" alt="项目图片7" />
        <div class="overlay">上海外高桥造船厂（检测）</div>
      </div>
      <div class="card">
        <img src="../img/chuanyi.png" alt="项目图片8" />
        <div class="overlay">创邑▪MIX罗秀路(检测)</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zhanshi {
  padding: 50px 180px;
}

.banner {
  padding-bottom: 50px;
}

.banner h1 {
  padding-bottom: 20px;
}

.banner p {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: left;
}

.card-content {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px; /* 卡片之间的间距 */
}

.card {
  flex: 0 0 calc(25% - 20px); /* 每个卡片占据容器的25%减去间距 */
  box-sizing: border-box; /* 包括内边距和边框在内的完整尺寸 */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  position: relative; /* 为了定位文字 */
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s ease; /* 添加过渡效果 */
}

.card:hover img {
  filter: brightness(50%); /* 鼠标悬停时图片变暗 */
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease; /* 添加过渡效果 */
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card:hover .overlay {
  opacity: 1; /* 鼠标悬停时显示文字 */
}
@media (max-width: 1024px) {
  .zhanshi {
    padding: 30px 60px; /* 缩小左右内边距 */
  }
  
  .card {
    flex: 0 0 calc(33.333% - 20px); /* 平板端每行3个卡片 */
  }
}

@media (max-width: 768px) {
	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.left h1 {
		font-size: 2.3rem;
	}
  .zhanshi {
    padding: 20px; /* 手机端减少内边距 */
  }

  .card-content {
    justify-content: center; /* 让卡片整体居中 */
  }

  .card {
    flex: 0 0 calc(50% - 10px); /* 手机端每行2个卡片 */
  }
}

@media (max-width: 480px) {
  .card {
    flex: 0 0 100%; /* 超小屏幕每行1个卡片 */
  }

  .overlay {
    font-size: 14px; /* 文字适配小屏 */
  }
}

</style>
