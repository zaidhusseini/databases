var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = function(query){

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
    if(err) {console.log('here is the error',err);}
    console.log('these are the results',results[0].name);
    console.log('here is the query string', queryString);
  });

  dbConnection.end();

};

