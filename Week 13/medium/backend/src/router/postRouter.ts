import { Context, Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import { PostBlog, getAllPost, getPostbyId, updatePost } from "../controller/postController";

export const postRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRETE: string
	},
  Variables:{
    userId:string
  }
}>();
postRouter.use('/*',authMiddleware);

postRouter.post("/",PostBlog);

postRouter.put("/",updatePost);

postRouter.get("/id/:id",getPostbyId);

postRouter.get("/bulk",getAllPost);
