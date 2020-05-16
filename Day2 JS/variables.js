// var declaration - variable name - equal sign - value
let myName = "Pityu";

console.log("My name is " + myName);

// assign a number 

let myAge = 34;
console.log("My age is " + myAge);

//reassign value to a variable

myAge = 44;
console.log("My new age in ten years will be " + myAge);

//Changing value of an integer

let myHeight = 190;

//Increase
//Version 1 - no very supported
myHeight = myHeight +1;

console.log("My height is " + myHeight);

// Version 2
myHeight += 1;
console.log("My height is " + myHeight);

let myWeight = 80;
myWeight *= 2;
console.log("My weight is " + myWeight);
myWeight /=4;
console.log("My weight is " + myWeight);


//Version 3 - only works if you wish increase/decrease by one

myHeight++;
console.log("MY newest height is " +myHeight);
myHeight--; //decreases it by one


// Typical you do no have to provide the dataType when creating a variable

let changeMyDataType = 35;
console.log("DataType is " + changeMyDataType);

//DANGER - DANGER
console.log(16 / changeMyDataType);

changeMyDataType = "Hello world"
console.log(16 / changeMyDataType);

// const you can give value only one time

const myConstAge = 34;


//DataType String (text) - number(int) - number(float) - boolean(false/true)

let myBooleanValue = true;
console.log("My boolean value is " + myBooleanValue);


//Console logging

let myNumber1 = 35;
let myNumber2 = 40;

console.log(myNumber1 + myNumber2);

//Handles both as Strings
console.log("The result of addition is " + myNumber2 + myNumber1);

//Gives back the result of addition
console.log("The result of addition is " + (myNumber2 + myNumber1));




