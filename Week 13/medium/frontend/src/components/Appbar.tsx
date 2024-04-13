import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-6 py-3 border-b">
      <div className="flex flex-col justify-center">
        <Link to={"/blogs"}>
          <div className="text-lg font-bold">Medium</div>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex justify-center">
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2"
            onClick={()=>navigate('/publish')}>
            New
          </button>
        </div>
        <div className="flex justify-center flex-col">
        <button
          className="text-red-500 font-medium text-lg hover:text-red-400"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        >
          Log out
        </button>
        </div>
        <Avatar name="Habeel" size="big" />
      </div>
    </div>
  );
};
