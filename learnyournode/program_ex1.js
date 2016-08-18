var sum=process.argv.reduce(function(tot,elem,index){
    return index>1?parseInt(elem)+tot:0;
},0);
console.log(sum);