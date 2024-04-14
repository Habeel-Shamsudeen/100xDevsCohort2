import { Next } from "hono";
import { Jwt } from "hono/utils/jwt";



export async function authMiddleware(c: any, next: Next){
  try {
    const token: string = c.req.header("Authorization").split(" ")[1];
    if (token !== null || token !== undefined) {
      const { id } = await Jwt.verify(token, c.env.JWT_SECRETE);
      if (id) {
        c.set("userId", id);
        await next();
      } else {
        return c.body("you are unauthroized user sorry", 401);
      }
    } else {
      return c.body("you are unauthroized user sorry", 401);
    }
  } catch (error) {
    return c.text("Authentication failure", 404);
  }
};
