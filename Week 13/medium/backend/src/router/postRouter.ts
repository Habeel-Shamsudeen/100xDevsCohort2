import { Hono } from "hono";

export const postRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();

postRouter.post("/blog", (c) => {
  return c.text("blog route");
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
