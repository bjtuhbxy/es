var express = require('express');
var fs = require("fs")
var router = express.Router();

router.get('/', function(req, res, next) {
    // 同步读取
    var data = fs.readFileSync('/Users/apple/yd/es/node/routes/template.js');
    for (var i = 0; i < 5; i++) {
      fs.writeFileSync('/Users/apple/yd/es/node/routes/tmp'+i+'.js', data, function(err) {
          if (err) {
              return console.error(err);
          }
      });
    }
    res.send("数据写入成功！");
})

module.exports = router;
