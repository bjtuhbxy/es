var express = require('express');
var fs = require("fs")
var join = require('path').join;
var router = express.Router();

router.get('/', function(req, res, next) {

    // 同步读取
    var data = fs.readFileSync('./template.js');
    for (var i = 0; i < 5; i++) {
      fs.writeFileSync('/Users/macmini/yd/es/node/routes/tmp'+i+'.js', data, function(err) {
          if (err) {
              return console.error(err);
          }
      });
    }
    res.send("数据写入成功！");
})
router.get('/db', function(req, res, next) {
      // step1:获取数据库模板
      let [jsonFiles,filesArray] = [[],[]];
      function findJsonFile(path){
          let files = fs.readdirSync(path);
          files.forEach(function (item, index) {
              let fPath = join(path,item);
              let stat = fs.statSync(fPath);
              if(stat.isDirectory() === true) {
                  findJsonFile(fPath);
              }
              if (stat.isFile() === true) {
                jsonFiles.push(fPath);
                let file = fPath.split('/').pop().split('.').shift();
                filesArray.push({
                  [file]:require('../public/db/users.js')
                });
              }
          });
      }
      findJsonFile('./public/db');
      function getWord(obj) {
        let kv = {
          nullF:function (p) {
            if (!p) {
              return ' NOT NULL';
            }else {
              return '';
            }
          },
          typeF:function (p) {
            return ' '+p;
          },
          lengthF:function (p) {
            if (p) {
              return ' NOT NULL';
            }else {
              return '';
            }
          },
          autoF:function (p) {
            if (p) {
              return ' AUTO_INCREMENT';
            }else {
              return '';
            }
          },
          keyF:function (p) {
            if (p) {
              return ' NOT NULL';
            }else {
              return '';
            }
          }
        };
        let word = [];
        for (var item in obj) {
          let w = '`'+item+'`';
          for (var it in obj[item]) {
            w += kv[it+'F'](obj[item][it]);
          }
          word.push(w);
        }
        return word.join(',');
      }
      // step2：根据数据库模板生成建表语句
      let sql = [];
      for (var i = 0; i < filesArray.length; i++) {
        // 解析建表语句
        for (let item in filesArray[i]) {
          sql.push('CREATE TABLE IF NOT EXISTS `'+ item +'`('+ getWord(filesArray[i][item]) +',PRIMARY KEY ( `id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;');
        }
      }
      res.send(sql);
})

module.exports = router;
