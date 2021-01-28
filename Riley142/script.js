// Printing something to the console
console.log("Something.");

// Showing an if statement
let sleepy = true;

if  (sleepy = false) {
    console.log("No need for caffeine :D!");
} else (sleepy = true); {
    console.log("Need to drink some coffee!");
}

// Showing a switch case
const day = new Date().getDay();

switch (day) {
    case 1:
        console.log("It'Monday.");
        break;
    case 2:
        console.log("It's Tuesday.");
        break;
    case 3:
        console.log("It's Wednesday.");
        break;
    case 4:
        console.log("It's Thursday.");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday, time to relax!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Wait...What?");
}

// Show an example of an array
const allTheFancyDrinks = ["Matcha Latte", "Golden Latte", "Chai Latte"];

// Show an example of a for loop
for (i = 0; i < allTheFancyDrinks.length; i++) {
    console.log(allTheFancyDrinks[i]);
}

// Show an example of a do loop 
let count = 0;

do {
count ++ ;
console.log(count);
}
while (count < 3)
