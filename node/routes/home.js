var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const db = require('../bin/db');
var pool = mysql.createPool(db.mysql);
// 查询数据接口
router.get('/getList', function(req, res, next) {
    var sql = 'SHOW TABLES;';
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            var rows = JSON.stringify(rows);
            var rows = JSON.parse(rows);
            var array = [];
            for (var i = 0; i < rows.length; i++) {
              for (var item in rows[i]) {
                array.push(rows[i][item]);
              }
            }
            res.send(array)
            connection.release();
        });
    });
});
module.exports = router;
