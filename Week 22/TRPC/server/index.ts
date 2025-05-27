import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (otps) => {
    const title = otps.input.title;
    const description = otps.input.description;
    console.log("Hello from TRPC server function")
    // do DB stuff here
    return {
      id: "1",
      message:"todo creation completed",
      title
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
