import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  imgTag?: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
  imgTag = "",
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b p-4 grid grid-cols-12 max-w-3xl gap-4 mt-2">
        <div className="col-span-7 sm:col-span-9">
          <div className="flex">
            <div>
              <Avatar name={authorName} />
            </div>
            <div className="font-medium pl-2 text-sm flex flex-col justify-center">
              {authorName}
            </div>
            <div className="font-thin pl-2 text-slate-500 font-serif text-sm flex flex-col justify-center">
              &middot; {publishedDate}
            </div>
          </div>
          <div className="text-xl font-semibold pt-2">{title}</div>
          <div className="hidden text-md font-thin font-serif max-w-xl sm:block">
            {content.length > 200 ? content.slice(0, 200) + "..." : content}
          </div>
          <div className="text-slate-500 font-thin font-mono text-sm pt-4">{`${Math.ceil(
            content.length / 500
          )} min read`}</div>
        </div>
        <div className="col-span-5 sm:col-span-3">
          <div>
            <img
              src={`https://source.unsplash.com/random/?${imgTag}`}
              alt=""
              className="p-1 h-32 w-40 sm:h-40 sm:w-48"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
  onClick,
}: {
  name: string;
  size?: "big" | "small";
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full focus:ring-4 focus:ring-slate-700 ${
        size === "big" ? "w-10 h-10" : "w-6 h-6"
      }`}
    >
      <span
        className={`font-normal text-gray-600 ${
          size === "big" ? "text-xl" : "text-base"
        }`}
      >
        {name[0]}
      </span>
    </div>
  );
}
