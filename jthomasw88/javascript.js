console.log(`2+2=5`);
// if statement

let num = 15;

if (num % 5 == 0) {
  console.log(`divisable by 5`);
}
// switch//

let choccy = "Star Bar";

switch (choccy) {
  case "Mars":
  case "Galaxy Caramel":
    console.log(`i dont mind these`);
    break;
  case "Star Bar":
    console.log(`these are elite but i forget i love them`);
    break;
}

// array

let goodSongs =[
    "stickyfingers - not done yet",
    "Eminem - Gnat",
    "Twenty One Pilots - Migrane"
];

console.log(goodSongs);

// for loop

const myFavFilms = [
    `Django Unchained`,
    `Antwone Fisher`,
    `Donnie Darko`,
    `space jam`,
  ];
  
  myFavFilms.push(`Wolf Of Wall Street`);
  myFavFilms.push(`The Shawshank Redemption`);
  
  for (let i = 0; i < myFavFilms.length; i++) {
    console.log(myFavFilms[i]);
  }
  console.log(myFavFilms)
  
//   do loop
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 10);

console.log(result);
// function
let balance = 865;
const cashWithdraw = (pin, amount) => {
    if ((pin == "5432") && (amount <= balance)) {
        console.log(`cashWithdraw £${amount}`);
        balance -= amount;
        console.log(`remaining balance £${balance}`)
    };
};
cashWithdraw("5432", "65")
console.log(balance);