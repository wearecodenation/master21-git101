// In your user area write a small nodejs program, this should demonstrate your understanding of the core principles we studied in week 1. It should include an example of:


// if statement
// switch statyement 
// Show an example of an array
// Show an example of a for loop
// Show an example of a do loop
// Show an example of a function
// You should not do this all at once, you should do each of these one by one, commit and push them, to practice git.


// console.log
console.log("Why are you here?")

//if satement
var x
var y
x = 167
y = 15
console.log(x)
if (x==y){                                  // needed strict equals for type and value
    console.log("your numbers are equal")
}
else if (x>y){ 
    
    console.log("x is greater than y")
}
else{
    console.log("y is greater than x")
}

//switch statement even number checker
let number = x%2
switch (number) {
    case 0:
    console.log("this numeber is even")
        break;

    default: console.log("This number is Odd")
        break;
}
// Arrays
var myfavouritepokemon = ["shroomish", "hoothoot", "bellsprout", "oddish", "cynaquil", "Unknown" ]
console.log(myfavouritepokemon)
console.log(myfavouritepokemon[1])  // arrays start at 0 so [0] would return shroomish
console.log(myfavouritepokemon.length)
var reversed = myfavouritepokemon.reverse()
console.log(myfavouritepokemon)
console.log(reversed) // added just to remind myself of function and also its fun 

// for loop (count up)
for (let index = 0; index < 11; index++) {
    const element = [index];
}
// do loop
var numberOfDaysCounter = 4;
var numberOfDays = 3;
var daysOfWeek = ["Monday", "Tuesday", "Wednseday", "Thursday", "Friday", "Saturday", "Sunday"]
do {
    console.log(daysOfWeek[numberOfDaysCounter]);
    numberOfDaysCounter++
} while (numberOfDays < numberOfDays);

//functions
function multiplier(p1, p2){
    return p1*p2
}
console.log(multiplier(7,6))