//1. Print something to the console.
console.log("Hello World!");

//2. Showing an if statement
var firstNumber = 3;
var secondNumber = 0.5;

if ((firstNumber * secondNumber) > (firstNumber + secondNumber)) {
    console.log(firstNumber + " x " + secondNumber + " is greater than " + firstNumber + " + " + secondNumber);
}
else {
    console.log(firstNumber + " + " + secondNumber + " is greater than " + firstNumber + " x " + secondNumber);
}

//3. Showing a switch case
let firstName = "Evan";

switch (firstName) {
    case "John":
        console.log("John Has Been Added to the JS File");
        break;
    case "Cameron":
        console.log("Cam Has Been Added to the JS File");
    case "Evan":
        console.log("Evan Has Been Added to the JS File");
    default:
        console.log("No Known Name Has Been Added To the JS File");
}

//4. Show an example of an array
let rockBands = new Array("Foo Fighters", "Royal Blood", "Arctic Monkeys"); 

//5. Show an example of a for loop
for (a = 0; a < rockBands.length; a++) {
    console.log(rockBands[a])
}

//6. Showing an example of a function
let surname = "Morris";

function evanNameCheck (a, b) {
    if ((a == "Evan") && (b == "Morris")) {
        console.log("This is Evan Morris!")
    }
    else {
        console.log("This is not Evan Morris!")
    }
}

evanNameCheck(firstName, surname);  //running evanNameCheck function for test.