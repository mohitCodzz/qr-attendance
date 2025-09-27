// Student Login Component

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

   // Handle login form submission for students only
  const handleLogin = (e) => {
  e.preventDefault();
  // Only student credentials allowed
  if (email === "student@trackin.com" && password === "1234") {
    navigate("/student-dashboard");
  } else {
    alert("Invalid student credentials!");
  }
};

  return (
    <div>
      
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Use student@trackin.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Use 1234"
              required
            />
          </div>
          {/* Links */}
          <div className="flex justify-between mt-6 gap-x-16">
            {/* Back to login */}
            <a href="/" className="text-sm text-blue-500 hover:underline">
              Back to Login
            </a>

            {/* Forgot Password */}
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
} 