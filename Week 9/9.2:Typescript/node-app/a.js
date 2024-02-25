"use strict";
function greet(firstName, lastName, age) {
    console.log(`hello ${firstName}`);
}
greet("habeel", "Shamsudeen", 20);
function sum(a, b) {
    return a + b;
}
const value = sum(4, 5);
console.log(value);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
console.log(isLegal(17));
function runAfter1Sec(fn) {
    setTimeout(fn, 1000);
}
runAfter1Sec(() => console.log("hello"));
