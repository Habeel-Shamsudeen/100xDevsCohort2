// Intro
// var vs let
/* The difference between let and var is in the scope of the variables they create:
Variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared */

// = vs == vs ===
/*What is the difference == and === in JavaScript?
KEY DIFFERENCES
= is used for assigning values to a variable, 
== is used for comparing two variables, but it ignores the datatype of variable 
whereas === is used for comparing two variables, but this operator also checks datatype and compares two values. 
*/
// arrays , functions and objects are non primitive data type
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};
const myFunction = function () {
  console.log("Hello world");
};

let a = 10;
console.log(a);

let b = "10";
console.log(+b + a);

//if else ladder
if(a==10){
  console.log("a is equal to 10");
}
else if(a>10){
  console.log("a is greater than 10");
}else{
  console.log("a is less than 10");
}

//switch case example
let day = "Monday";

switch (day) {
  case "Monday":
  console.log("Today is Monday");
  break;
  case "Tuesday":
  console.log("Today is Tuesday");
  break;
  case "Wednesday":
  console.log("Today is Wednesday");
  break;
  case "Thursday":
  console.log("Today is Thursday");
  break;
  case "Friday":
  console.log("Today is Friday");
  break;
  default:
  console.log("It's the weekend!");
}




