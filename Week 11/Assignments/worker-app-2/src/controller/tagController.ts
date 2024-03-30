import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export async function getPostByTag(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body: {
      tag: string;
    } = await c.req.json();
    const tag = body.tag.trim();
    const res = await prisma.tags.findMany({
      where: {
        tag: tag,
      },
      select: {
        posts:{
            select:{
                title:true,
                body:true,
                author:{
                    select:{
                        username:true
                    }
                },
                tags:true
            }
        }
      },
    });
    return c.json({
        posts:res[0].posts.map((post)=>({
            username:post.author.username,
            title:post.title,
            body:post.body
        }))
    })
  } catch (error) {
    return c.body(`Internal server error getalluser ${error}`, 500);
  }
}
