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

console.log(`Your number is ${num}`);
checkNum();