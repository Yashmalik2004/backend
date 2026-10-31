const obj = {
  name:"yash",
  age:22,
  course:"btech cse",
  university:"KR MANGALAM UNIVERSITY"
}

// console.log(obj.name);
// for(i in obj){
//   console.log(i);
// }

console.log(typeof obj);

newObj = JSON.stringify(obj);
console.log(newObj);

const newobj2 = JSON.parse(newObj);
console.log(newobj2);