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
    case 5:
        console.log(`You win! GGWP`);
        break;
    case 6:
        console.log(`Close, but no cigar.`);
        break;
    case 4:
        console.log(`Only one off!`);
        break;
    default:
        console.log(`Not even close. Pathetic.`)
}}

let nums = [1,2,3,4,5,6,7,8,9,10];

console.log(`Possible numbers: ${nums}`);
console.log("If you role a 5, you win!");

console.log(`Your number is ${num}`);
numSwitch();