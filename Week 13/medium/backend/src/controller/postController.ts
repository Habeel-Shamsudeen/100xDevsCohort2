import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { createBlogInput, updateBlogInput } from "@habee1_/medium-common";

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
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        msg: "Inputs not correct",
      });
    }
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
      posts: posts.map((post) => ({
        title: post.title,
        content: post.content,
        id: post.id,
        author: post.author.name,
      })),
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
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        msg: "Inputs not correct",
      });
    }
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
    const postId: string = c.req.param("id");
    const post = await prisma.post.findFirst({
      where: {
        id: postId,
      },
      include: {
        author: true,
      },
    });
    if (!post) {
      return c.text("Invalid Post id", StatusCode.NOTFOUND);
    }
    return c.json({
      msg: "Blog post details",
      post: {
        title: post.title,
        content: post.content,
        id: post.id,
        author: post.author.name,
      },
    });
  } catch (error) {
    return c.body("BAD REQUEST", StatusCode.BADREQ);
  }
}

export async function deletePost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogId =c.req.param("id");
    const authUserId = c.get("userId");
    const oldBlog = await prisma.post.findFirst({
      where: {
        id: blogId,
      },
    });
    if (!oldBlog) {
      return c.body("Blog post not Found", StatusCode.NOTFOUND);
    }
    if (authUserId !== oldBlog?.authorId) {
      return c.body(
        "User not authorized to delete the selected post",
        StatusCode.NOTPERMISSIOON
      );
    }
    const deleteBlog = await prisma.post.delete({
      where: {
        id: blogId,
      },
      include: {
        author: true,
      },
    });
    return c.json({
      msg: "Successfully deleted Blog",
      post: {
        id: deleteBlog.id,
        title: deleteBlog.title,
        authorId: deleteBlog.authorId,
        author: deleteBlog.author.name,
      },
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}
