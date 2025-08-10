import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isMobile }) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav
      className={`${
        isMobile ? "flex flex-col space-y-3" : "flex items-center gap-6"
      }`}
    >
      <Link
        to="/"
        className="text-white hover:text-blue-400 transition font-medium"
      >
        Home
      </Link>

      {isLogin ? (
        <>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Logout
          </button>
          <Link
            to="/check-vehicle"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Book Vehicle
          </Link>
          <Link
            to="/add-vehicle"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Add Vehicle
          </Link>
          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Dashboard
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
