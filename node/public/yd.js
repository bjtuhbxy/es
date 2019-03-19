var yd = {};
yd.dbc = function (cb) {
  return new Promise(function(resolve, reject) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'yd'
    });
    connection.connect();
    cb(connection).then(function (rows) {
      connection.end();
      resolve(rows);
    }).catch(function(){
      connection.end()
    });
  });
}

module.exports = yd;
