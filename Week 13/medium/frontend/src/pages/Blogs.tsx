import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Footer } from "../components/Footer";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
     <div>
      <Appbar/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
     </div> 
    );
  }
  return (
    <div>
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            {blogs.map((blog) => (
              <BlogCard
                id={blog.id}
                authorName={blog.author}
                title={blog.title}
                content={blog.content}
                publishedDate="12th December 2024"
                imgTag={blog.title.replace(" ",",")}
              />
            ))}
          </div>
        </div> 
      </div>
      <div className="pl-12 my-12">
        <Footer/> 
        </div>
    </div>
  );
};
