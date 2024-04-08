import { Hono } from "hono";
import { signinController, signupController } from "../controller/userController";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
        JWT_SECRETE: string
	}
}>();

userRouter.post("/signup",signupController);

userRouter.post("/signin",signinController);
