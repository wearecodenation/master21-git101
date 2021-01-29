console.log("Hello World!");

var password = "giraffe"

if (password.length <= 8) {
    console.log("Sorry, this password is too short");
   }   else {
        console.log("Thank you for entering your password");
    }

const expr = 'Pistachios';
    switch (expr) {
      case 'Hazelnuts':
        console.log('Hazelnuts are £10 a kilo.');
        break;
      case 'Almonds':
      case 'Macadamias':
        console.log('Almonds and Macadamias are £12 a kilo.');
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }

var seeds = ["Sunflower", "Pumpkin", "Flaxseed"];
var second = seeds[1];
console.log(second);
seeds.push("Linseed");
console.log(seeds);

var arr = [20, 30, 40, 50, 60];

for (var i = 0; i < 5; i++)
{
    console.log(arr[i]);
}

let num55 = 0
const doWhileLoop = () => {
    while (num55 < 10){
        console.log(`${num55} Sorry, try again`)
        num55++;
    }
    if (num55 = 10) {
        console.log(`${num55} AT LAST!`)
        num55++;
    }
    while (num55 > 10){
        console.log("Lets stop here")
        break;
    }
}
doWhileLoop()

const takeOrder = (size, type, amount) => {
  console.log(`Order received: ${size} ${type} and that will be £${amount} please, thank you`);
}
takeOrder ("XXL","Bacon Double Cheeseburger","7");

