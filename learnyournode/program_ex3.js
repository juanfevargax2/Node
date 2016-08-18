var fs = require('fs')
function countLines(err,data)
{
    var lines =  data.split('\n').length;
    console.log(lines-1)
};
fs.readFile(process.argv[2],'utf8',countLines);