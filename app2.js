// Alternative syntax to app1 - does the same thing; get used to both
var express = require('express');
var app = express();
var morgan = require('morgan');

// Requiring config
var config = require('./config.js')

// Requiring routers
var routers = require('./routes.js');

// Templating, just like Jade - setting place of views
app.set('views', './views');
app.set('view engine', 'ejs');

// // Log In function as middleware - can use external tool like Morgan
// app.use(function(request, response, next) {
//   // Passing strings in %s is a placeholder for request.method etc.
//   console.log('%s request %s from %s', request.method, request.path, request.ip);
//   next();
// });

// Using Morgan instead to Log In
app.use(morgan());

// See routers.js for routes - see
app.use('/', require('./routes.js').router);
app.use('/users', require('./userRouters.js').userRouter);


app.listen(config.port);
console.log('server started on ' + config.port);
