// IF STATEMENTS = if a condition is true, execute code
//                 if not, do something else
/*
1. if else
2. Nested if else
3. Else if
*/


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = "You are too old to enter";
    }
    else if(age==0){
        result.textContent = "You are just born";
    }
    else if(age >= 21){
        result.textContent = "You can enter";
    }
    else if(age<0){
        result.textContent = "Your age can't be below 0";
    }
    else{
        result.textContent = "You can't enter";
    }    
}
/*
if(age >= 100){
    console.log("You are too old to enter");
}
else if(age==0){
    console.log("You are just born");
}
else if(age >= 21){
    console.log("You can enter");
}
else if(age<0){
    console.log("Your age can't be below 0");
}
else{
    console.log("You can't enter");
}
*/
