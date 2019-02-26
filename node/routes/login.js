var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        token: 'token'
    })
})

module.exports = router;
