// 1. Printing something to the console

let seasonName = ["Sale", "Christmas", "Easter", "Spring", "Black Friday"];

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
            'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

console.log(`Welcome to the ${seasonName[0]} Season Finder`);

// 2. Showing an if statement

    if (seasonName == "Christmas") {
        console.log(`We are in ${months[months.length - 1]}`);
    } else if (seasonName == "Easter") {
        console.log(`We are in ${months[months.length - 8]}`);
    } else if (seasonName == "Spring") {
        console.log(`We are in ${months[2,3,4]}`);
    } else if (seasonName == "Black Friday") {
        console.log(`We are in ${months[3]}`);
    } else {
        console.log(`Sorry no sale for this season!`)
    }

console.log(seasonName[1]);

// 3. Showing a switch case

var monthName;
switch (new Date().getMonth()) {
    case 0:
        monthName = `Check out after ${seasonName[1]} sales`;
        break;
    case 1:
        monthName = `No chance for a sale`;
        break;
    case 2:
        monthName = `Maybe there is a ${seasonName[3]} Sale but not very big expectations please!`;
        break;
    case 3:
        monthName = `${seasonName[2]} Sale around, checkout your favourite brand`;
        break;
    case 4:
        monthName = `Maybe there is a ${seasonName[3]} Sale but not very big expectations please!`;
        break;
    case 5:
        monthName = `No chance for a sale`;
        break;
    case 6:
        monthName = `No chance for a sale`;
        break;
    case 7:
        monthName = `No chance for a sale`;
        break;
    case 8:
        monthName = `No chance for a sale`;
        break;
    case 9:
        monthName = `No chance for a sale`;
        break;
    case 10:
        monthName = `This is the season for you! ${seasonName[4]} Sale are everywhere!!!`;
        break;
    case 11:
        monthName = `This is the tricky ${seasonName[1]}, there is no sale only increased number!`;
        break;
    default:
        monthName = `Are you in month 13? Have fun in Mars!`
}

console.log(monthName);

//4.Show an example of an array

let seasonName2 = ["Christmas", "Easter", "Spring", "Black Friday"];

// 5.Show an example of a for loop

console.log(`Here is the all Sale Seasons : ${seasonName2}`);

for(let i = 1; i < seasonName2.length; i++) {
    console.log(seasonName2[i]);
}

// 6. Show an example of a do loop

let monthsName = '';
let x = -1;
do {
    x += 1;
    monthsName += months[x] + " " ;
} while (x < months.length - 1);

console.log('List of All Months');
console.log(monthsName);

// 7. Show an example of a function

console.log(`SALE OR NOT????`);

let isSaleSeason = (month) => {
    if (month == months[0] || month == months[2] || month == months[3] || month == months[4]  || month == months[10]) {
        console.log(`YES! That's the time for after ${seasonName[1]} SALES`);
    } else {
        console.log(`SORRY you will pay full price possibly!`);
    }
} 

isSaleSeason("Jan");