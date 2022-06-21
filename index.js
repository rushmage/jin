const http = require('http');

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('test');
}).listen(24969);
////test
////111