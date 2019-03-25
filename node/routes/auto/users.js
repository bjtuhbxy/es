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
    router.post('/post', function(req, res, next) {
        var body=[];
        for (var i = 0; i < keyword.length; i++) {
            if (req.body[keyword[i]]) {
                body.push(req.body[keyword[i]]);
            }else {
                body.push('');
            }
        }
        var v = JSON.stringify(body).replace(/\[/,'').replace(/\]/,'');
        // var sql = 'INSERT INTO ' + table + ' (' + keyword.join(',') + ') VALUES ("user", "18", "男", "18812341234");';
        var sql = 'INSERT INTO ' + table + ' (' + keyword.join(',') + ') VALUES ('+v+');';
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
    router.post('/put', function(req, res, next) {
        var body=[];
        for (var i = 0; i < keyword.length; i++) {
            if (req.body[keyword[i]]) {
                body.push(keyword[i]+'="'+req.body[keyword[i]]+'"');
            }else {
            }
        }
        var v = body.join(',');
        var sql = 'UPDATE ' + table + ' SET '+ v +' WHERE id=' + req.body.id + ';';
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

tpl({"name":"users","keys":["name","age","sex","tel"]});