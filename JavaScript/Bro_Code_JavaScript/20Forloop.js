// for loop = repeat some code a LIMITED amount of times

// Count Up
for(let i = 0; i<=2 ; i++){
    console.log("Hello");
}
for(let i = 2; i<=10 ; i+=2){ // increment by 2
    console.log(i);
}

// Count Down
for(let i = 10; i>0; i--){
    console.log(i);
}

// Skip and iteration use continue 
// use break to exit the loop entirely
for(let i = 1; i<=20 ; i++){
    if(i==13){
        continue;
    }
    else{
        console.log(i);
    }
}
