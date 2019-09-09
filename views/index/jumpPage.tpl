{% extends "./../index.tpl" %}

{% block content %}
  {% for val in sort %}
    <ul class="jumpPage-container">
      <a class="jumpPage-item" href="/index/article/{{val.id}}">{{val.title}}</a>
      <p class="jumpPage-time">{{val.created_time}}</p>
    </ul>
  {% endfor %}
{% endblock %}