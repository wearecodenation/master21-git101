/* 1) Printing something on the console*/
console.log("Welcome to Jevascript!");
/* 2) Showing an if statement*/
let javascriptKnowledge = 70;
if (javascriptKnowledge < 60) {
    console.log("You need to revise again!");
} else{
    console.log("You are on the right track, keep it up!");
}
/* 3) Showing a switch case*/
let git1 = "kind to me";
let git2 = "conflicts";
let git3 = "changes approved by reviewers";

switch (git1) {
    case "kind to me":
        console.log(`I'm very happy that git is ${git1} today :)`);
        break;
    case "conflicts":
        console.log(`Need to solve those ${git2} ASAP!!!`);
        break;
    case "changes approved by reviewers":
        console.log("I'm ready to merge!");
        break;
}
/* 4) Showing an example of an array */
let activities = [
    "Spending quality time with my family",
    "Reading books",
    "Cooking",
    "Re-organizing my schedule",
    "Painting",
    "Walking"
];
console.log(activities);
/* 5) Showing an example of a for loop */
for (let listOfActivities =0; listOfActivities < activities.length; listOfActivities++){
    console.log(activities[listOfActivities]);
}
/* 6) Showing an example of a do loop */
let drinks = [
    "Coffee",
    "Chocolate",
     "Tea"
];
let myChoiceDrink = "Chocolate";
do {
    console.log(`I only like ${drinks[1]}`);
} while (myChoiceDrink != "Chocolate");
/* 7) Showing an example of a function */
let software = [
    "Javascript",
    "HTML",
    "Css",
    "HTML and CSS"
];
function webpage() {
    if (software[2] == "HTML and CSS"){
        console.log("Cool!");
    }else if (software[2] != "HTML and CSS"){
        console.log(`I need ${software[3]}`);
    }
}
webpage();
