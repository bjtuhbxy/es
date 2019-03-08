var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

// req.body解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var indexRouter = require('./routes/index');
var demoRouter = require('./routes/demo');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var templateRouter = require('./routes/template');
var aiRouter = require('./routes/ai');
// 创建数据库连接池
const db = require('./bin/db');
const sql = require('./bin/sql');

var pool = mysql.createPool(db.mysql);
// touken校验 jwt
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
//定义签名
const secret = 'salt';
//使用中间件验证token合法性
// app.use(expressJwt({
//     secret: secret
// }).unless({
//     path: ['/login'] //除了这些地址，其他的URL都需要验证
// }));
//拦截器
app.use(function(err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {
        //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
        res.status(401).send('invalid token...');
    }else {
      console.log('=============');
    }
});
//登录接口
app.post('/login', function(req, res) {

    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    var u = req.body.u;
    var p = req.body.p;
    //解密token
    // jwt.verify(token, secret, function (err, decoded) {
    //     if (!err){
    //           console.log(decoded.name);  //会输出123，如果过了60秒，则有错误。
    //      }
    // })

    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        // 建立连接 增加一个用户信息
        connection.query(sql.getUserById, [u], function(err, result) {
            if (err) {
              res.json({
                  msg:'用户不存在',
                  status:'2001',
                  data:{
                    // u:u
                  }
              })
              console.log('');
              throw err
            }
            console.log(result);
            var result = JSON.stringify(result);
            var result = JSON.parse(result);
            if (result.length > 0) {
              console.log(result);
              console.log(p);
              console.log(result[0].password);
              if (p == result[0].password) {
                //生成token
                const token = jwt.sign({
                    name: u
                }, secret, {
                    expiresIn: 60 //秒到期时间
                });
                res.json({
                    msg:'登录成功',
                    status:'2000',
                    data:{
                      u:u,
                      token:token,
                    }
                })
              }else {
                res.json({
                    msg:'密码错误',
                    status:'2001',
                    data:{
                      u:u
                    }
                })
              }
            } else {
                res.json({
                    msg:'用户不存在',
                    status:'2001',
                    data:{
                      // u:u
                    }
                })
            }
            connection.release();

        });
    });
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 路由分发
app.use('/index', indexRouter);
app.use('/', demoRouter);
app.use('/users', usersRouter);
// 登录
app.use('/login', loginRouter);
app.use('/t', templateRouter);
app.use('/ai', aiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
