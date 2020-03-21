var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "database-1.c1lfgpbv3p0o.ap-south-1.rds.amazonaws.com",
  user     : "admin",
  password : "Bhavesh1997",
  port : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();