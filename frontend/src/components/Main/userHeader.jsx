import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserHeader() {
  const navigate = useNavigate();
  const [username, SetUsername] = useState();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/user/signup");
  };
  useEffect(() => {});
  return (
    <header className="bg-green-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold mr-4">Welcome</span>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="text-white text-sm font-semibold hover:underline focus:outline-none"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
