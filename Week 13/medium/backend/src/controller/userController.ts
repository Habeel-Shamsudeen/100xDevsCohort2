import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { Jwt } from "hono/utils/jwt";
import { signupInput, signinInput } from "@habee1_/medium-common";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

export async function signupController(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg:"Inputs not correct"
      })
    }
    const userExist = await prisma.user.findFirst({ //not required as ready a check in db level as db do not allow duplicate email value
      where: {
        email: body.email,
      },
    });
    if (userExist) {
      return c.text("User already exist", StatusCode.BADREQ);
    }
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    const token = await Jwt.sign(
      {
        id: newUser.id,
      },
      c.env.JWT_SECRETE
    );
    return c.json({
      msg: "User created",
      token: token,
      user: newUser,
    });
  } catch (error) {
    return c.text("Internal Server Error", StatusCode.NOTFOUND);
  }
}

export async function signinController(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg:"Inputs not correct"
      })
    }
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    if (!user) {
      return c.text("Incorrect credentials", StatusCode.NOTFOUND);
    }
    const token = await Jwt.sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRETE
    );
    return c.json({
      msg: "User Logged in",
      token: token,
    });
  } catch (error) {
    return c.text("Internal Server Error", StatusCode.NOTFOUND);
  }
}
