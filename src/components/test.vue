<template>
  <div class="our">
    <div class="banner">
      <div class="top">
        <h1>联系我们</h1>
		<h3>CONTACT US</h3>
      </div>
    </div>
	<div class="card-container">
	    <div class="card">
			<div class="title">
				<h3>01</h3>
			</div>
			<div class="box">
				<div class="icon-container">
					<img src="../img/phone.png" alt="服务图标" />
				</div>
				<h2>宋先生</h2>
				<p>189 1638 6119</p>
			</div>
	    </div>
		<div class="card">
			<div class="title">
				<h3>02</h3>
			</div>
			<div class="box">
				<div class="icon-container">
					<img src="../img/phone1.png" alt="服务图标" />
				</div>
				<h2>徐经理</h2>
				<p>180 1567 4886</p>
		  </div>
		</div>
		<div class="card">
			<div class="title">
				<h3>03</h3>
			</div>
			<div class="box">
				<div class="icon-container">
					<img src="../img/serve3.png" alt="服务图标" />
				</div>
				<h2>消防改造</h2>
				<p>为企业量身定制消防安全解决方案，优化消防系统设计，提升整体防火能力，确保符合法规要求。</p>
			</div>
		</div>
	  </div>
  </div>
</template>
<!-- 徐经理：180 1567 4886
宋先生：189 1638 6119 -->

<style scoped>
.our {
  padding: 50px 180px;
}

.banner {
  padding-bottom: 50px;
}

.top h1,h3 {
	padding: 0;
	margin: 0;
	font-weight: bold;
}

.banner p {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: left;
}


.card-container {
	  display: flex;
	  justify-content: space-around;
	  gap: 20px;
	}
	
	.card {
	  background-color: #fff;
	  border: 1px solid #DBE4E9;
	  border-radius: 16px;
	  padding: 30px;
	  width:30%;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
	  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
	}

	
	.card:hover {
	  transform: translateY(-5px);
	  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}
	.card .box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon-container img {
	  width: 60px; /* 设置图标宽度 */
	  height: 60px; /* 设置图标高度 */
	}
	.card h2 {
	  font-size: 1.5rem;
	  margin-bottom: 10px;
	}
	
	.card p {
	  font-size: 0.8rem;
	  color: #555;
	}

</style>
