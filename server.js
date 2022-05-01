const mysql = require ('mysql2');
const inquirer = require('inquirer');
const fs = require("fs")
//const api = require('./routes/index.js');


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3002,
    user: 'root',
    // MySQL password
    password: 'Password123!',
    database: '' // add database
  });


const PORT = process.env.port || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

