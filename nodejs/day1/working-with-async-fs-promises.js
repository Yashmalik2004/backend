const fs = require('fs/promises');


console.log("start");

(async () => {
  const res = await fs.readFile("./nodejs/day1/text.txt","utf-8");
  console.log(res);
})();

console.log("end");