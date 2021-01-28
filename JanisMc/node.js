// let brain = "Fried";

// console.log(`Please help, I think I'm losing my mind it's ${brain}`);

// if (brain == "Fried") {
//     console.log("Please help me")
// }
// else {
//     console.log("You must be doing ok")
// }

//     switch (brain) {
//         case "Fried":
//         case "Still fried":
//         console.log("I think I'm losing my mind");
//         break;
//         case "Ok":
//         case "Great":
//         console.log("Seems like you're doing better");
//         break;
//         default:
//         console.log("How are you?")
//     }

let array = [
    "Robert Plant",
    "Jimmy Page",
    "John Bonham",
    "John Paul Jones",
];

for(let ledZepInd = 0; ledZepInd < array.length; ledZepInd++){
    console.log(array[ledZepInd])
}

do { 
    array.pop()
}
while (array.length < 4);
