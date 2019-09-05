var express = require('express');
var router = express.Router();

const managerController = require('./../controllers/manager')
const sortControllers = require('./../controllers/sort')
const articleController = require('./../controllers/article')

// 管理员接口
router.get('/manager',managerController.show)
router.get('/manager/:id',managerController.single)
router.post('/manager',managerController.insert)
router.put('/manager/:id',managerController.edit)
router.delete('/manager/:id',managerController.delete)  //软删除

// 分类接口
router.get('/sort',sortControllers.show)
router.get('/sort/:id',sortControllers.single)
router.post('/sort',sortControllers.insert)
router.put('/sort/:id',sortControllers.edit)
router.delete('/sort/:id',sortControllers.delete)

//文章接口
router.get('/article',articleController.show)
router.get('/article/:id',articleController.single)
router.post('/article',articleController.insert)
router.put('/article/:id',articleController.edit)
router.delete('/article/:id',articleController.delete)

module.exports = router;
