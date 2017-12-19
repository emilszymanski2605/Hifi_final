const mysql = require('mysql2'); // mysql

module.exports = {
   connect: function () {
      return mysql.createConnection({
         host: '188.226.173.183',
         user: 'root',
         password: 'emilemil1362',
         database: 'hifi'
      })
   }
}