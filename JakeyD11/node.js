let program = "Git";
let task = " ";
let mood =" ";
let message = " ";
let faveProgram = [
    "VS Code",
    "Photoshop",
    "GitKraken",
];
let result = '';
let addition = 0;

for (let programIndex = 0; programIndex < faveProgram.length; programIndex++) {
    console.log(faveProgram[programIndex]);
}

message = "Hello there";
console.log(message);

program = "Git";
mood = "Good";

if (program == "Git" && mood =="Good") {
    console.log("You can do this!");
}
else if (program != "Git") {
    console.log("finally a break from Git");
}

switch(program){
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
faveProgram.push("paint");
faveProgram.push("MS Word");

for(let i=0; i < faveProgram.length; i++) {
    console.log(faveProgram [i]);
}

do {
addition++;
result = result + addition;
} while (addition < 7);

console.log(result);
