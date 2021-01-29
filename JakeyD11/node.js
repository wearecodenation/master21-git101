let program = "Git";
let task = " ";
let mood = " ";
let message = " ";
//4. Show an example of an array
let faveProgram = [
    "VS Code",
    "Photoshop",
    "GitKraken",
];
let result = '';
let addition = 0;
let personCount = 0;

//1. Printing something to the console
message = "Hello there";
console.log(message);

//2. Showing an if statement
program = "Git";
mood = "Good";

if (program == "Git" && mood == "Good") {
    console.log("You can do this!");
}
else if (program != "Git") {
    console.log("finally a break from Git");
}

//3. Showing a switch case
switch (program) {
    case "VS code":
    case "HTML":
    case "Javascript":
        console.log("Alright lets do this!");
        break;
    case "Github":
    case "GitKraken":
    case "Git":
        console.log("Fucking Git again eugh");
        break;
    default:
        console.log("Must be the weekend if you are doing nothing!")
}
//4. adding to the array
faveProgram.push("paint");
faveProgram.push("MS Word");
//4. Using the array
for (let programIndex = 0; programIndex < faveProgram.length; programIndex++) {
    console.log(faveProgram[programIndex]);
}

//5. Show an ecample of a for loop
for (let i = 0; i < faveProgram.length; i++) {
    console.log(faveProgram[i]);
}
//6. Show an example of a do loop
do {
    addition++;
    result = result + addition;
} while (addition < 7);

console.log(result);

//7. Show an example of a function
const groupPeople = (name1) => {
    personCount++;
    console.log(`People in group: ${personCount}`);
    console.log(`Welcome ${name1}`);
}

groupPeople("Phil");
groupPeople("Steve");
groupPeople("Jordan");