//1
console.log ("Hello World!");

//2
let password = "WooWoo"

if (password.length <=8) {
    console.log("your Password is too short")
}
else if (password.length >=8) {
    console.log("Your Password is set")
}

//3
let pizzaTopping ="Mushroom";

switch(pizzaTopping) {
    case "Pepperoni":
    case "Mushroom":
    console.log("These are good ingredients") 
    break;
    case "sausage": 
    case  "Onion":
        console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
        break;
    case "Pineapple":
        console.log(`${pizzaTopping} should never be on pizza!`)
        break;
    default:
        console.log("What?");
}

//4
let favFilms = [
    "Kill Bill",
    "Step Brothers",
    "The Room",
    "Beetlejuice",
    "Pulp Fiction",
    "Fear and Loathing"
];

//5
for(let filmsIndex = 0; filmsIndex < favFilms.length; filmsIndex++){
    
    if (favFilms[filmsIndex] == "Beetlejuice"){
        break;
    }

    if(favFilms[filmsIndex] == "Pulp Fiction") {
        continue;
    }

    console.log(favFilms[filmsIndex]);
}

//6
let age = 15

while (age < 18) {
    console.log("You're a child!");
    age++;
}
console.log("You're an adult");

//7
const drinkOrder = (size,drinkType) => { 
    console.log(`Order received: ${size} ${drinkType}.`);
}

drinkOrder ("Small", "Cappuccino");

const foodOrder = (size,foodType) => {
    console.log(`Order received: ${size} ${foodType}`);
}

foodOrder("Regular","Fries");