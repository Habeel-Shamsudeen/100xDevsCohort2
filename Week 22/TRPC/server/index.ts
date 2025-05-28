import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

const signUpInputType = z.object({
  email: z.string(),
  password: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (otps) => {
    const userName = otps.ctx.userName;
    console.log(userName);
    const title = otps.input.title;
    const description = otps.input.description;
    console.log("Hello from TRPC server function");
    // do DB stuff here
    return {
      id: "1",
      message: "todo creation completed",
      title,
    };
  }),

  signUp: publicProcedure.input(signUpInputType).mutation(async (otps) => {
    const email = otps.input.email;
    const password = otps.input.password;
    // email already exist validation
    // Do DB stuff add to DB
    // jwt.sign(userId,secret)
    let token = "123456"; // JWT token

    return {
      token,
      email,
      message: "SignUp completed",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(otps) {
    let authHeader = otps.req.headers["authorization"];
    console.log(authHeader);
    return {
      userName: "123",
    };
  },
});

server.listen(3000);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
