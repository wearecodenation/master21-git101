//Part 1 - console something 
console.log(`Hello`);

//Part 2 - show an if statement

let age = 30;

if (age>18){
    console.log(`What would you like to drink?`);
}

//Part 3 show a switch case

let car = "Mercedes";

switch(car){
    case "Porche":
    case "Ferrari":
        console.log(`You have a top tier car!`);
        break;
    case "BMW":
    case "Mercedes":
        console.log(`You have a luxury car`);
        break;
    case "Fiat":
    case "Toyota":
        console.log(`You have a mid range car`);
        break;
}

//Part 4 show an array

let footballTeams = [
    "Arsenal",
    "Chelsea",
    "Liverpool",
    "Man United"
];

console.log(footballTeams);

//Part 5 show a loop

let boysNames = [
    "Nathan",
    "John",
    "Thomas",
    "Harrison"
];

for(let namesIndex=0; namesIndex<boysNames.length; namesIndex++){
    console.log(boysNames[namesIndex]);
}

//Part 7 show a function

let bankBalance = 2000;
const pinNumber = 1234;

const cashWithdrawal = (amount, pinEnter) =>{

if (amount<bankBalance && pinNumber === pinEnter){ 

console.log(`Withdraw ${amount} from account ${pinEnter}`);
bankBalance = bankBalance - amount

console.log(`Your new balance is £${bankBalance}`)

    }
}

cashWithdrawal(500, 1234)
cashWithdrawal(500,1234)