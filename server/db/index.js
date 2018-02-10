var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = function(query, callback){

  var dbConnection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });
  dbConnection.connect();

  var tablename = "messages";

  var queryString = query;
  var queryArgs = [];

  dbConnection.query(queryString, (err, results)=> {
    if (!queryString.includes('INSERT')){
      callback(results);
    }
  });
};

