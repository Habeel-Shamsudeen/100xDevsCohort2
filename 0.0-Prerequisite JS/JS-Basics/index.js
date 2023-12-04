//Data types related practice questions
//Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
// let km=prompt("enter the distance in km");
// let m=km*1000;
// let cm=m*100;
// alert("the distance in meter is "+m+" and the distance in centimeter is "+cm);

//Question-6:    WAP to input n numbers and log the average of those number.
// let sum = 0;
// let count = 0;
// let n=Number(prompt("enter the number of data:"));
// for (let i = 0; i < n; i++) {
//     let number = Number(prompt("Enter a number:"));
//     sum += number;
//     count++;
// }

// let average = sum / count;
// alert("Average ="+ average);
// console.log("The average of the numbers is: " + average);

//if else practice questions
//Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

// let userName=prompt("Enter your username:");
// if(userName.length<6){
//     alert("too short");
// }else if(userName.length>15){
//     alert("too long");
// }else{
//     alert("Username accepted");
// }

//Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
let dayNumber = Number(prompt("Enter the day in number 1-7"));
switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
