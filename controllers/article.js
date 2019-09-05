const articleModels = require('./../models/articleModels');
const {formatTime} = require('../utils/formatDate');

const articleController = {
  show: async function(req,res,next){
    try{
      let article = await articleModels.whole();
      article.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      res.json({
        code:200,
        data:article
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let article = await articleModels.single(id);
      res.json({
        code:200,
        data:article
      })
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
  }
}

module.exports = articleController