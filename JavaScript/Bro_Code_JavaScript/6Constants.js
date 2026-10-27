// Constants = A variable that can't be changed

const PI = 3.142;
let radius;
let circumference;


document.getElementById("Msubmit").onclick = function(){
    radius = document.getElementById("Text").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("H3").textContent = circumference + "cm";


}