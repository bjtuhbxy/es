var express = require('express');
var fs = require("fs")
var join = require('path').join;
var router = express.Router();;
// 数据库模块
var mysql = require('mysql');
const db = require('../../bin/db');
var pool = mysql.createPool(db.mysql);
// 查询数据库中指定表的所有字段
// select COLUMN_NAME from information_schema.COLUMNS where table_name = 'users' and table_schema = 'yd';
router.get('/', function(req, res, next) {
    var dbObj = [];
    // 读取数据库
    new Promise(function(resolve, reject) {
        var sql = 'SHOW TABLES';
        // 从连接池获取连接
        pool.getConnection(function(err, connection) {
            connection.query(sql, function(err, rows, fields) {
                if (err) throw err;
                var rows = JSON.stringify(rows);
                var rows = JSON.parse(rows);

                function getKeyWord(i, n) {
                    if (i < n) {
                        for (var item in rows[i]) {
                            var table = rows[i][item];
                            var sql = 'select COLUMN_NAME from information_schema.COLUMNS where table_name = "' + table + '" and table_schema = "yd"';
                            connection.query(sql, function(err, rows, fields) {
                                if (err) throw err;
                                var rows = JSON.stringify(rows);
                                var rows = JSON.parse(rows);
                                var key = [];
                                for (var item2 in rows) {
                                    console.log(rows[item2].COLUMN_NAME);
                                    key.push(rows[item2].COLUMN_NAME);
                                }
                                dbObj.push({
                                    [table]: key
                                });
                                getKeyWord(i + 1, n);
                            });
                        }
                    } else {
                        resolve(dbObj);
                    }
                }
                getKeyWord(0, rows.length);
            });
        });
    }).then(function(dbObj) {
        // 同步读取
        var data = fs.readFileSync('./routes/template.js');
        for (var i = 0; i < dbObj.length; i++) {
            fs.writeFileSync('./routes/auto/tmp' + i + '.js', data + '\ntpl();', function(err) {
                if (err) {
                    return console.error(err);
                }
            });
        }
        res.send(dbObj)
    });
})
module.exports = router;
