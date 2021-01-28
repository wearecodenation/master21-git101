//printing to console
console.log("Hello world");

//Showing an if statement
let eggs = 4;

if(eggs >= 6){
    console.log ("The chickens are doing well");
}
else {
    console.log("we need more chickens");
}

//example of switch case
const fruit = "apple";

switch(fruit){

    case "oranges":
        console.log("we dont sell these");
        break;

    case "apple":
        console.log("They are 50p");
        break;

    default:
        console.log("please pick a fruit");
}

//example of an array
let favWeb = [
    "Reddit\n",
    "Facebook\n",
    "MySpace\n"
];

console.log(`${favWeb}`);

const newWeb = (web) => {
    favWeb.push(`${web}\n`);
}

newWeb("Twitter");

newWeb("Amazon");

console.log(`${favWeb}`);
 
console.log(`${favWeb.pop()}`);

console.log(`${favWeb}`);


//example of for loop checking if divisible by 7
for (let i = 0; i < 6; i++) {
    var randNum = Math.ceil(Math.random() *30);
    console.log(`${randNum}, ${randNum % 7 == 0}`);
}

//example of do loop
let result = " ";
let i = 0;

do{
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);

//example of function
