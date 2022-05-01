const mysql = require ('mysql2');
const inquirer = require('inquirer');
const fs = require("fs")
//const api = require('./routes/index.js');


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // MySQL password
    password: 'Password123!',
    database: 'employeedatabase' // add database
  });


