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

//4
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

