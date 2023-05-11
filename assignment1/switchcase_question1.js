// Switch Case

/* 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of
days until the weekend. */

let day = "sunday"
switch (day) {
    case "monday":
        console.log("There are 5 days untill the weekend.");
        break;
    case "tuesday":
        console.log("There are 4 days untill the weekend.");
        break;
    case "wednesday":
        console.log("There are 3 days untill the weekend.");
        break;
    case "thursday":
        console.log("There are 2 days untill the weekend.");
        break;
    case "friday":
        console.log("There are 1 days untill the weekend.");
        break;
    case "saturday":
               
    case "sunday":
        console.log("There are 0 days untill the weekend.");
        break;
    default:
        console.log("invalid day");
}