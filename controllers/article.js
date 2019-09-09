const articleModels = require('./../models/articleModels');
const sortModels = require('./../models/sortModels')

const {formatTime} = require('../utils/formatDate');

const articleController = {
  show: async function(req,res,next){
    try{
      let article = await articleModels
        .whole()
        .leftJoin('sort','article.sort_id','sort.id')
        .column('article.id','article.title','sort.name','article.text','article.created_time')
      article.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      res.locals.article = article;
      res.locals.nav = 'article';
      res.render('manager/article',res.locals)
    }catch(err){
      res.locals.error = err;
      res.render('error',res.locals);
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      // 文章内容
      let article = await articleModels
        .single(id)
      article.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      // 分类选项
      let sort = await sortModels
        .whole()

      res.locals.article = article[0];
      res.locals.nav = 'article';
      res.locals.sort = sort
      res.render('manager/articleEdit',res.locals)

    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  text:async function(req,res,next){
    let id = req.params.id;
    try{
      let article = await articleModels
        .single(id)
      article.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      res.locals.article = article[0];
      res.render('index/singlePage',res.locals)
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  insert: async function(req,res,next){
    let title =req.body.title;
    let sort_id = req.body.sort_id;
    let text =req.body.text;
    if( !title || !sort_id || !text){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await articleModels.insert({title,sort_id,text})
      res.json({
        code:200,
        message:'添加成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  edit: async function(req,res,next){
    let id =req.params.id;
    let title =req.body.title;
    let sort_id = req.body.sort_id;
    let text =req.body.text;
    if( !title || !sort_id || !text){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await articleModels.update(id,{title,sort_id,text})
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  delete:async function(req,res,next){
    let id =req.params.id;
    try{
      await articleModels.deleted(id)
      res.json({
        code:200,
        message:'删除成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  create:async function(req,res,next){
    let sort = await sortModels
      .whole()
    res.locals.sortName = sort;
    res.locals.nav = 'article';
    res.render('manager/articleCreate',res.locals)
  }
}

module.exports = articleController