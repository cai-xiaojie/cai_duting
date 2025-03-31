<template>
  <div class="our">
    <div class="left">
		<h3>联系我们</h3>
		<p>全天24小时</p>
		<p>我们很乐意为您提供帮助</p>
    </div>
	<div class="right">
		<div class="right-box1">
			<p>联系邮箱</p>
			<p>____</p>
			<p>550383902@qq.com</p>
			<p>404303326@qq.com</p>
		</div>
		<div class="right-box2">
			<p>联系电话</p>
			<p>____</p>
			<p>徐经理：180 1567 4886</p>
			<p>宋先生：189 1638 6119</p>
		</div>
	</div>
  </div>
</template>

<style scoped>
.our {
	background: url(../img/Contact Info.png) repeat fixed center;
	padding: 50px 180px;
	display: flex;
	/* justify-content: space-between; */
}


.left {
	padding-bottom: 50px;
	width: 45%;
}
.left p {
	padding: 0; 
	margin: 0;
	font-size: 2rem;
	font-weight: 800;
}
.right {
	display: flex;
}
.right-box2 {
	margin-left: 150px;
}
.right-box1 :nth-child(2){
	margin: 0;
	padding: 0;
}

@media (max-width: 768px) {
  .our {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-size: cover; /* 适配背景 */
  }

  .left {
    width: 100%;
    padding-bottom: 20px;
  }

  .left p {
    font-size: 1.5rem;
  }

  .right {
    flex-direction: column;
    width: 100%;
  }

  .right-box1,
  .right-box2 {
    margin: 0;
    padding: 10px;
  }

  .right-box2 {
    margin-top: 20px;
  }
}





</style>
