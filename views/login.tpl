{% extends './layout.tpl' %}

{% block css %}
  <meta charset="UTF-8">
  <title>管理员登录</title>
  <link rel="stylesheet" href="./stylesheets/login.css">
{% endblock %}

{% block content %}
<body>
  <div class="container">
    <div class="banner">
      <img src='/images/logo.jpg'>
      <p>管理员登录</p>
    </div>
    <div class="content">
      <div class="main">
        <img src="/images/login.jpg">
        <form class="form">
          <p class="form-title">管理员登录</p>
          <input type="text" class="input" placeholder="请输入手机号">
          <input type="password" class="input" placeholder="请输入密码">
          <button id='loginBtn'>登录</button>
        </form>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</body>
{% endblock %}