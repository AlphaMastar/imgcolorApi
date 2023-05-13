var express = require('express');
var router = express.Router();
var getImgColor = require('../controller/ImageProcess.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/imgcolor', function(req, res, next) {
  getImgColor.add(req, res, next);
});

module.exports = router;
