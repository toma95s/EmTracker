const express = require('express');
const path = require('path');
const fs = require("fs")
//const api = require('./routes/index.js');

const PORT = process.env.port || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

