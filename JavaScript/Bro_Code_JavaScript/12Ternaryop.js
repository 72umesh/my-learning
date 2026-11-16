
// Ternary operator = a shortcut to if() and else() statements
//                    Helps to assign a variable on a condition
//                    condition ? codeIfTrue : codeIfFalse;


let age =21;
let Message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(Message);

let time = 16;
let greeting = time <=12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let isStudent = false; // Boolean
let message = isStudent ? "You are a student" : "You are not a student";
console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >=100 ? 10 : 0 ;
console.log(`You get a ${discount}% Discount`);
console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100) }`);
