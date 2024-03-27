import { Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/postController";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}
export const postRouter = new Hono();

postRouter.get("/", getAllPosts);
postRouter.post("/", authMiddleware, createPost);
postRouter.get("/postId/:id", authMiddleware, getPost);
postRouter.put("postId/:id", authMiddleware, updatePost);
postRouter.delete("postId/:id", authMiddleware, deletePost);
