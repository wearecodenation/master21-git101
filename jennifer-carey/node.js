// Activities showing examples of...
// Printing something to the console

console.log("Hello, my name is Jennifer.");

// Showing an if statement

const age = 38;

if (age > 30) {
   console.log(`I'm ${age} years old so I am getting on a bit.`)
} else {
   console.log(`I'm ${age} years old - a spring chicken!`);
}

// Showing a switch case

const day = new Date().getDay();

switch (day) {
   case 1:
      console.log("Welcome to the start of the week!");
      break;
   case 2:
      console.log("Happy Tuesday!");
      break;
   case 3:
      console.log("Happy hump day!");
      break;
   case 4:
      console.log("It's almost the weekend!");
      break;
   case 5:
      console.log("TFI Friday!");
      break;
   case 6:
      console.log("Enjoy your Saturday!");
      break;
   case 7:
      console.log("Take it easy, it's Sunday.");
      break;
   default:
      console.log("Error: what happened to the days?");
}

// Show an example of an array

let bestBands = [
   "Queens of the Stone Age",
   "Blur",
   "Steve Gunn",
   "Fleet Foxes",
   "Alice in Chains"
];

let bandOfTheDay = bestBands[Math.floor(Math.random()*bestBands.length)];

console.log(`Today, I'm going to listen to ${bandOfTheDay}.`);

// Show an example of a for loop

let bandItem;

for (bandItem = 0; bandItem < bestBands.length; bandItem++) {
   console.log(`One of my favourite bands is ${bestBands[bandItem]}.`);
}

// Show an example of a do loop


