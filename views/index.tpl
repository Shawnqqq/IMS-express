<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>IMS 首页</title>
  <link rel="stylesheet" href="/stylesheets/index.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <a class="head-nav" href="/index">
        <img class="head-logo" src='/images/index-logo.png'>
      </a>
      <ul class="header-content">
        <a class="head-item" href="/index/1">技术动态</a>
        <a class="head-item" href="/index/2">八仔新闻</a>
        <a class="head-item" href="/index/4">科技热点</a>
        <a class="head-item" href="/index/6">最新资讯</a>
      </ul>
      <a class="login" href="/login">登录</a>
      <img class="head-image" src="/images/index-head.png">
    </div>
    <div class="content">
      {% block content %}
      {% endblock %}
    </div>
    <div class="footer">
      Copyright © 2019 极客学院体验技术部出品
    </div>
  </div>
</body>
</html>