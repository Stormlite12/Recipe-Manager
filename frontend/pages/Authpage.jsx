import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Button = ({ className, ...props }) => (
  <button
    className={`px-4 py-2 rounded transition-all duration-300 ${className}`}
    {...props}
  />
);

Button.propTypes = {
  className: PropTypes.string,
};

const Input = ({ className, ...props }) => (
  <input
    className={`w-full p-2 rounded transition-all duration-300 ${className}`}
    {...props}
  />
);

Input.propTypes = {
  className: PropTypes.string,
};

const Label = ({ className, ...props }) => (
  <label className={`block mb-1 ${className}`} {...props} />
);

Label.propTypes = {
  className: PropTypes.string,
};

const Card = ({ className, ...props }) => (
  <div className={`bg-card-bg rounded-lg ${className}`} {...props} />
);

Card.propTypes = {
  className: PropTypes.string,
};

const CardHeader = ({ className, ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

CardHeader.propTypes = {
  className: PropTypes.string,
};

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

CardContent.propTypes = {
  className: PropTypes.string,
};

const CardFooter = ({ className, ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

CardFooter.propTypes = {
  className: PropTypes.string,
};

const CardTitle = ({ className, ...props }) => (
  <h2 className={`text-2xl font-bold ${className}`} {...props} />
);

CardTitle.propTypes = {
  className: PropTypes.string,
};

const CardDescription = ({ className, ...props }) => (
  <p className={`text-sm ${className}`} {...props} />
);

CardDescription.propTypes = {
  className: PropTypes.string,
};

const Tabs = ({ children }) => <div>{children}</div>;

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

const TabsList = ({ className, ...props }) => (
  <div className={`flex ${className}`} {...props} />
);

TabsList.propTypes = {
  className: PropTypes.string,
};

const TabsTrigger = ({ className, isActive, ...props }) => (
  <button
    className={`flex-1 p-2 transition-all duration-300 ${
      isActive ? "bg-emerald-500 text-[#121212]" : ""
    } ${className}`}
    {...props}
  />
);

TabsTrigger.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
};

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email address";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    if (!isLogin && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const checkAuthStatus = async () => {
    const token = Cookies.get("accessToken");
    try {
      const response = await axios.get(`/auth/checkAuth`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.status === 200;
    } catch (error) {
      console.log("Auth check failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const url = isLogin
        ? `https://recipe-manager-backend-7ulo.onrender.com/api/auth/login`
        : `https://recipe-manager-backend-7ulo.onrender.com/api/auth/register`;
      const body = { email, password };

      try {
        if (!isLogin) navigate("/");
        const response = await axios.post(url, body, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        if (response.status === 200) {
          // Store token if received
          if (response.data.token) {
            Cookies.set("accessToken", response.data.token);
          }
          console.log("Cookies after login:", Cookies.get());
          // Force auth check before redirect
          await checkAuthStatus();
          navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({
          ...errors,
          form: error.response?.data?.message || "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212] p-4">
      <Card className="w-full max-w-md border border-[#00C853]/20 shadow-[0_0_20px_rgba(0,200,83,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,83,0.3)]">
        <Tabs>
          <TabsList className="grid w-full grid-cols-2 bg-[#121212] p-1 border-b border-[#00C853]/20">
            <TabsTrigger
              isActive={isLogin}
              onClick={() => setIsLogin(true)}
              className="transition-all duration-300"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              isActive={!isLogin}
              onClick={() => setIsLogin(false)}
              className="transition-all duration-300"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <CardHeader className="border-b border-[#00C853]/20">
            <CardTitle className="text-[#FFFFFF]">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-[#A0A0A0]">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Create an account to get started"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#A0A0A0]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#00C853]/20 bg-[#121212] text-[#FFFFFF] placeholder:text-[#A0A0A0] focus:border-[#00C853] focus:ring-[#00C853] transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-sm text-emerald-500">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#A0A0A0]">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-[#00C853]/20 bg-[#121212] text-[#FFFFFF] focus:border-[#00C853] focus:ring-[#00C853] transition-all duration-300"
                  />
                  <Button
                    type="button"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-[#A0A0A0] hover:text-[#FFFFFF] transition-all duration-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-emerald-500">{errors.password}</p>
                )}
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-[#A0A0A0]">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border border-[#00C853]/20 bg-[#121212] text-[#FFFFFF] focus:border-[#00C853] focus:ring-[#00C853] transition-all duration-300"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-emerald-500">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-emerald-500 text-[#121212] hover:bg-emerald-500/90 border border-[#00C853] transition-all duration-300 transform hover:scale-105"
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-[#00C853]/20 p-6">
            <p className="text-sm text-[#A0A0A0]">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <Button
                className="h-auto p-0 font-normal text-emerald-500 hover:text-emerald-500/90 transition-all duration-300"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Login"}
              </Button>
            </p>
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthPage;
