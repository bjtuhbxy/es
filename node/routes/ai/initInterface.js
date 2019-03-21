var express = require('express');
var fs = require("fs")
var join = require('path').join;
var router = express.Router();;
// 数据库模块
var mysql = require('mysql');
const db = require('../../bin/db');
var pool = mysql.createPool(db.mysql);
var tables = [];
// 查询数据库中指定表的所有字段
// select COLUMN_NAME from information_schema.COLUMNS where table_name = 'users' and table_schema = 'yd';
router.get('/', function(req, res, next) {
    // 读取数据库
    new Promise(function(resolve, reject) {
        var sql = 'SHOW TABLES';
        // 从连接池获取连接
        pool.getConnection(function(err, connection) {
            console.log(connection);
            connection.query(sql, function(err, rows, fields) {
                if (err) throw err;
                var rows = JSON.stringify(rows);
                var rows = JSON.parse(rows);
                connection.release();
                resolve(rows)
            });
        });
    }).then(function(rows) {
        for (var i = 0; i < rows.length; i++) {
            for (var item in rows[i]) {
              tables.push(rows[i][item]);
            }
        }
        res.send(tables)
    });
    // 同步读取
    var data = fs.readFileSync('./routes/template.js');
    for (var i = 0; i < 5; i++) {
        fs.writeFileSync('./routes/auto/tmp' + i + '.js', data + '\ntpl();', function(err) {
            if (err) {
                return console.error(err);
            }
        });
    }
})
module.exports = router;
