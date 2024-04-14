import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="flex justify-between px-6 py-3 border-b">
      <div className="flex flex-col justify-center">
        <Link to={"/blogs"}>
          <div className="text-2xl font-bold">Medium</div>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex justify-center">
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => navigate("/publish")}
          >
            New
          </button>
        </div>
        <div className="relative">
          <Avatar name="Anonymous" size="big" onClick={handleAvatarClick} />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10 hover:bg-red-400">
              <button
                className="block w-full text-left px-4 py-2 text-red-500 font-medium hover:text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
