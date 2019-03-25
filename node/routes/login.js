var express = require('express');
var router = express.Router();

//登录接口
router.post('/', function(req, res) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    var u = req.body.u;
    var p = req.body.p;
})

module.exports = router;
