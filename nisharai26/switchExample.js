function checkDay(day){
switch(day){
    case "Monday":
        console.log("working day");
        break;
    case "Tuesday":
        console.log("still working");
        break;
    case "Wednesday":
        console.log("carry on");
        break;
    case "Thursday":
        console.log("keep going");
        break;
    case "Friday":
        console.log("Last working day");
        break;
    default:
        console.log("Holiday");
}
}
checkDay("Friday");