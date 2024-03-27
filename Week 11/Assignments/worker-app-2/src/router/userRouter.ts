import { Hono } from "hono";
import { getAllUsers, signin, signup, userProfile } from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";

export const userRouter = new Hono();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/all",authMiddleware,getAllUsers);
userRouter.get("/userDetails/:id",authMiddleware,userProfile);