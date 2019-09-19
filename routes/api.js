var express = require('express');
var router = express.Router();

const managerController = require('./../controllers/manager')
const sortControllers = require('./../controllers/sort')
const articleController = require('./../controllers/article')

// 管理员接口
router.get('/manager',managerController.showData)
router.get('/manager/:id',managerController.singleData)
router.post('/manager',managerController.insert)
router.put('/manager/:id',managerController.edit)
router.delete('/manager/:id',managerController.delete)  //软删除

// 分类接口
router.get('/sort',sortControllers.showData)
router.get('/sort/:id',sortControllers.singleData)
router.post('/sort',sortControllers.insert)
router.put('/sort/:id',sortControllers.edit)
router.delete('/sort/:id',sortControllers.delete)

//文章接口
router.get('/article',articleController.showData)
router.get('/article/:id',articleController.singleData)
router.post('/article',articleController.insert)
router.put('/article/:id',articleController.edit)
router.delete('/article/:id',articleController.delete)

//目录
router.get('/index/:id',sortControllers.jumpData)
module.exports = router;
