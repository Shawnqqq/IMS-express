const managerModels = require('./../models/managerModels')

const managerController  = {
  show: async function(req,res,next){
    try{
      const manager = await managerModels.all();
      console.log(manager)
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'出错了'
      })
    }
  }
}

module.exports = managerController