console.log("Good Morning, Good Afternoon, Good Evening, and Goodnight");

let weather = "sunny";
    if (weather == "sunny"){
        console.log ("What a lovely day to get outside for a walk!");
    }
    else if (weather == "raining"){
        console.log ("Get your umbrella and wellies, and get out for a walk!");
    }
    else {
        console.log ("What a bland day, sit back for a Netflix binge!")
    }

//3.showing a switch case

console.log ("Where do you like to holiday?");
let holiday = "Nice";
    switch (holiday){
            case "Albufera":
            case "Barcelona":
            case "Cadiz":
                console.log ("You like to holiday in Spain!");
                break;
            case "Paris":
            case "Nice":
                console.log ("You like to holiday in France! Oo lala");
                break;
            case "Venice":
            case "Sardinia":
                console.log ("You like to holiday in Italy!")
            default:
                console.log ("You would rather stay at home than go on holiday?")
    }