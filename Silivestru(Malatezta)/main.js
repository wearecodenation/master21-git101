// 1. Printing something to the console//

console.log("I am lost!")

//2. Showing an if statement//

let favMusic = "electronic"

if (music == "classical"){
    console.log ("Mmmm.. classical music. Still good!")
}

else if (music == "pop"){
    console.log("Please change the track asap")
}

else {
    console.log("Oh nice... nice trying new music")
}

// 3. Showing a switch case//

let favDish = "Lasagna";
switch(favDish){
    case "Tortilla":
    case "Gazpacho":
    console.log("Mmmm, tasty... you must love Spanish gastronomy");
    break;
    case "Fish&Chips":
    case "Sunday Roast":
    console.log("I be you travelled to UK before");
    break;
    case "Lasagna":
    case "Spaghetti carbonara":
    case "Risotto":
    console.log("That's my favorite country's food: ITALY!");
    break;
    case "Mamaliga":
    console.log("That sounds interesting. Is this a Romanian dish?");
    break;
    default:
    console.log("You are to picky when choosing what to eat. Sorry!");
}

//4. Show an example of an array//

let christmasPresents = [
    "Silvester - Car",
    "Andrei - T-shirt",
    "Veronica - Bracelet",
    "Igor - Watch"];

    console.log(christmasPresents)
    console.log(christmasPresents.length)
    christmasPresents.push("Malena- ring");

// 5. Show an example of a for loop//

let minHeight = [
    "1.80",
    "1.81",
    "1.82",
    "1.83",
    "1.84",
    "1.85",
    "1.86",
    "1.87",
    "1.88",
    "1.89"];

let maxHeight = [
    "1.90"];

    for (i = 0; minHeight<maxHeight; i++){
        console.log ("You are allowed to enter this park")
    }