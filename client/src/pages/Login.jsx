import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post(
        "https://vision-codecrafter2-0.onrender.com/api/user/login",
        {
          email: formData.email,
          password: formData.password
        },
        {
withCredentials :true
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      // With axios, the response data is already available as response.data
      const data = response.data;
      console.log(data)
      dispatch(setUser(data.user))
  
      // Axios handles non-2xx responses as errors, so if we get here, it was successful
      setSuccess("Login successful!");
      
      if (data?.user?.role === 'User') {
        navigate("/dashboard");
      } else if (data?.user?.role === 'Admin') {
        navigate("/admin/dashboard");
      }
      
      
    } catch (err) {
      // Error handling for axios
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
    }
  
    setIsLoading(false);
  };


  return (
    <div className="relative flex items-center justify-center bg-[#3C096C] h-screen bg-cover bg-center overflow-hidden ">
      {/* {success && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white text-center text-2xl py-4 z-50 animate-pulse">
          {success}
        </div>
      )}
      {error && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center text-2xl py-4 z-50 animate-pulse">
          {error}
        </div>
      )} */}

      <div className="flex flex-wrap w-4/12  max-w-5xl bg-[#EDD6FF] rounded-lg shadow-lg overflow-hidden">
        <div className="w-full p-8 flex flex-col justify-center overflow-hidden">
          <div className="ml-10">
          <h2 className="text-3xl font-bold text-[#7B2CBF] mb-6 ">
            Welcome to VisionInvest
          </h2>
          </div>
          <form 
          
          className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                // id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EDD6FF] focus:border-[#EDD6FF] text-sm"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#EDD6FF] focus:border-[#EDD6FF] text-sm"
                placeholder="Enter A Strong Password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#5A189A] text-white font-medium rounded-lg text-sm px-5 py-3 hover:bg-[#240046] focus:ring-4 focus:ring-[#EDD6FF] flex items-center justify-center"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <a
              onClick={() => navigate("/signup")}
              className="text-[#5A189A] hover:underline font-medium cursor-pointer"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
