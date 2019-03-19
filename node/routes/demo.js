var express = require('express');
var router = express.Router();
var yd = require('../public/yd.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('您当前所在的位置是：' + req.path);
});
router.get('/json', function(req, res, next) {
  yd.dbc((connection)=>{
    return new Promise(function(resolve, reject) {
      connection.query('SELECT * from users', function (err, rows, fields) {
        if (err) throw err
        var rows = JSON.stringify(rows);
        var rows = JSON.parse(rows)
        resolve(rows);
      })
    });
  }).then(function (rows) {
    res.send(rows);
  })
})

module.exports = router;
