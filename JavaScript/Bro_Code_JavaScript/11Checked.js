// .checked = property that describes the checked state of an
//            HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPayBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are NOT Subscribed";
    }

    if(visaBtn.checked){
        cardResult.textContent = "You are Paying with Visa"
    }
    else if(masterCardBtn.checked){
        cardResult.textContent = "You are Paying with MasterCard"
    }
    else if(payPalBtn.checked){
        cardResult.textContent = "You are Paying with PayPal"
    }
    else{
        cardResult.textContent = "You must select a payment method"
    }

}