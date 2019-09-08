{% extends "./../manager-layout.tpl" %}
{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">添加分类</div>
    <form class="sort-insert-form">
      <div class="sort-input">
        <p class="sort-input-title">名称</p>
        <input id="staff-input-name" type="text" placeholder="请输入名称">
        <p class="sort-input-name-message" id="staff-input-name-message">名称不能为空</p>
      </div>
    </form>
    <button class="sort-insert-btn" id="staff-insert-btn">提交</button>
  </div>
{% endblock %}