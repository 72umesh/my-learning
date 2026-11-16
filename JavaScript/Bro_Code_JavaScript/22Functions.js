// function = A section of reuseable code.
//            Declare code once, use it whenever you want,
//            Call the function to execute the code 

/*
function happyBirthday(){
    console.log("Happy Birthday to You");
    console.log("Happy Birthday dear ");
}
happyBirthday();

function happyBirthday1(username,age){
    console.log("Happy Birthday to You");
    console.log(`Happy Birthday  ${username} `);
    console.log(`You are ${age} years old`);
}

happyBirthday1("BroCode", 25);
happyBirthday1("Neel", 23);
*/
/*
function add(x,y){
    let result = x+y;
    return result; // or return x+y
}
let number = add(4,5);
console.log(number); // or consol.log(add(4,5));

function subtract(x,y){
    return x-y;
}
console.log(subtract(5,7));
*/

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(10));

//using ternary operator
function isOdd(number){
    return number % 2 != 0 ? true : false;
}
console.log(isOdd(18));

function isEmailValid(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

    // or use email.includes("@") ? true : false;
}
console.log(isEmailValid("abc@gmail"));
console.log(isEmailValid("abc12gmail"));