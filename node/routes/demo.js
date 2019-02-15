var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('您当前所在的位置是：' + req.path);
});
router.get('/json', function(req, res, next) {
  res.send({
    name:'张伟',
    age:'27',
    sex:'男',
    school:'北京交通大学'
  });
});
router.get('/sql', function(req, res, next) {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'zyd'
  });

  connection.connect()

  connection.query('SELECT * from users', function (err, rows, fields) {
    if (err) throw err
    var rows = JSON.stringify(rows);
    var rows = JSON.parse(rows)
    res.send(rows)
  })

  connection.end()

});

module.exports = router;
