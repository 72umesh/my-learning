// How to accept User Input

//Easy Way = window Prompt
/*let username;

username = window.prompt("Whats your name");
console.log(username);

*/
// Professional Way = HTML Box
let username1;

document.getElementById("submit").onclick = function(){
    username1 = document.getElementById("text").value;
    document.getElementById("h1").textContent = `Hello ${username1}`;
}