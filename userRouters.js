var express = require('express');

var userRouter = express.Router();

// Set router as middleware
var userRouter = express.Router();

// Show index,ejs on route '/'
userRouter.get('/', function(request, response) {
  var users = [{name: 'a'},{name: 'b'}];

  response.json(users);
});

module.exports = {
  userRouter: userRouter
};
