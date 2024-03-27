import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

export async function authMiddleware(c: any, next: Next) {
  const JWT_TOKEN = c.env.JWT_TOKEN;
  try {
    const token: string = c.req.header("Authorization").split(" ")[1];
    if (token !== null || token !== undefined) {
      const decoded = await Jwt.verify(token, JWT_TOKEN);
      if (decoded) {
        c.set("userId", decoded);
        await next();
      } else {
        return c.body("you are unauthroized user sorry", 401);
      }
    } else {
      return c.body("you are unauthroized user sorry", 401);
    }
  } catch (error) {
    return c.body("Authentication Failure",401);
  }
}
