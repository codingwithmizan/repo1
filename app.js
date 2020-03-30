const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// Models
const models = require('./models')


// sync Database
models.sequelize.sync().then(()=> console.log('Nice! Database looks fine'))
                .catch(err => console.log(err, "Something went wrong with Database Update"));


// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Require our routes into the application

require('./routes')(app);
app.get('*', (req, res)=>res.status(200).send({
  message:'Welcome to the begining of nothingness'
}));
module.exports = app;
