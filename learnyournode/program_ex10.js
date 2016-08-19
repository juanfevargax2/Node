var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filename = process.argv[3];
console.log(filename);
var server = http.createServer(function (req, res) {
  var readable = fs.createReadStream(filename);
  readable.pipe(res);
})
server.listen(port);
 