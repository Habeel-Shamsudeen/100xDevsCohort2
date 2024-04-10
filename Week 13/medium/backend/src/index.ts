import { Hono } from "hono";
import { cors } from "hono/cors";
import { userRouter } from "./router/userRouter";
import { postRouter } from "./router/postRouter";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use(cors());

app.route("/api/v1/user", userRouter);

app.route("/api/v1/blog", postRouter);

export default app;
