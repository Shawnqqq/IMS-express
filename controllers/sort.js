const sortModels = require('./../models/sortModels')

const sortControllers = {
  show: async function(req,res,next){
    try{
      let sort = await sortModels.whole();
      res.json({
        code:200,
        data:sort
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
      res.json({
        code:200,
        data:sort
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
  }
}


module.exports = sortControllers