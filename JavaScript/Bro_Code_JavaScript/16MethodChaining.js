// Method Chaining = Calling one method after another
//                   in one continous line of code

let username = window.prompt("Enter the User Name");
console.log(username);

// ----------- NO METHOD CHAINING --------------

/*
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
username = firstLetter + extraChar;
console.log(username);
*/

// ----------- METHOD CHAINING --------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);