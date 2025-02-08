import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("accessToken");
      console.log("Token:", token); // Debug log

      try {
        const response = await axios.get(
          "https://recipe-manager-backend-7ulo.onrender.com/api/auth/checkAuth",
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Auth response:", response.data); // Debug log

        if (response.data.isAuthenticated) {
          setIsLoggedIn(true);
          console.log("I'm logged in");
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log("Auth check failed:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://recipe-manager-backend-7ulo.onrender.com/api/auth/logout",
        {},
        { withCredentials: true }
      );
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const closeProfileDropdown = (e) => {
    if (e.target.closest("#profileButton")) return;
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeProfileDropdown);
    return () => {
      document.removeEventListener("click", closeProfileDropdown);
    };
  }, []);

  const handleNavigation = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                {" "}
                <span className="text-2xl font-bold">RecipeHub</span>
              </Link>
            </div>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700"
                onClick={() => handleNavigation("/recipes")}
              >
                My Recipes
              </button>
              <button
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700"
                onClick={() => navigate("/public")}
              >
                Public Recipes
              </button>
              <div className="relative ml-3">
                {isLoggedIn ? (
                  <>
                    <button
                      id="profileButton"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700"
                      onClick={toggleProfileDropdown}
                    >
                      <span>Profile</span>
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="profileDropdown"
                      className={`${
                        isProfileDropdownOpen ? "" : "hidden"
                      } absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5`}
                    >
                      <div className="py-1">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm hover:bg-neutral-700"
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-neutral-700"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden">
            <button
              id="mobileMenuButton"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className="mobile-menu-icon"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div
        id="mobileMenu"
        className={`${
          isMobileMenuOpen ? "" : "hidden"
        } md:hidden bg-neutral-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
          >
            Home
          </Link>
          <button
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            onClick={() => handleNavigation("/recipes")}
          >
            My Recipes
          </button>
          <button
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            onClick={() => handleNavigation("/public")}
          >
            Public Recipes
          </button>
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
