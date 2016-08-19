var map = require('through2-map');
var http = require('http');
var port = process.argv[2];
var server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
  	if (req.method != 'POST')
       return res.end('send me a POST\n')
       return chunk.toString().toUpperCase();
     })).pipe(res);
})
server.listen(port);
