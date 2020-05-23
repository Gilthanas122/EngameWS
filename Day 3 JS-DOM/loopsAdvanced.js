//WHILE LOOP - when you do not know how many times you wish to iterate

let counter = 9;
let counter2 = 9;
while(counter2 < counter){
    // do this until the condition is true
    console.log("Still in the while loop and the counter2 is " + counter2);
    counter2++;
}

//DO WHILE LOOP - Execute at least once
do{
    console.log("Still in the while loop and the counter2 is " + counter2);
    counter2++;
}while(counter2 < counter);


//NESTED FOR LOOP - HARD PART
let number = 3;
//i is hour in the clock the j is the minute
/* for (let i = 0; i < number; i++) {
    console.log("START OF THE OUTER LOOP. VALUE OF I IS " + i);
    for (let j = 0; j <= i; j++) {
    console.log("START OF THE INNER LOOP. VALUE OF J IS " + j + "THE VALUE OF I IS " + i);
    }
    console.log("END OF THE OUTER LOOP. VALUE OF I IS STILL THE SAME " + i );
    console.log();
} */

let lineCount = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i = 0; i < lineCount ; i++) {
    let line = "";
    for (let j = 0; j <=i ; j++) {
        line +="*";
    }
    console.log(line);
}


