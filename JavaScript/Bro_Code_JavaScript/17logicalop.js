// Logical Operators = used to combine or manipulate boolean values
//                   ( true or false)

//                   AND = && // +
//                   OR = ||  // *
//                   NOT = !

let temp = 30;
//AND
if(temp > 0 && temp <= 30){ 
    console.log("The Weather is Good");
}
else{
    console.log("The Weather is Bad");
}
//OR
if(temp < 0 || temp > 30){ // if any condition is true then it is true
    console.log("The Weather is Bad");
}
else{
    console.log("The Weather is Good");
}
// ---------------------------------------------------
const isSunny = false;

if(isSunny){
    console.log("It is sunny")
}
else{
    console.log("It is cloudy");''
}
//NOT
if(!isSunny){
    console.log("It is Cloudy")
}
else{
    console.log("It is Sunny");
}
