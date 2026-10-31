const fs = require('fs');

console.log("start");
fs.readFile("./nodejs/day1/text.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log("end");
