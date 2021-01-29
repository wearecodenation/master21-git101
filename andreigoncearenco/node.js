console.log("Hi");

let topping = "Pineapple"

if(topping == "Pineapple") {
    console.log("Yikes, who eats pineapple with pizza?!");
}

let game ="Warcraft"

switch(game){
    case "Diablo":
    case "Rayman":
        console.log("Wow I didn't know you play Diablo as well!");
        break;
    case "Warcraft":
    case "Fifa":
        console.log("Warcraft is definately one of my favorite game!");
        break;
    case "NBA 2K":
    case "NBA LIVE":
        console.log("Personally I believe NBA 2K is better");
        break;
}

let favoriteSong = [
    "Tom - Hell",
    "Jack - Believe me",
    "Maria - Hello"
];
console.log (favoriteSong);

for(let i= 9; i > -1; i--){
    console.log(i);
}

let  randomNumber = 3;

while(randomNumber < 10) {
    console.log("Random no. " + randomNumber + "\n Keep looping");
    randomNumber = (Math.round(Math.random()* 30));
} 

const gameIsRunning = () => {
    console.log("Game is about to open up");
}

gameIsRunning();

    