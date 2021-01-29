// 1. Printing something to the console

let x = "Ruaraidh"

console.log(x)
// node node.js - prints to terminal


// 2. Showing an if statement

let password = "stephanie";

if (password.length < 8){
    console.log("password must be 8 characters or more");
}
else{
    console.log("Your new password has been accepted");
}


// 3. Showing a switch case

let topping = "pinapple";

switch (topping){
    case "Salami":
    case "cheese":
    case "chilli":
    case "olives":
    case "anchovies":
        console.log("This is a key pizza topping");
        break;
    case "pinapple":
    case "courgettes":
        console.log("what is this doing on a pizza!");
}

let num = 11;

     if (num % 3 === 0 && num % 5 === 0){
        console.log("Fizz Buzz");
     }else if (num % 3 === 0){
    console.log("Fizz");
    }else if (num % 5 ===0){
    console.log("Buzz");
    }else{
    console.log(`No Fizz or Buzz applicable to ${num}`);
}

// 4. Show an example of an array

let boatTypes = [
    "jeanneau",
    "hanse",
    "swan",
    "oyster";
]
console.log(boatTypes);

boatTypes.push("Sigma");

console.log(boatTypes);

// --------------------------

let favFilms = [
    "Batman",
    "Jaws",
    "Superman",
    "Clueless",
    "Emma"
];
favFilms.push("Gladiator", "Iron Man");
console.log(favFilms);
for (let filmsIndex = 0; filmsIndex < favFilms.length; filmsIndex++) {
    console.log(favFilms[filmsIndex]);
}

// ------------------------------

let favWeb = [
    "google",
    "youtube",
    "equinoxsailing.com"
]
console.log(favWeb)

favWeb.push("lss", "facebook")

console.log(favWeb.length)

console.log(favWeb)

favWeb.pop()

console.log(favWeb)

favWeb.join()

console.log(favWeb)
console.log(favWeb[3])
console.log(favWeb[8])
favWeb[2] = "spotify"

// // -----------------------------


const square = (number) => number * number;
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const names = ["larry", "curly", "mo"];
const shoutyNames = names.map(name => name.toUpperCase());
const weirdlyCasedNames = names.map(name => {
    const chars = name.split("").map(letter => letter.toLowerCase());
    chars[1] = chars[1].toUpperCase();
    return chars.join("");
});
console.log(square(5));
console.log(numbers);
console.log(squares);
console.log(shoutyNames);
console.log(weirdlyCasedNames);

// // 5. Show an example of a for loop

let boats = [
    "jeanneau",
    "hanse",
    "swan",
    "oyster",
    "first 40"
];
    console.log(boats);

// 6. Show an example of a do loop

countdown = 5;

do {
    console.log(`java and git are going to do my nut in! ${countdown}...`);
    countdown--;
 } while (countdown > 0);
 
 console.log(`I'm going to smash my computer!!`);

// 7. Show an example of a function


const weatherReport = (weather) => {
    if (weather == "rainy" || weather == "windy") {
       console.log(`The weather looks grim - better wrap up.`);
    } else if (weather == "sunny") {
       console.log(`Today is ${weather}, it's going to be great!`);
    } else {
       console.log(`It's looking unpredictable.`);
    }
 }
 
 weatherReport("windy");
