<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>管理员页面</title>
    <link rel="stylesheet" href="/stylesheets/models.css">
</head>
<body>
  <div class="container">
    <div class="head-section">
      <img src="/images/logo.jpg">
      <div class="out">
        <p class="out-text">退出系统</p>
      </div>
    </div>
    <div class="body-section">
      <div class="side-content">
        <a class="side-item {% if nav == 'staff' %}active{% endif %}" href="/manager/staff">
          <img src='/images/marager.png'>
          <p>人员管理</p>
        </a>
        <a class="side-item {% if nav == 'sort' %}active{% endif %}" href="/manager/sort">
          <img src='/images/sort.png'>
          <p>分类管理</p>
        </a>
        <a class="side-item {% if nav == 'article' %}active{% endif %}" href="/manager/article">
          <img src='/images/article.png'>
          <p>文章管理</p>
        </a>
      </div>
      <div class="layout-content">
        <div class="main-content">
          {% block content %}
          {% endblock %}
        </div>
        <div class="footer-content">
        Copyright © 2019 极客学院体验技术部出品
        </div>
      </div>
    </div>
  </div>

  {% block js %}
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js"></script>
    <script src="/javascripts/manager.js"></script>
  {% endblock %}
</body>
</html>