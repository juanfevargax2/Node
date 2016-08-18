var http = require('http');
var urls = [process.argv[2],process.argv[3],process.argv[4]];

function getAllContentHttp(url)
{
 return new Promise(function(resolve,reject)
{
  http.get(url,function(response)
  {  
    var totData = '';
    response.setEncoding('utf8');
    response.on("data", function(data){
    totData+=data
    });
    response.on("error",console.error);
    response.on("end", function(){
      console.log(totData);
      resolve(totData);
      });
  }).on("error", console.error);
});
}


getAllContentHttp(urls[0]).then(function(){
getAllContentHttp(urls[1]).then(function(){
getAllContentHttp(urls[2]); 
})
});
