const fs = require('fs');

// fs.writeFileSync("./nodejs/day1/text.json","{\"name\":\"Yash Malik\"}");
console.log("start");
const res = fs.readFileSync("./nodejs/day1/text.txt","hex");

console.log(res);
console.log("end");