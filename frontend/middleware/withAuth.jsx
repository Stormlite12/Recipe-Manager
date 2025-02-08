import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null to represent loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "https://recipe-manager-backend-3oz9.onrender.com/api/auth/checkAuth",
          {
            withCredentials: true, // Ensures cookies are sent automatically
          }
        );

        setIsLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoggedIn === null) return <div>Loading...</div>; // Show a loading state

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
