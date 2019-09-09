{% extends "./../index.tpl" %}

{% block content %}
  <div class="singlePage-title">{{article.title}}</div>
  <div class="singlePage-time">{{article.created_time}}</div>
  {{article.text | safe}}
{% endblock %}