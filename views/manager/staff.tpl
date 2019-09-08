{% extends "./../manager-layout.tpl" %}
{% block content %}
  <div class="staff-section" id="staff-section">
    <a class="staff-insert" href="/manager/staffCreate">添加管理员</a>
    <ul class="staff-title">
      <li class="staff-title-item">id</li>
      <li class="staff-title-item">姓名</li>
      <li class="staff-title-item">手机号</li>
      <li class="staff-title-item">密码</li>
      <li class="staff-title-item">操作</li>
    </ul>
    {% for val in manager %}
    <ul class="staff-list">
      <li class="staff-list-item">{{val.id}}</li>
      <li class="staff-list-item">{{val.name}}</li>
      <li class="staff-list-item">{{val.phone}}</li>
      <li class="staff-list-item">{{val.password}}</li>
      <li class="staff-list-item">
        <a class="staff-item-edit" href="/manager/staffEdit/{{val.id}}">编辑</a>
        <button class="staff-item-delete" data-id="{{val.id}}">删除</button>
      </li>
    </ul>
    {% endfor %}
  </div>
{% endblock %}
