// variable scope = where a variable is recognized 
//                  and accessible (local vs global)

// function can't see inside another function
// local = variable declare inside a function or block
// global =  variable declare outside a function

// For easy understanding think of a house 


let x = 4;
function1();

function function1(){
    console.log(x);
}
function function2(){
    console.log(x);
}

let y = 4;
function3();
function1();

function function3(){
    let y= 5;
    console.log(y);
}
function function4(){
    let y= 7;
    console.log(y);
}