console.log("Hello World");

let favefilm = `star wars`;

if (favefilm == `star wars`) {
console.log("SORRY WE DONT HAVE THAT");
}
function movieLine(tagLine) {
    switch (tagLine) {
    case `Arnold`:
        return `i'll be back`;
    case `Bruce`:
        return `ippy kai aye`;
    case `Sylvester`:
        return `Dont throw momma from the train`;
    default: 
        return `Your gonna need a bigger boat`;
    }
}
console.log(movieLine(`arnold`));

let cars = [`Tesla`, `Ford`, `BMW`]; 
console.log (cars);

let films = ["Ghost Busters", "Jaws", "MIB", "LOTR",];

for (let film = 0; film < films.length; film++) {
  console.log(films[film]);
}

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 100);

function say(name) {
    console.log('Hi '+ name);
}
say('Phil');