import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

export async function getAllPosts(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const res = await prisma.posts.findMany({
      include: { author: true, tags: true },
    });
    if (!res) {
      return c.body(`Unable to fetch data`, StatusCode.NOTFOUND);
    }
    if (res.length === 0) {
      return c.body("No Blogs posted yet...");
    }
    return c.json({
      posts: res.map((posts) => ({
        id: posts.id,
        title: posts.title,
        body: posts.body,
        createdAt: posts.createdAt,
        authorName: posts.author.username,
        authorId: posts.authorId,
        tags: posts.tags.map((tag) => tag.tag),
      })),
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}

export async function createPost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const Blog: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();
    const userId = c.get("userId");
    const tagName = Blog.tags.split(",").map((tag) => tag.trim());
    const newPost = await prisma.posts.create({
      data: {
        title: Blog.title,
        body: Blog.body,
        authorId: userId,
        tags: {
          connectOrCreate: tagName.map((tag) => ({
            where: { tag },
            create: { tag },
          })),
        },
      },
      include: {
        author: true,
        tags: true,
      },
    });
    return c.json({
      msg: "New post created",
      post: {
        id: newPost.id,
        title: newPost.title,
        body: newPost.body,
        authorId: newPost.authorId,
        author: newPost.author.username,
        createDate: newPost.createdAt,
        tags: newPost.tags.map((tag) => tag.tag),
      },
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}

export async function getPost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.posts.findFirst({
      where: {
        id: Number(c.req.param("id")),
      },
      include: {
        author: true,
        tags: true,
      },
    });
    if (!post) {
      return c.body("Post not found", StatusCode.NOTFOUND);
    }
    return c.json({
      msg: "Post Details",
      post: {
        id: post.id,
        title: post.title,
        body: post.body,
        authorId: post.authorId,
        author: post.author.username,
        createDate: post.createdAt,
        tags: post.tags.map((tag) => tag.tag),
      },
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}

export async function updatePost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const updatedBlogData: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();
    const tagName = updatedBlogData.tags.split(",").map((tag) => tag.trim());
    const blogId = Number(c.req.param("id"));
    const authUserId = c.get("userId");
    const oldBlog = await prisma.posts.findFirst({
      where: {
        id: blogId,
      },
    });
    if (!oldBlog) {
      return c.body("Blog post not Found", StatusCode.NOTFOUND);
    }
    if (authUserId !== oldBlog?.authorId) {
      return c.body(
        "User not authorized to Update the given post",
        StatusCode.NOTPERMISSIOON
      );
    }
    const updatedBlog = await prisma.posts.update({
      where: {
        id: blogId,
      },
      data: {
        title: updatedBlogData.title,
        body: updatedBlogData.body,
        tags: {
          connectOrCreate: tagName.map((tag) => ({
            where: { tag },
            create: { tag },
          })),
        },
      },
      include: {
        author: true,
        tags:true
      },
    });
    return c.json({
      msg: "updated Blog Details",
      post: {
        id: updatedBlog.id,
        title: updatedBlog.title,
        body: updatedBlog.body,
        authorId: updatedBlog.authorId,
        author: updatedBlog.author.username,
        createDate: updatedBlog.createdAt,
        tags: updatedBlog.tags.map((tag) => tag.tag),
      },
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}

export async function deletePost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogId = Number(c.req.param("id"));
    const authUserId = c.get("userId");
    const oldBlog = await prisma.posts.findFirst({
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
    const deleteBlog = await prisma.posts.delete({
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
        author: deleteBlog.author.username,
      },
    });
  } catch (error) {
    return c.body(`Internal Server error :${error}`, 500);
  }
}
