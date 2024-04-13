import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog | undefined }) => {
  return (
    <div className="grid grid-cols-12 w-full max-w-screen-xl px-16 pt-12 gap-4">
      <div className="col-span-8">
        <div className="text-5xl font-bold">
          {blog?.title} 
        </div>
        <div className="text-slate-500 pt-2">Posted on, 2 December 2023</div>
        <div className="py-2 max-h-lg">
            <img src={`https://source.unsplash.com/random/?${blog?.title.replace(" ",",")}`} alt="" />
        </div>
        <div className="text-lg font-normal font-serif gap-2 leading-[2rem] tracking-wider">{blog?.content}</div>
      </div>
      <div className="col-span-4">
        <div className="text-lg text-slate-700">Author</div>
        <div className="flex">
          <div className="flex flex-col justify-start p-2">
            <Avatar size="big" name={blog?.author || "Anonymous"} />
          </div>
          <div className="pt-3 px-2">
            <div className="text-xl font-semibold ">{blog?.author}</div>
            <div className="text-sm text-slate-500 pt-2">
              Wordsmith weaving tales from the heart, penning dreams into
              reality. Author of worlds unknown.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
