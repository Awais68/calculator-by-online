// #! /usr/bin/env node 
// //SHABANG # SHA -BANG LINE MUST BE AT THE TOP OF EACH FILE IN THIS DIRECTORY.

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "Subtraction", "Multiplication", "Division"],
  },
  ]);

  
// // conditional statement
if (asnwer.operator ===  "addition") {
  console.log(asnwer.firstNumber  + asnwer.secondNumber);
} else if (asnwer.operator === "Subtraction") { 
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator === "Multiplication"){
  console.log(asnwer.firstNumber * asnwer.secondNumber) ;   
  }
  else if (asnwer.operator === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
  } else{
    console.log("Please select valid operator")
  }
    
  console.log("THe End")
