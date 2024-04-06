import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Context } from 'hono'

enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTPERMISSIOON = 403,
  }

export async function signupController(c:Context){
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
}

export async function signinController(c:Context){
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
}
