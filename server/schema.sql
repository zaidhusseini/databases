
CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT(10) NOT NULL PRIMARY KEY,
  room_name VARCHAR(20)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id INT(10) NOT NULL PRIMARY KEY,
  name VARCHAR(20)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(10) NOT NULL PRIMARY KEY, 
  message VARCHAR(100), 
  user_id INTEGER, 
  room_id INTEGER, 
  created_at DATE, 
  updated_at DATE, 
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

