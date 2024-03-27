import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinSchema, signupSchema } from "../zod/user";
import { Jwt } from "hono/utils/jwt";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

export async function signup(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body: {
      username: string;
      email: string;
      password: string;
    } = await c.req.json();
    const parsedBody = signupSchema.safeParse(body);
    if (!parsedBody.success) {
      return c.body("Invalid user Input", StatusCode.BADREQ);
    }
    const isUserExist = await prisma.user.findFirst({
      where: { email: body.email },
    });

    if (isUserExist) {
      return c.body("User already exist", StatusCode.BADREQ);
    }

    const res = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
      select: {
        username: true,
        id: true,
        email: true,
      },
    });
    console.log("check before");
    const userId = res.id;
    console.log("check");

    const token = await Jwt.sign(userId, c.env.JWT_TOKEN);
    console.log(token);
    return c.json({
      msg: "User created successfully",
      token: token,
      user: {
        userId: userId,
        username: res.username,
        email: res.email,
      },
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}

export async function signin(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
}

export async function userProfile(c: Context) {}

export const getAllUsers = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const res = await prisma.user.findMany();
    return c.json({
      users: res.map((user) => ({
        id: user.id,
        username: user.username,
        email: user.email,
      })),
    });
  } catch (error) {
    return c.body(`Internal server error getalluser ${error}`, 500);
  }
};
