var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/add', function(req, res, next) {
  res.send('respond with a resource');
});
router.put('/data', function(req, res, next) {
  res.send('respond with a resource');
});
router.put('/day', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
