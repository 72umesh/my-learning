// Array = a variable like structure that can hold 
//         more than one value

let fruits = ["apple", "orange", "banana"];
//fruits[0] = "coconut";

// push element to the end i.e add element to the end
//fruits.push("coconut");

// remove the last element
//fruits.pop();

// add element to the beginning
//fruits.unshift("mango");

// remove element from begining
//fruits.shift();

/*
let numOffruits = fruits.length;
let index = fruits.indexOf("guava")


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(numOffruits);
console.log(index);
*/

/*for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/

// print array in reverse
/*for(i=fruits.length-1 ; i>=0; i--){
    console.log(fruits[i]);
}*/
// to sort an array
//fruits.sort();

// to reverse sort use
// Enchanced for loop or shortcut to display elements of array
for(let fruit of fruits){
    console.log(fruit);
}
