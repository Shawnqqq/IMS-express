{% extends "./../manager-layout.tpl" %}
{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">编辑文章</div>
    <form class="sort-insert-form">
      <div class="article-input">
        <p class="sort-input-title">名称</p>
        <input id="articleEdit-input-name" type="text"  value="{{article.title}}">
        <p class="articleEdit-input-name-message" id="articleEdit-input-name-message">内容不能为空</p>
      </div>
      <div class="article-input">
        <p class="sort-input-title">类型</p>
        <select id="articleEdit-input-sort">
        {% for val in sort %}
          <option value ={{val.id}}>{{val.name}}</option>
        {% endfor %}
        </select>
      </div>
      <div class="article-input">
        <p class="sort-input-title">内容</p>
        <div class='editor2'>
          <textarea name="editor2" id="editor2" rows="200" cols="100">
          {{article.text}}
          </textarea>
        </div>
      </div>
    </form>
    <input id="articleEdit-id" type="text" hidden value="{{article.id}}" />
    <button class="articleEdit-insert-btn" id="articleEdit-insert-btn">提交</button>
  </div>
{% endblock %}
{% block js %}
  <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
  <script src="https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js"></script>
  <script src="/javascripts/manager.js"></script>
  <script>
    CKEDITOR.replace('editor2');
  </script>
{% endblock %}
