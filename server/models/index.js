var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      //console.log('here is the url',req.url);
    }, // a function which produces all the messages
    post: function (req) {

      console.log('invoking post from models', req.body);
      
    // a function which can be used to insert a message into the database
    },
  },
  users: {
    // Ditto as above.
    get: function () {},
    post: function (req) {
      var username = req.body.username;
      var query = `select name from users where name='zaid'`;
      //var query = `INSERT INTO users VALUES(2, \'${username}\');`;
      db(query);

    }
  }
};

