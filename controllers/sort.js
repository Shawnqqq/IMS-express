const sortModels = require('./../models/sortModels')
const {formatTime} = require('../utils/formatDate');

const sortControllers = {
  show: async function(req,res,next){
    try{
      let sort = await sortModels.whole();

      res.locals.sort = sort;
      res.locals.nav = 'sort';
      res.render('manager/sort',res.locals)
    }catch(err){
      res.locals.error = err;
      res.render('error',res.locals);
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    if( !name ){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await sortModels.insert({name})
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
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let sort = await sortModels.single(id);
      
      res.locals.sort = sort[0];
      res.locals.nav = 'sort';
      res.render('manager/sortEdit',res.locals)
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  jump:async function(req,res,next){
    let id =req.params.id;
    try{
      let sort = await sortModels
        .where({'sort.id':id})
        .leftJoin('article','sort.id','article.sort_id')
        .column('article.id','article.title','article.created_time')
        sort.forEach(data =>{
          data.created_time = formatTime(data.created_time)
        })
      res.locals.sort = sort;
      res.render('index/jumpPage',res.locals)
    }catch(err){
      console.log(err)
      res.json({
        code:0,
      })
    }
  },
  edit: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    if(!name){
      res.json({
        code:0,
        message:'缺少参数'
      })
    }
    try{
      await sortModels.update(id,{name})
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
      await sortModels.deleted(id)
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
  create: async function(req,res,next){
    res.locals.nav = 'sort';
    res.render('manager/sortCreate');
  }
}


module.exports = sortControllers