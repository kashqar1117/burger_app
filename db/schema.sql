DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE DATABASE burgers_db;



CREATE TABLE burgers(

id INT NOT NULL AUTO_INCREMENT, 
    burgerName VARCHAR(30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);





