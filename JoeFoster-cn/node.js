/*In your user area write a small nodejs program, this should demonstrate your understanding of the core principles we studied in week 1. 
It should include an example of:
1. Printing something to the console
2. Showing an if statement
3. Showing a switch case
4. Show an example of an array
5. Show an example of a for loop
6. Show an example of a do loop
7. Show an example of a function
You should not do this all at once, you should do each of these one by one, commit and push them, to practice git.
You should also include this ticket number in your git commits so we can see how they are all linked.*/


//example of printing to the console
let myage = 28;
let myname = "Joe"; {

console.log(`My name is ${myname} and I am ${myage} years old, can I have some wine?`) }
//example of an if statement
    if (myage > 18) {
        (console.log("Yes you can have some wine, sir."));
    }     
    else { 
        (console.log("No, get out now!"))
    }
//example of a switch statement
const computer = "Mac";

switch (computer) {
    case "Windows":
        console.log("This is the superior machine");
    break;
    case "Linux":
        console.log("This is the superior machine");
    break;
    case "Mac":
        console.log("This is my machine");
}
//example of an array
let shoppingList = [
    ("Bread"),
    ("Milk"),
    ("Eggs"),
] 

console.log(shoppingList) 

//5.example of a for loop

let siteList = [
    ("Facebook"),
    ("YouTube"),
    ("Reddit"),
];
for (let i = 0; i < siteList.length; i++) {
    console.log(siteList[i]);
    
}

//6. example of a do loop
let text = "";
let i = 0;

do {
    text += "The number is " + i;
    i++;
}
while (i < 5);
{
console.log(text)};

//7. example of a function

const foodOrder = (order1, order2) => {
    console.log(`Can I have a ${order1} and some ${order2} please?`);
}

foodOrder ("pizza", "noodles");


//Issue #8
//Add prompt and alert


let question = prompt("What is your name?");
alert(`${question}, here are my favourite songs`);

