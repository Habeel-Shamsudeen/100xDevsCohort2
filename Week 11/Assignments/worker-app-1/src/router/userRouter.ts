import { Hono } from "hono";
import { getAllUsers, signin, signup, userProfile } from "../controller/userController";

export const userRouter = new Hono();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/user-details/:id",userProfile);
userRouter.get("/all",getAllUsers);