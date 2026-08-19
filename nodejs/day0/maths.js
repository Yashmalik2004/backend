const division = (a,b) => {
  if(b==0){
    throw new Error("Division by zero is not allowed");
  }
  else{
    return a/b;
  }
};

const power = (a,b) => {
  return Math.pow(a,b);
};

module.exports = {
  division: division,
  power: power,
};