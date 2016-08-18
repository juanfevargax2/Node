var dirName = process.argv[2];
var extension = process.argv[3];
var filterDirectory = require('./filterDirectory.js');


function printFiles(err,list)
{
	if(err)
	{
		console.log(err);
	}
	else
	{
		list.forEach(function(elm)
			{
				console.log(elm);
			});
	}
}

filterDirectory(dirName,extension,printFiles);
