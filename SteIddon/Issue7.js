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