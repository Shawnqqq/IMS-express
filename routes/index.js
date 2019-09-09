var express = require('express');
var router = express.Router();

const managerController = require('./../controllers/manager')
const sortControllers = require('./../controllers/sort')
const articleController = require('./../controllers/article')
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index/homePage');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/manager/staff', managerController.show);
router.get('/manager/staffCreate', managerController.create);
router.get('/manager/staffEdit/:id', managerController.single);

router.get('/manager/sort',sortControllers.show);
router.get('/manager/sortCreate', sortControllers.create);
router.get('/manager/sortEdit/:id', sortControllers.single);

router.get('/manager/article',articleController.show);
router.get('/manager/articleCreate',articleController.create);
router.get('/manager/articleEdit/:id',articleController.single);

//首页
router.get('/index/:id',sortControllers.jump)
router.get('/index/article/:id',articleController.text)

module.exports = router;
