var fs = require('fs');
var dirName = process.argv[2];
var extension = process.argv[3];
function getExtesion(filename)
{
	var ext = filename.split('.').pop();
    return ext==filename?'':ext;
}
function printIfExtension(file)
{	
	if(getExtesion(file)==extension)
	{
		console.log(file);
	}
}
function printFiles(err,list)
{	
	list.forEach(printIfExtension);
};
fs.readdir(dirName,printFiles);