//Print something to the console//
console.log (Math.random()*10);

//`Showing` an "if" statement//
let PIN=4322

if (PIN===4321){
    console.log("How much would you like to withdraw?")
}
else {
    console.log("Sorry! Wrong PIN, try again.")
}

//Showing a switch case//
let num=60

switch(true) {
    case (num % 6 == 0 && num % 10 == 0):
        console.log("Fizz Buzz");
        break;
    case (num % 6 == 0):
        console.log("Fizz");
        break;
    case (num % 10 == 0):
        console.log("Buzz");
        break;
        default:
            console.log(num)
}

//Show an example of an array//

let favouriteDrink=["Hot Chocolate", "Vanilla Latte", "Water"]
console.log(favouriteDrink[2]);
console.log(favouriteDrink[0]);
console.log(favouriteDrink[1]);

//Show an example of a 'for' loop//

let foodOrder = [
    "Arrabiatta",
    "Double Cheeseburger",
    "Salt & Pepper Chicken Pizza",
    "Chips"
];

for(let i = 0; i < foodOrder.length; i++){
    console.log(foodOrder[i]);
}