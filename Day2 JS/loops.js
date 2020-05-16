// For loop

// for(START, STOP, STEP)
for (let i = 5; i <= 10; i++) {
    console.log("The value of i is " + i);
}

// Decrease
console.log("---------------------------------")
for (let i = 10; i >= 0; i--) {
    console.log("The value of i is " + i);
}

// infinite loop, never stops
/*console.log("---------------------------------")
for (let i = 9; i <10; i--) {
    console.log("The value of i is " + i);
}*/

//change the STEP
console.log("---------------------------------")
for (let i = 10; i >= 0; i-=2) {
    if(i === 6){
        continue;
    }
    console.log("The value of i is " + i);
}


