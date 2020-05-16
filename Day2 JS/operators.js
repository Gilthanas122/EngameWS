//Mathematical opators

// Remainder checking

let myFirstNumber = 3;
let mySecondnumber = 6;

console.log("The result of remainder is " + (myFirstNumber % mySecondnumber));


//Exponentation - hatvanyozas

console.log(2 ** 3);

//Comparison
/*if(condition){
    if(){

    }else{

    }
}else if(condition){
    do this here
}else{
    do this here if none of the above
}*/

if(myFirstNumber > mySecondnumber){
    console.log(myFirstNumber + " is bigger than " + mySecondnumber);
}else if(myFirstNumber === mySecondnumber) {
    console.log(mySecondnumber + " is equal to " + myFirstNumber);
}else{
    console.log(mySecondnumber + " is bigger than " + myFirstNumber);
}

// >= <= 

if(myFirstNumber >= mySecondnumber){
    console.log(myFirstNumber + " is bigger than or equal to " + mySecondnumber);
}else{
    console.log(mySecondnumber + " is bigger than " + myFirstNumber);
}

// check two conditions  && both sides should be true || only one condition should be true

if(myFirstNumber >= mySecondnumber && myFirstNumber % 5 === 0){
    console.log(myFirstNumber+ " is bigger or equal to " + mySecondnumber + " AND it is divideable by 5");
}else if(myFirstNumber >= mySecondnumber || myFirstNumber % 5 === 0){
    console.log(myFirstNumber+ " is bigger or equal to " + mySecondnumber + " OR it is divideable by 5");
}else{
    console.log(myFirstNumber + " is neither bigger than " + mySecondnumber + " nor is it divideable by 5");
}

//! reverts the outcome of the statement or equality

if(mySecondnumber >= myFirstNumber){
    console.log("They are not equal");
}else{
    console.log("They are equals to each other");
}

//type of

console.log(typeof "");
console.log(typeof 3.00);


