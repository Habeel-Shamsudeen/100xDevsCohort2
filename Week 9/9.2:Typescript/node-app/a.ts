// function greet(firstName: string,lastName:string,age:Number):void {
//   console.log(`hello ${firstName}`);
// }

// greet("habeel","Shamsudeen",20);

// function sum(a:number,b:number):number{
//     return a+b;
// }

// const value:number = sum(4,5);
// console.log(value)

// function isLegal(age:number):boolean{
//     if(age>=18){
//         return true;
//     }
//     return false;
// }

// console.log(isLegal(17))

// function runAfter1Sec(fn:()=>void){
//     setTimeout(fn,1000);
// }

// runAfter1Sec(()=>console.log("hello"));

interface user {
    firstName:string,
    age:number
}

function isLegal(user:user):boolean{
    if(user.age>=18){
        return true;
    }
    return false
}

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);