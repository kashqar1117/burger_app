const express = require('express');
const db = require('./models');
const PORT = 3000;
const routes  = require('./routes/api-routes.js');

const app = express();


app.use(express.urlencoded({ extended:true}));
app.use(express.static('public'));
app.use(express.json());
app.use(routes);
