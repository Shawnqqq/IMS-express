{% extends "./../manager-layout.tpl" %}
{% block content %}
  <div class="sort-section" id="sort-section">
    <a class="sort-insert" href="/manager/sortCreate">添加分类</a>
    <ul class="sort-title">
      <li class="sort-title-item">id</li>
      <li class="sort-title-item">名称</li>
      <li class="sort-title-item">操作</li>
    </ul>
    {% for val in sort %}
    <ul class="sort-list">
      <li class="sort-list-item">{{val.id}}</li>
      <li class="sort-list-item">{{val.name}}</li>
      <li class="sort-list-item">
        <a class="sort-item-edit" href="/manager/sortEdit/{{val.id}}">编辑</a>
        <button class="sort-item-delete" data-id="{{val.id}}">删除</button>
      </li>
    </ul>
    {% endfor %}
  </div>
{% endblock %}
