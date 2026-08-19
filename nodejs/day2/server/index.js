const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
  const log = `${Date.now()}: New req recieved\n`;
  fs.appendFile('log.txt',log, (err,data)=>{
    res.end("hello from my server");
  })
});


myServer.listen(3000,()=>{
  console.log(`server is running`);
});


