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