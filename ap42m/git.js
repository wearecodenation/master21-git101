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