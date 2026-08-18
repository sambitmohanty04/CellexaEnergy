import React, { useState } from "react";
import API_URL from "../service/api";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  console.log(setError)
  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await API_URL.post("/users", {
        username,
        password,
      });
      console.log(response.data);
      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/");
        setUsername("")
        setPassword("")
      }, 1000);

    } catch (error: unknown) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Cellexa Energy
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to your account
          </p>
        </div>

        {message && (
          <div className="mb-5 p-3 rounded-lg bg-green-100 text-green-700 text-center">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-5 p-3 rounded-lg bg-red-100 text-red-700 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          {/* Username */}
          <div className="mb-5">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Password */}
          <div className="mb-6">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Remember / Forgot */}
          <div className="flex justify-between items-center mb-6">

            <label className="flex items-center text-sm text-gray-600">

              <input
                type="checkbox"
                className="mr-2"
              />

              Remember me

            </label>


            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </a>

          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
            font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          © 2026 Cellexa Energy. All rights reserved.
        </p>

      </div>

    </div>
  );
};

export default Login;