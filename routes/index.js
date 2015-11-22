var express = require('express');
var router = express.Router();
var Convert = require('../core/newConvert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        state: Convert.state});
});

module.exports = router;
