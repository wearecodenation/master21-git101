/*Multiples of 3 and 5
Show HTML problem content
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */
let division = [];
let sum = 0;

for(let i = 0; i < 1000; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        division.push(i);
    } else if (i % 3 == 0) {
        console.log(i);
        division.push(i);
    } else if (i % 5 == 0) {
        console.log(i);
        division.push(i);
    } else {
        continue;
    }
}

for(let i = 0; i < division.length; i++) {
    sum += parseInt(division[i]);
}

console.log(sum);
alert(sum);
