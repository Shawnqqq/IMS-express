const PAGE={
  data:{

  },
  init(){
    this.bind();
  },
  bind(){
    //增加
    $('#sort-insert-btn').on('click',this.submit_staff)
    $('#staff-insert-btn').on('click',this.submit_sort)
    $('#article-insert-btn').on('click',this.submit_article)
    //编辑
    $('#staffEdit-insert-btn').on('click',this.Edit_staff)
    $('#sortEdit-insert-btn').on('click',this.Edit_sort)
    $('#articleEdit-insert-btn').on('click',this.Edit_article)

    //删除
    $('#staff-section').on('click','.staff-item-delete',this.delete_staff)
    $('#sort-section').on('click','.sort-item-delete',this.delete_sort)
    $('#article-section').on('click','.artcle-item-delete',this.delete_article)
  },
  delete_article:function(e){
    let id = $(e.target).data('id')
    let question = confirm('确定删除此文章？')
    if(question){
      $.ajax({
        type: "DELETE",
        url: "http://localhost:4500/api/article/"+id,
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/article'
          }else{
            alert(res.message)
          }
        }
      })
    }else{
      alert('取消了操作')
    }
  },
  delete_sort:function(e){
    let id = $(e.target).data('id')
    let question = confirm('确定删除此分类？')
    if(question){
      $.ajax({
        type: "DELETE",
        url: "http://localhost:4500/api/sort/"+id,
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/sort'
          }else{
            alert(res.message)
          }
        }
      })
    }else{
      alert('取消了操作')
    }
  },
  delete_staff:function(e){
    let id = $(e.target).data('id')
    let question = confirm('确定删除此管理员？')
    if(question){
      $.ajax({
        type: "DELETE",
        url: "http://localhost:4500/api/manager/"+id,
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/staff'
          }else{
            alert(res.message)
          }
        }
      })
    }else{
      alert('取消了操作')
    }
  },
  submit_staff(){
    let islock = true;
    let nameVal = $('#sort-input-name').val()
    if(!(/\S/.test(nameVal))){
      $('#sort-input-name-message').css({"display":'block'})
      $('#sort-input-name').attr({class:'active'})
      islock = false;
    }else{
      $('#sort-input-name-message').css({"display":'none'})
      $('#sort-input-name').attr({class:'sort-input-name'})
    }
    let phoneVal = $('#sort-input-phone').val()
    if(!(/^1[3456789]\d{9}$/.test(phoneVal))){ 
      $('#sort-input-phone-message').css({"display":'block'})
      $('#sort-input-phone').attr({class:'active'}) 
      islock = false;
    }else{
      $('#sort-input-phone-message').css({"display":'none'})
      $('#sort-input-phone').attr({class:'sort-input-phone'})
    }
    let passwordVal = $('#sort-input-password').val()
    if(!(/\d{6}/.test(passwordVal))){ 
      $('#sort-input-password-message').css({"display":'block'})
      $('#sort-input-password').attr({class:'active'}) 
      islock = false;
    }else{
      $('#sort-input-password-message').css({"display":'none'})
      $('#sort-input-password').attr({class:'sort-input-password'})
    }

    if(islock){
      $.ajax({
        type: "POST",
        url: "http://localhost:4500/api/manager",
        data: {name:nameVal,phone:phoneVal,password:passwordVal},
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/staff'
          }else{
            alert(res.message)
          }
        }
      });
    }
  },
  submit_sort(){
    let islock = true
    let nameVal = $('#staff-input-name').val()
    if(!(/\S/.test(nameVal))){
      $('#staff-input-name-message').css({"display":'block'})
      $('#staff-input-name').attr({class:'active'})
      islock = false;
    }else{
      $('#staff-input-name-message').css({"display":'none'})
      $('#staff-input-name').attr({class:'staff-input-name'})
    }
    if(islock){
      $.ajax({
        type: "POST",
        url: "http://localhost:4500/api/sort",
        data: {name:nameVal},
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/sort'
          }else{
            alert(res.message)
          }
        }
      });
    }
  },
  submit_article(){
    let islock = true;
    let nameVal = $('#article-input-name').val()
    let sortVal = $('#article-input-sort').val()
    var strVal = CKEDITOR.instances.editor1.getData();

    if(!(/\S/.test(nameVal))){
      $('#article-input-name-message').css({"display":'block'})
      $('#article-input-name').attr({class:'active'})
      islock = false;
    }else{
      $('#article-input-name-message').css({"display":'none'})
      $('#article-input-name').attr({class:'sort-input-name'})
    }
    if(islock){
      $.ajax({
        type: "POST",
        url: "http://localhost:4500/api/article",
        data: {title:nameVal,sort_id:sortVal,text:strVal},
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/article'
          }else{
            alert(res.message)
          }
        }
      });
    }
  },
  Edit_staff(){
    let islock = true;
    let nameVal = $('#staffEdit-input-name').val()
    if(!(/\S/.test(nameVal))){
      $('#staffEdit-input-name-message').css({"display":'block'})
      $('#staffEdit-input-name').attr({class:'active'})
      islock = false;
    }else{
      $('#staffEdit-input-name-message').css({"display":'none'})
      $('#staffEdit-input-name').attr({class:'staffEdit-input-name'})
    }
    let phoneVal = $('#staffEdit-input-phone').val()
    if(!(/^1[3456789]\d{9}$/.test(phoneVal))){ 
      $('#staffEdit-input-phone-message').css({"display":'block'})
      $('#staffEdit-input-phone').attr({class:'active'}) 
      islock = false;
    }else{
      $('#staffEdit-input-phone-message').css({"display":'none'})
      $('#staffEdit-input-phone').attr({class:'staffEdit-input-phone'})
    }
    let passwordVal = $('#staffEdit-input-password').val()
    if(!(/\d{6}/.test(passwordVal))){ 
      $('#staffEdit-input-password-message').css({"display":'block'})
      $('#staffEdit-input-password').attr({class:'active'}) 
      islock = false;
    }else{
      $('#staffEdit-input-password-message').css({"display":'none'})
      $('#staffEdit-input-password').attr({class:'staffEdit-input-password'})
    }

    let id = $('#staffEdit-id').val()
 
    if(islock){
      $.ajax({
        type: "PUT",
        url: "http://localhost:4500/api/manager/"+id,
        data: {name:nameVal,phone:phoneVal,password:passwordVal},
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/staff'
          }else{
            alert(res.message)
          }
        }
      });
    }
  },
  Edit_sort(){
    let islock = true
    let nameVal = $('#sortEdit-input-name').val()
    if(!(/\S/.test(nameVal))){
      $('#sortEdit-input-name-message').css({"display":'block'})
      $('#sortEdit-input-name').attr({class:'active'})
      islock = false;
    }else{
      $('#sortEdit-input-name-message').css({"display":'none'})
      $('#sortEdit-input-name').attr({class:'sortEdit-input-name'})
    }

    let id = $('#sortEdit-id').val()

    if(islock){
      $.ajax({
        type: "PUT",
        url: "http://localhost:4500/api/sort/"+id,
        data: {name:nameVal},
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/sort'
          }else{
            alert(res.message)
          }
        }
      });
    }
  },
  Edit_article(){
    let islock = true;
    let nameVal = $('#articleEdit-input-name').val()
    let sortVal = $('#articleEdit-input-sort').val()
    var strVal_art = CKEDITOR.instances.editor2.getData();

    if(!(/\S/.test(nameVal))){
      $('#articleEdit-input-name-message').css({"display":'block'})
      $('#articleEdit-input-name').attr({class:'active'})
      islock = false;
    }else{
      $('#articleEdit-input-name-message').css({"display":'none'})
      $('#articleEdit-input-name').attr({class:'sort-input-name'})
    }

    let id = $('#articleEdit-id').val()

    if(islock){
      $.ajax({
        type: "PUT",
        url: "http://localhost:4500/api/article/"+id,
        data: {title:nameVal,sort_id:sortVal,text:strVal_art},
        success:function(res){
          if(res.code === 200){
            alert(res.message)
            location.href = '/manager/article'
          }else{
            alert(res.message)
          }
        }
      });
    }
  }
}
PAGE.init()