// Number Guessing Game

const min = 1;
const max = 100; 
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
// const answer = Math.floor(Math.random() * (max - min)) + min;
console.log(answer);

let attempts = 0;
let running = true;
let guess;

while(running){

    guess = window.prompt (`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
       window.alert("Please enter a valid Number")
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid Number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! Try Again");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! Try Again");
        }
        else{
            window.alert(`Correct! The Answer was ${answer}. It took you a ${attempts} attempts`);
            running = false;
        }
    }
}