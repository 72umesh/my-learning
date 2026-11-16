//    = assignment operator
//   == comparison operator (compare if values are equal)
//  === strict equality operator (compare if values and datatypes are equal)
//   != inequality operator
//  !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){// compare only values
    console.log("It is a PI");
}
else{
    console.log("It is not PI");
}
// ---------------------------------------------------------
if(PI === "3.14"){ // compare value and datatype
    console.log("It is a PI");
}
else{
    console.log("It is not PI");
}
// ---------------------------------------------------------
if(PI != "3.14"){// compare only values
    console.log("It is not PI");
}
else{
    console.log("It is  PI");
}
// ----------------------------------------------------------
if(PI !== "3.14"){ // compare value and datatype
    console.log("It is not PI");
}
else{
    console.log("It is  PI");
}