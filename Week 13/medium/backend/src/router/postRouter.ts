import { Context, Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";

export const postRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRETE: string
	}
}>();
postRouter.use('/blog/*',authMiddleware);

postRouter.post("/blog", (c:Context) => {
  
  return c.text(`${c.get("userId")} blog route`);
});

postRouter.put("/blog", (c) => {
  return c.text("put blog route");
});

postRouter.get("/blog/:id", (c) => {
  return c.text("get blog/id route");
});

postRouter.get("/blog/bulk", (c) => {
  return c.text("get blog/bulk route");
});
