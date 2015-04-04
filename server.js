var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('hello world');
}).listen(80, '104.131.122.35');

console.log('Server running at http://104.131.122.35');
