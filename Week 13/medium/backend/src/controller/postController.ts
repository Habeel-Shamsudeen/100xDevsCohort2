import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

interface createPost {
  title: string;
  content: string;
}

interface updatePost {
  id: string;
  title?: string;
  content?: string;
}

export async function PostBlog(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body: createPost = await c.req.json();
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });
    return c.json({
      msg: "Blog posted",
      postDetail: newPost,
    });
  } catch (error) {
    return c.body("BAD REQUEST", StatusCode.BADREQ);
  }
}

export async function getAllPost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return c.json({
      msg: "All Blog Posts",
      posts: {
        postDetails: posts.map((post) => ({
          title: post.title,
          content: post.content,
          id: post.id,
          author: post.author.name,
        })),
      },
    });
  } catch (error) {
    return c.body("BAD REQUEST", StatusCode.BADREQ);
  }
}

export async function updatePost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body: updatePost = await c.req.json();
    const postExist = await prisma.post.findFirst({
      where: {
        id: body.id,
      },
    });
    if (!postExist) {
      return c.text("Invalid Post id", StatusCode.NOTFOUND);
    }
    const updatedPost = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title || postExist.title,
        content: body.content || postExist.content,
      },
    });
    return c.json({
      msg: "Updated Blog post details",
      posts: updatedPost,
    });
  } catch (error) {
    return c.body("BAD REQUEST", StatusCode.BADREQ);
  }
}

export async function getPostbyId(c: Context) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const postId = c.req.param("id");
      const post = await prisma.post.findFirst({
        where: {
          id: postId,
        },
      });
      if (!post) {
        return c.text("Invalid Post id", StatusCode.NOTFOUND);
      }
      return c.json({
        msg: "Blog post details",
        post: post,
      });
    } catch (error) {
      return c.body("BAD REQUEST", StatusCode.BADREQ);
    }
  }