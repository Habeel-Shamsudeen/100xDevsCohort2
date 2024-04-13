import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog{
    id:string;
    title:string;
    author:string;
    content:string;
    publishedDate:string;
    imgTag?:string|undefined;
}

export const useBlog=({id}:{id:string|undefined})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    async function getBlog(id:undefined|string) {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization:"Bearer "+localStorage.getItem("token"),
          },
        });
        setBlog(response.data.post);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    }
    useEffect(() => {
      getBlog(id);
    }, []);
    return {
      loading,
      blog,
    };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  async function getBlogs() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization:"Bearer "+localStorage.getItem("token"),
        },
      });
      setBlogs(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);
  return {
    loading,
    blogs,
  };
};
