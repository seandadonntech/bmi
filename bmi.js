var prompt = require('prompt-sync')();

var age = parseInt(prompt("Enter your AGE: "));
var weight = parseFloat(prompt("Enter your weight in kg: "));
var height = parseFloat(prompt("Enter your height in meters: "));

function calculateBMI() {
    var bmi = weight / (height * height);
    return bmi;
}

var calculatedBMI = calculateBMI();
console.log("your AGE: " + age)
console.log("Your BMI is: " + calculatedBMI.toFixed(2));
