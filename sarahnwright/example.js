console.log ("Good Morning, Good Afternoon, Good Evening, and Goodnight!");

//if statement
let weather = "sunny";
    if (weather == "sunny"){
        console.log ("It's a lovely day out for a walk!");
    }
    else if (weather == "raining"){
        console.log ("Get your umbrella and wellies and go for a walk!");
    }
    else {
        console.log ("It's a bit grey out today, sit back and watch some Netflix!");
    }
    
//switch case
let destination = "Nice";
switch (destination){
    case "Barcelona":
    case "Cadiz":
    case "Madrid":
        console.log ("You are going on holiday to Spain this year!");
        break;
    case "Paris":
    case "Nice":
        console.log ("You are going on holiday to France, oo lala!");
        break;
    case "Cologne":
    case "Berlin":
        console.log ("You are going on holiday to Germany this year!");
        break;
    default:
        console.log ("You are not going on holiday this year?")
}

//array
let strawberryDaiquiri = [
    "Strawberries",
    "Sugar",
    "White Rum",
    "Strawberry liqueur",
    "Lime juice"
];