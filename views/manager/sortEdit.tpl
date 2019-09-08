{% extends "./../manager-layout.tpl" %}
{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">编辑分类</div>
    <form class="sort-insert-form"> 
      <div class="sort-input">
        <p class="sort-input-title">名称</p>
        <input id="sortEdit-input-name" type="text" placeholder="请输入姓名" value="{{sort.name}}">
        <p class="sort-input-name-message" id="sortEdit-input-name-message">内容不能为空</p>
      </div>
    </form>
    <input id="sortEdit-id" type="text" hidden value="{{sort.id}}" />
    <button class="sort-insert-btn" id="sortEdit-insert-btn">提交</button>
  </div>
{% endblock %}