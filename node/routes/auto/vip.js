var tpl = function(o) {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');
    const db = require('../../bin/db');
    var pool = mysql.createPool(db.mysql);
    var table = o.name;
    var keyword = o.keys;
    // 查询数据接口
    router.get('/get', function(req, res, next) {
        var sql = 'SELECT * FROM ' + table + ';';
        // 从连接池获取连接
        pool.getConnection(function(err, connection) {
            connection.query(sql, function(err, rows, fields) {
                if (err) throw err;
                var rows = JSON.stringify(rows);
                var rows = JSON.parse(rows);
                res.send(rows)
                connection.release();
            });
        });
    });
    // 插入数据接口
    router.get('/post', function(req, res, next) {
        var sql = 'INSERT INTO ' + table + ' (' + keyword.join(',') + ') VALUES ("user", "18", "男", "18812341234");';
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
    router.get('/put', function(req, res, next) {
        var sql = 'DELETE FROM ' + table + ' WHERE id=' + param.id + ';';
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
    router.get('/del', function(req, res, next) {
        var param = req.query || req.params;
        var id = param.id;
        var sql = 'DELETE FROM ' + table + ' WHERE id=' + param.id + ';';
        // if (id.indexOf('[') > -1) {
        //   id = JSON.parse(id);
        //     for (var i = 0; i < id.length; i++) {
        //         if (i != 0) {
        //             sql += '||id=' + id[i];
        //         } else {
        //             sql += 'id=' + id[i];
        //         }
        //     }
        //     sql += ';';
        // } else {
        //     sql += 'id=' + param.id + ';';
        // }
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
}

tpl({"name":"vip","keys":["vip_name","age","sex","tel"]});