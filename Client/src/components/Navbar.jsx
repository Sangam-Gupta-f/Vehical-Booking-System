import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(()=>{
    if(token) {
      setIsLogin(true);  
    }
  }, [token]);

  return (
    <nav className="flex justify-end items-center gap-6 py-4">
      <Link
        to="/"
        className="text-white hover:text-blue-400 transition font-medium"
      >
        Home
      </Link>

      {token ? (
        <>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
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
