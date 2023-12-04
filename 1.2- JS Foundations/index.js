//Objects
const user1 = {
  firstName: "habeel",
  gender: "male",
};
console.log(user1.firstName); //gives value

const users = [
  {
    firstName: "habeel",
    gender: "male",
    metaData:{ //object inside object
        age:45
    }
  },
  {
    firstName: "shamsudeen",
    gender: "male"
  },{
    firstName: "priya",
    gender: "female",
  }
]; // array of objects

for(let i=0;i<users.length;i++){
    if(users[i].gender==="male"){
        console.log(users[i].firstName);
    }
}

//functions
function findSum(a,b){
    return a+b;
}

console.log(findSum(3,4));
console.log(findSum(3,10));

//function inputting a function (callBack)
function sum(num1, num2,funcToCall) {
    let result = num1 + num2;
    funcToCall(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}


// You are only allowed to call one function after this
// How will you displayResult of a sum

sum(1,2,displayResult);

//SetTimeout
function greet(){
    console.log("hello");
}
setTimeout(greet,3*1000); //waits 3sec before calling greet