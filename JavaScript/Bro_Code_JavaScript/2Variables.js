// Variables = A container that stores a value

// 1. declaration     let x;
// 2. assignment      x = 100;

// Number
let x;
x = 100;

let y = 200;

let age = 28;
let price = 19.99;


console.log(typeof x);
console.log(x);
console.log(y);
console.log(age);
console.log(price);
console.log(`you are ${age} years old`);
console.log(`The price is $${price} only`)

//Strings

let firstname = "Bro";
let FavFood = "Pizza";


console.log(typeof firstname);
console.log(firstname);
console.log(`My Favorite Food is ${FavFood}`);

// Booleans - Either True or False
let online = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`);

// to Display in a web page

let Sfullname ="Bro Code";
let Sage = 28;
let Student = false;

document.getElementById("p1").textContent = Sfullname;
document.getElementById("p2").textContent = `Your are ${Sage} years old`;
document.getElementById("p3").textContent = Student;


