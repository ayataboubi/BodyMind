// var express = require('express');
// // var path = require('path');
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');
// //const http = require('http');
// // var createError = require('http-errors');



// // // // require('dotenv').config()
// //const {connecttoMongoDb} = require("./config/db")


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/userRouter');
// var osRouter = require('./routes/osRouter');
// // const { connecttoMongoDb } = require('./config/db');
// var app = express();

// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/os',osRouter);

// app.get("/",(req ,res)=>{
//   res.json({message :"bienvenue sur l'api express"});
// })
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json('error');
// });


// // const server = http.createServer(app)
// // server.listen(process.env.port,()=>{
// //    connecttoMongoDb()
// //   console.log("app is runing on port 5000")
  
// })
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
 


//start a new Express application
const app = express();

// connect to database
const PORT = 5000  
 

app.get('/', (req, res)=>{
     
    res.status(200);
    res.send("Welcome to root URL of Server");

});
 

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

 
require('./config/db');
var usersRouter = require('./routes/userRouter');
app.use('/users', usersRouter);

require ('./config/db');
var ProfilSanteRouter = require('./routes/ProfilSanteRouter');
app.use('/api/ProfilSante' , ProfilSanteRouter);

require ('./config/db');
var SommeilRouter = require('./routes/SommeilRouter');
app.use('/api/Sommeil' , SommeilRouter);

require ('./config/db');
var HydratationRouter = require ('./routes/HydratationRouter');
app.use('/api/Hydratation', HydratationRouter);

require('./config/db');
var ActiviteRouter = require ('./routes/ActiviteRouter');
app.use('/api/Activite', ActiviteRouter);

// require('./config/db');
// var BienEtreRouter = require('/routes/BienEtreRouter');
// app.use('/api/BienEtre',BienEtreRouter);

//PORT
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);




