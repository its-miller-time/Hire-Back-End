var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const employersRouter = require('./routes/employers')
const candidatesRouter = require('./routes/candidates')


var app = express();
//helmet
app.use(helmet())

//CORS proxys
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employers', employersRouter);
app.use('/candidates', candidatesRouter);


module.exports = app;
