var http = require('http');
var url = process.argv[2];

http.get(url,function(response){  
  var totData = '';
  response.setEncoding('utf8');
  response.on("data", function(data){
  	totData+=data
  });
  response.on("error",console.error);
  response.on("end", function(){
  	console.log(totData.length);
  	console.log(totData);
  });
}).on("error", console.error);
