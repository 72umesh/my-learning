// string slicing = creating a substring from a
//                  portion of another string

//    string (start, end) ending index is exclusive 
//                               which means it does not include the ending index

const fullName ="Bro Code";

// let firstName1 = fullName.slice(0, 2);
// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);
// firstChar = fullName.slice(0, 1);
// lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1); // +1  to remove space in output

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

let email = "Abc123@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);


console.log(userName);
console.log(extension);