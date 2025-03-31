<template>
	<div class="about">
		<h1>关于我们</h1>
		<p>作为一家高新技术企业，我们致力于为客户提供高效、可靠的消防系统维护与检测，确保您的场所安全无忧。我们的服务涵盖消防工程设计、施工、验收、维保、检测等多个领域，拥有丰富的行业经验和专业技术团队。我们始终坚持以客户为中心，秉承“专业、诚信、创新”的理念，致力于为客户提供优质的服务，守护安全每一刻。</p>
	</div>
</template>

<script>
</script>

<style scoped>
	.about {
		color: #fff;
		font-size: 16px;
		background: #000;
		padding: 50px 180px;
	}
	@media (max-width: 1024px) {
	  .about {
	    padding: 40px 100px; /* 适配平板端，缩小左右内边距 */
	  }
	}
	
	@media (max-width: 768px) {
	  .about {
	    padding: 30px 40px; /* 手机端内边距更小 */
	    font-size: 14px; /* 适配小屏幕的字体 */
	    text-align: center; /* 文字居中，提升可读性 */
	  }
	}
	
	@media (max-width: 480px) {
	  .about {
	    padding: 20px 20px; /* 超小屏幕的适配 */
	    font-size: 13px; /* 再次缩小字体 */
	  }
	}

</style>