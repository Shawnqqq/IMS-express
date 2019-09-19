const managerModels = require('./../models/managerModels')

const managerController  = {
  show: async function(req,res,next){
    try{
      let manager = await managerModels.all();
      res.locals.manager = manager;
      res.locals.nav = 'staff';
      res.render('manager/staff',res.locals)
    }catch(err){
      res.locals.error = err;
      res.render('error',res.locals);
    }
  },
  showData: async function(req,res,next){
    try{
      let manager = await managerModels.all();
      res.json({
        code:200,
        data:manager
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"出错了"
      })
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let manager = await managerModels.single(id);
      res.locals.manager = manager[0];
      res.locals.nav = 'staff';
      res.render('manager/staffEdit',res.locals)
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  },
  singleData: async function(req,res,next){
    let id = req.params.id;
    try{
      let manager = await managerModels.single(id);
      res.json({
        code:200,
        data:manager
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
    let phone =req.body.phone;
    let password =req.body.password;
    if( !name || !phone || !password){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await managerModels.insert({name,phone,password})
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
    let name = req.body.name;
    let phone =req.body.phone;
    let password =req.body.password;
    if( !name || !phone || !password){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await managerModels.update(id,{name,phone,password})
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
    let isdeleted = 1;
    try{
      await managerModels.update(id,{isdeleted})
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
    res.locals.nav = 'staff';
    res.render('manager/staffCreate');
  }
}

module.exports = managerController