{% extends "./../manager-layout.tpl" %}

{% block content %}
  <div class="artcle-section" id="article-section">
    <a class="artcle-insert" href="/manager/articleCreate">添加文章</a>
    <ul class="artcle-title">
      <li class="artcle-title-item">id</li>
      <li class="artcle-title-item">标题</li>
      <li class="artcle-title-item">分类</li>
      <li class="artcle-title-item">创建时间</li>
      <li class="artcle-title-item">操作</li>
    </ul>
    {% for val in article %}
    <ul class="artcle-list">
      <li class="artcle-list-item artcle-id">{{val.id}}</li>
      <li class="artcle-list-item artcle-text">{{val.title}}</li>
      <li class="artcle-list-item">{{val.name}}</li>
      <li class="artcle-list-item">{{val.created_time}}</li>
      <li class="artcle-list-item">
        <a class="artcle-item-edit" href="/manager/articleEdit/{{val.id}}">编辑</a>
        <button class="artcle-item-delete" data-id="{{val.id}}">删除</button>
      </li>
    </ul>
    {% endfor %}
  </div>
{% endblock %}
