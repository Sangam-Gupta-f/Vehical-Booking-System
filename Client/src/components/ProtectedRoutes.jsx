import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({children}) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if (!token) {
        navigate("/login");
        return;
    }
  return children;
}

export default ProtectedRoutes