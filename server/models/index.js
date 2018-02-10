var db = require('../db');

module.exports = {
  messages: {
    get: function (req,res) {
      var messageQuery = `select message, username, roomname, id, created_at from messages;`;
      var onEnd = function(data){
        res.end(JSON.stringify(data));
      };
      db(messageQuery, onEnd);
      

     
     
    }, // a function which produces all the messages
    post: function (req,res) {
      var roomname = req.body.roomname;
      var username = req.body.username;
      var text = req.body.message;
    
      var messageQuery = `INSERT INTO messages (message,username,roomname) VALUES("${text}",\'${username}\',\'${roomname}\');`;
    
      db(messageQuery);  
      res.end();
    },
  },
  users: {
    // Ditto as above.
    get: function (req,res) {
    },
    post: function (req, res) {
      var username = req.body.username;
      var query = `INSERT INTO users (name) VALUES(\'${username}\');`;
      db(query);
      res.end();
    }
  }
};

