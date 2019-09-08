{% extends "./../manager-layout.tpl" %}
{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">添加管理员</div>
    <form class="sort-insert-form">
      <div class="sort-input">
        <p class="sort-input-title">名称</p>
        <input id="sort-input-name" type="text" placeholder="请输入姓名">
        <p class="sort-input-name-message" id="sort-input-name-message">内容不能为空</p>
      </div>
      <div class="sort-input">
        <p class="sort-input-title">手机号</p>
        <input id="sort-input-phone" type="text" placeholder="请输入手机号">
        <p class="sort-input-phone-message" id="sort-input-phone-message">手机号格式错误</p>
      </div>
      <div class="sort-input">
        <p class="sort-input-title">密码</p>
        <input id="sort-input-password" type="password" placeholder="请输入密码">
        <p class="sort-input-password-message" id="sort-input-password-message">不能少于6位数</p>
      </div>
    </form>
    <button class="sort-insert-btn" id="sort-insert-btn">提交</button>
  </div>
{% endblock %}
