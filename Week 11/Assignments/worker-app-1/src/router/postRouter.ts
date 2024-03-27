import { Hono } from "hono";
import { PrismaClient } from '@prisma/client'

enum StatusCode{
    BADREQ=400,
    NOTFOUND=404,
    NOTPERMISSIOON=403
}
export const postRouter = new Hono();