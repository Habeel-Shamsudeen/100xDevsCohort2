import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    return (
      <div>
        <Appbar/>
        <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
          <Spinner/>  
        </div>
      </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <FullBlog blog={blog}/>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
        <div className="pl-12 mt-12">
        <Footer/> 
        </div>
      </div>
    </div>
  );
};
