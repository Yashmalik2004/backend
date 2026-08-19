const {division,power} = require('./maths.js');

const calculateBMI = (obj) => {
  const {height,weight,name} =obj;
  const bmi = division(weight, power(height,2));
  setTimeout(() =>{console.log(`BMI of ${obj.name} is ${bmi}`)}, 1000);
};


module.exports = calculateBMI;
