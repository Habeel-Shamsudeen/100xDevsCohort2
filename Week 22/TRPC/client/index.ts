import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers(opts) {
          return {
            Authorization :"Bearer 123"
          }
      },
    }),
  ],
});

async function main() {
  const signUpResponse = await trpc.signUp.mutate({
    email: "habeel@gmail.com",
    password: "123456",
  });
  console.log(signUpResponse.token);

  const response = await trpc.createTodo.mutate({
    title: "hello TRPC world",
    description: "Introduction to TRPC",
  });
  console.log(response);
}

main();
