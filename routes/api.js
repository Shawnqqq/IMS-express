var express = require('express');
var router = express.Router();

const managerController = require('./../controllers/manager')

router.get('/manager',managerController.show)

module.exports = router;
