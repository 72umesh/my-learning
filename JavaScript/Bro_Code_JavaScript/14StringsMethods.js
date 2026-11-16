// string methods = allow you to manipulate and work with text (strings)

let userName= "  BroCode";

console.log(userName.charAt(0)); // find character with index no
console.log(userName.indexOf("o")); // index of first occurence
console.log(userName.lastIndexOf("o"));
console.log(userName.length); // Length of a string

userName = userName.trim(); // trim white spaces
console.log(userName);

userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(4);
console.log(userName);

//--------------------------------------------

let userName1 = " Me sh"
let result1 = userName1.startsWith(" ");
let result2 = userName1.endsWith(" ");
let result3 = userName1.includes(" ");
if(result1){
    console.log("Your username can't begin with blank spaces");
}
else{
    console.log(userName1);
}

if(result2){
    console.log("Your username can't end with blank spaces");
}
else{
    console.log(userName1);
}

if(result3){
    console.log("Your username should not include blank spaces");
}
else{
    console.log(userName1);
}

let phoneNumber ="123-456-789";

phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);