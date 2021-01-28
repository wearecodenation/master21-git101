// 1. Printing something to the console

let x = "Ruaraidh"

console.log(x)
// node node.js - prints to terminal


// 2. Showing an if statement

let password = "stephanie"

if (password.length < 8){
    console.log("password must be 8 characters or more");
}
else{
    console.log("Your new password has been accepted");
}


// 3. Showing a switch case

let topping = "pinapple"

switch (topping){
    case "Salami":
    case "cheese":
    case "chilli":
    case "olives":
    case "anchovies":
        console.log("This is a key pizza topping")
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
    "oyster"
]
console.log(boatTypes)

boatTypes.push("Sigma")

console.log(boatTypes)


// 5. Show an example of a for loop

// 6. Show an example of a do loop

// 7. Show an example of a function