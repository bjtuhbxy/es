var express = require('express');
var fs = require("fs")
var join = require('path').join;
var router = express.Router();
var yd = require('../../public/yd.js');
router.get('/', function(req, res, next) {
    // step1:获取数据库模板
    let [jsonFiles, filesArray] = [
        [],
        []
    ];

    function findJsonFile(path) {
        let files = fs.readdirSync(path);
        files.forEach(function(item, index) {
            let fPath = join(path, item);
            let stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) {
                jsonFiles.push(fPath);
                let file = fPath.split('/').pop().split('.').shift();
                filesArray.push({
                    [file]: require('../../public/db/' + file + '.js')
                });
            }
        });
    }
    findJsonFile('./public/db');

    function getWord(obj) {
        let kv = {
            nullF: function(p) {
                if (!p) {
                    return ' NOT NULL';
                } else {
                    return '';
                }
            },
            typeF: function(p) {
                return ' ' + p;
            },
            lengthF: function(p) {
                if (p) {
                    return ' NOT NULL';
                } else {
                    return '';
                }
            },
            autoF: function(p) {
                if (p) {
                    return ' AUTO_INCREMENT';
                } else {
                    return '';
                }
            },
            keyF: function(p) {
                if (p) {
                    return ' NOT NULL';
                } else {
                    return '';
                }
            }
        };
        let word = [];
        for (var item in obj) {
            let w = '`' + item + '`';
            for (var it in obj[item]) {
                w += kv[it + 'F'](obj[item][it]);
            }
            word.push(w);
        }
        return word.join(',');
    }
    // step2：根据数据库模板生成建表语句
    let sqls = [];
    for (var i = 0; i < filesArray.length; i++) {
        // 解析建表语句
        for (let item in filesArray[i]) {
            let sql = 'CREATE TABLE IF NOT EXISTS `' + item + '`(' + getWord(filesArray[i][item]) + ',PRIMARY KEY ( `id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;';
            createTanle(sql);
            sqls.push(sql);
        }
    }
    let count = 0;

    function createTanle(sql) {
        yd.dbc((connection) => {
            return new Promise(function(resolve, reject) {
                connection.query(sql, function(err, rows, fields) {
                    if (err) throw err
                    var rows = JSON.stringify(rows);
                    var rows = JSON.parse(rows)
                    resolve(rows);
                })
            });
        }).then(function(rows) {
            count++;
            if (filesArray.length == count) {
                res.send('执行成功')
            }
        })
    }
})

module.exports = router;
