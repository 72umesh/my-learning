// while loop = repeat some code WHILE some condition is true

// repeats some code until some condition is no longer true
// let username = "";

// while(username === "" || username === null){
//     username = window.prompt("Enter your name");
    
// }
// console.log(`Hello ${username}`);

// another variation id Do While
// let username1;
// do{
//   username1 = window.prompt("Enter your name") ;
// }
// while(username1 === "" || username1 === null)
    
// console.log(`Hello ${username1}`);

// ---------------------------------------------------
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username == "myUsername" && password == "mypassword"){
        loggedIn = true;
        console.log("You are logged In")
    }
    else{
        console.log("Invalid credentials! Please try again");
    }

}