var http = require('http');

var server = new http.Server();

server.listen(8000, 'localhost');

var cont = 0;
server.on('request', function(req, res){
  res.end('hello World!' + ++cont);
});