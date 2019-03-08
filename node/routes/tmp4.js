var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const db = require('../bin/db');
var pool = mysql.createPool(db.mysql);
var table = 'user';

// 查询数据接口
var get = '/get';
router.get(get, function(req, res, next) {
    var sql = 'SELECT * FROM '+table+';';
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            var rows = JSON.stringify(rows);
            var rows = JSON.parse(rows)
            res.send(rows)
            connection.release();
        });
    });
});
// 插入数据接口
var post = '/post';
router.get(post, function(req, res, next) {
    var sql = 'INSERT INTO '+table+' (name, password) VALUES ("user", "pwd");';
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            var rows = JSON.stringify(rows);
            var rows = JSON.parse(rows)
            res.send(rows)
            connection.release();
        });
    });
});
// 修改数据接口
var put = '/put';
router.get(put, function(req, res, next) {
    var sql = 'DELETE FROM '+table+' WHERE id=' + param.id + ';';
    // // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            var rows = JSON.stringify(rows);
            var rows = JSON.parse(rows)
            res.send(rows)
            connection.release();
        });
    });
});
// 删除数据接口
var del = '/del';
router.get(del, function(req, res, next) {
    var param = req.query || req.params;
    var id = param.id;
    var sql = 'DELETE FROM '+table+' WHERE ';
    if (id.indexOf('[') > -1) {
      id = JSON.parse(id);
        for (var i = 0; i < id.length; i++) {
            if (i != 0) {
                sql += '||id=' + id[i];
            } else {
                sql += 'id=' + id[i];
            }
        }
        sql += ';';
    } else {
        sel += 'id=' + param.id + ';';
    }
    console.log(sql);
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            var rows = JSON.stringify(rows);
            var rows = JSON.parse(rows)
            res.send(rows)
            connection.release();
        });
    });
});
module.exports = router;
