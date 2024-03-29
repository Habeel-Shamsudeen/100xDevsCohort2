interface User {
  id: number;
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const age = sumOfAge(
  {
    id: 1,
    name: "habeel",
    age: 19,
  },
  {
    id: 2,
    name: "nazeeh",
    age: 10,
  }
);

console.log(age);

type updateUser = Pick<User, "name" | "age">;

type updatePropsOptional = Partial<updateUser>