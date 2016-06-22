var app = require('express')();
var server = require('http').Server(app);
var port = 3001;

var teststr = 'testing testing 123'

app.get('/', function(request, response) {
  console.log(teststr);
  response.send('<h1>Hello Express JS</h1>')
});

server.listen(port, function() {
  console.log('listening on port ' + port);
});
