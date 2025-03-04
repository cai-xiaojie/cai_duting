<template>
  <div class="serve">
    <div class="banner">
      <div class="left">
        <h1>我们的服务范围</h1>
        <h3>our service</h3>
      </div>
      <div class="right">
        <span>从设计到检测，我们提供一站式消防解决方案，24小时应急响应，让隐患无处藏身！</span>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="title">
          <h3>01</h3>
        </div>
        <div class="box">
          <div class="icon-container">
            <img src="../img/serve1.png" alt="服务图标" />
          </div>
          <h2>消防维保</h2>
          <p>定期维护、检测消防设备，确保设备完好，降低安全隐患，预防潜在火灾风险。</p>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <h3>02</h3>
        </div>
        <div class="box">
          <div class="icon-container">
            <img src="../img/serve2.png" alt="服务图标" />
          </div>
          <h2>消防检测</h2>
          <p>专业消防检测服务，确保您的场所消防设施完好有效。我们提供全面的消防系统检测与评估，保障您的安全。</p>
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
      <div class="card">
        <div class="title">
          <h3>04</h3>
        </div>
        <div class="box">
          <div class="icon-container">
            <img src="../img/serve3.png" alt="服务图标" />
          </div>
          <h2>消防安全评估</h2>
          <p>通过全面识别和分析企业的火灾风险，评估现有消防系统的有效性，提出改进建议，确保企业符合消防法规，提升整体消防安全水平。</p>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <h3>05</h3>
        </div>
        <div class="box">
          <div class="icon-container">
            <img src="../img/serve3.png" alt="服务图标" />
          </div>
          <h2>消防咨询</h2>
          <p>提供专业的消防安全管理服务，包括建立和优化消防安全管理体系，制定应急预案，指导企业落实消防安全措施，确保符合法规要求。</p>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <h3>06</h3>
        </div>
        <div class="box">
          <div class="icon-container">
            <img src="../img/serve3.png" alt="服务图标" />
          </div>
          <h2>消防培训</h2>
          <p>为企业员工提供火灾预防、应急响应、消防设备使用等方面的培训，提高员工的消防安全意识和技能，确保在紧急情况下能够有效应对，保障人身和财产安全。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.serve {
  padding: 50px 180px;
}

h1,
h3 {
  padding: 0;
  margin: 0;
}

.banner {
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.right {
  padding: 40px;
  background-color: #e5e5e5;
  width: 30%;
  border-radius: 50px;
}

.right span {
  font-size: 15px;
  font-weight: bold;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}


.card {
  background-color: #fff;
  border: 1px solid #dbe4e9;
  border-radius: 16px;
  padding: 30px;
  flex: 1 1 calc(33.333% - 20px);
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
  width: 60px;
  height: 60px;
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
