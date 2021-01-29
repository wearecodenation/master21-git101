id = "Niel";

console.log(id);

if (id =="Jim Davey") {
    
    console.log("You are the best")
}
else {
    console.log(`Hold up... ${id} what are you doing here? You're not Jim, get outta here!!`)
}

id = "Jim Davey"

switch (id){
    case "Jim Davey":
        console.log(`Phew ${id}, you're here!`);
        break;
    default:
        console.log("Where is Jim? Please can you go get him to sort this mess out.");
}

let homerSong = [
    "pizza",
    "bagels",
    "hotdogs",
    "mustard",
    "beer",
    "eggplant",
    "baby deer",
    "la ",
];

console.log(`I like ${homerSong[0]}, I like ${homerSong[1]}, I like ${homerSong[2]}, with ${homerSong[3]} and ${homerSong[4]}.
I'll eat ${homerSong[5]}, I could even eat a ${homerSong[6]}. ${homerSong[7].repeat(10)}.`);

drinksOfTheDay = ["water", "tea", "coffee", "decaf-tea", "water", "beer"];

for(let drinkIndex = 0; drinkIndex < drinksOfTheDay.length; drinkIndex++){
    console.log(drinksOfTheDay[drinkIndex]);
}

let j = 0

do {
    console.log(j);
    j++;
} while (j<=8);

let totalSpent = 1500

const onlineShopping = (spending) => {
    console.log(`Are you seriously about to spend £${spending} on Palace/Supreme when you've already spent £${totalSpent}!`);
    totalSpent = spending + totalSpent;
    console.log(`I hope you can sleep at night having spent ${totalSpent} now!`);
}

onlineShopping(183);