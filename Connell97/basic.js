console.log("7.1 Complete!");

let num = (Math.floor(Math.random()*10));

function checkNum() {
    if (num < 5) {
        console.log(`Your number is lower than 5. Better luck next time!`);
    }

    if (num == 5) {
        console.log(`You win! Congrats!`);
    }

    if (num > 5) {
        console.log(`Your number is higher than 5. Better luck next time!`);
    }
}

function numSwitch() {
switch(num) {
    case "5":
        console.log(`You win! GGWP`);
    case "6":
        console.log(`Close, but no cigar.`);
    case "4":
        console.log(`Only one off!`)
    default:
        console.log(`Not even close. Pathetic.`)
}}

console.log(`Your number is ${num}`);
numSwitch();