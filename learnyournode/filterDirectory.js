var fs = require('fs');
var path = require('path');
function filterExtension(list,extension)
{
	return list.filter(function(elem){
		return path.extname(elem) == '.'+extension;
	});
}
module.exports =  function(directory,extension,callback)
{
	fs.readdir(directory,function(err,list){
		if(err)
		return callback(err);
	    return callback(null,filterExtension(list,extension));		
	});

}

