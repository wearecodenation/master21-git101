// Printing something to the console
console.log("Welcome to the app");

let age = 10;
// Showing an if statement
if (age < 18) {
    console.log("sorry can't serve you")
} else {
    console.log("Have a pint")
}

// Showing a switch case

let meal = "hotdogs"

switch (meal) {
    case "pizza": console.log("Oooh my favourite");
        break;
    default:
        console.log("It'll do...")
}

// Show an example of an array
let faveGames = ['Ocarina of Time', 'Breath of the Wild', 'Majoras Mask', 'Stardew Valley'];

console.log(faveGames)

// Show an example of a for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Show an example of a do loop
let i = 0;
let text = '';

do {
    i = i + 1;
    text = text + i;
} while (i < 5);
console.log(text);

// Show an example of a function

myFunction = () =>
{
    console.log("This is my function")
}
myFunction();