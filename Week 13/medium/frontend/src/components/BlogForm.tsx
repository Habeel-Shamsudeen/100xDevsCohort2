import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BlogForm = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const submitBlog = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title: post.title,
          content: post.content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setPost(() => ({
        title: "",
        content: "",
      }));
      navigate(`/blog/${response.data.postDetail.id}`);
    } catch (error) {
      alert("Error while posting blog");
    }
  };
  return (
    <div>
      <div className="grid max-w-sm md:max-w-xl gap-4 mx-auto">
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="title">
            Title
          </label>
          <input
            className="text-4xl font-bold h-12 border-0 overflow-auto max-w-sm md:max-w-xl border-b border-gray-200 appearance-none bg-transparent focus:outline-none focus:border-gray-100"
            id="title"
            placeholder="Enter your title"
            style={{
              wordBreak: "break-word",
            }}
            type="text"
            value={post.title}
            onChange={(e) => {
              setPost((c) => ({
                ...c,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="content">
            Content
          </label>
          <textarea
            className="text-lg md:text-md font-normal font-serif gap-2 leading-[2rem] tracking-wider h-32 w-3/4 border-0 border-b border-gray-200 appearance-none bg-transparent focus:outline-none focus:border-gray-100 dark:border-gray-800 dark:focus:border-gray-850"
            id="content"
            placeholder="Enter your content"
            style={{
              wordBreak: "break-word",
            }}
            value={post.content}
            onChange={(e) => {
              setPost((c) => ({
                ...c,
                content: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <button
            className="bg-green-400 text-white py-2 px-4 font-medium rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 "
            onClick={submitBlog}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
