"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({
    name: "habeel",
    age: 19,
}, {
    name: "nazeeh",
    age: 10,
});
console.log(age);
