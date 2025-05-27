import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  const response = await trpc.createTodo.mutate({
    title: "hello TRPC world",
    description: "Introduction to TRPC",
  });
  console.log(response)
}

main();
