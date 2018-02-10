DROP DATABASE chat;
CREATE DATABASE chat;


USE chat;

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(20)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) UNIQUE
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  message VARCHAR(100), 
  username VARCHAR(20), 
  roomname VARCHAR(20), 
  user_id INTEGER, 
  room_id INTEGER, 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
      mysql -u student < schema.sql
 *  to create the database and the tables.*/

