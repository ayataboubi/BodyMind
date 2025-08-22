var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const http = require('http')
// require('dotenv').config()
// const {connecttoMongoDb} = require("./config/db")


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRouter');
var osRouter = require('./routes/osRouter');
const { connecttoMongoDb } = require('./config/db');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);node 
app.use('/os',osRouter);

app.get("/",(req ,res)=>{
  res.json({message :"bienvenue sur l'api express"});
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});


const server = http.createServer(app)
server.listen(process.env.port,()=>{
   connecttoMongoDb()
  console.log("app is runing on port 5000")
  
})
