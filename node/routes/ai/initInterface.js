var express = require('express');
var fs = require("fs")
var join = require('path').join;
var router = express.Router();
var yd = require('../../public/yd.js');
router.get('/', function(req, res, next) {
    res.send('接口初始化成功');
})
module.exports = router;
