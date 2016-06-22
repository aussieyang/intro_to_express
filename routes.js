var express = require('express');

var router = express.Router();

// Set router as middleware
var router = express.Router();

// Show index,ejs on route '/'
router.get('/', function(request, response) {
  response.render('index');
});

module.exports = {
  router: router,
};
