import { Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import { PostBlog, deletePost, getAllPost, getPostbyId, updatePost } from "../controller/postController";

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

postRouter.get("/bulk",getAllPost);

postRouter.get("/:id",getPostbyId);

postRouter.delete("/:id",deletePost);

