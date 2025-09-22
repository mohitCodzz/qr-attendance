// src/pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold mb-2 text-grey-600 drop-shadow-sm">Welcome to </h1>
      {/* App title */}
      <h1 className="text-5xl font-extrabold mb-2 text-blue-600 drop-shadow-sm">
        TrackIn
      </h1>

      {/* Tagline */}
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Attendance Made Easy with <span className="font-semibold">TrackIn</span>
      </p>

      {/* Landing image container */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex items-center justify-center mb-6">
        <img
          src="/images/landing.png"
          alt="Landing"
          className="w-56 sm:w-64 h-auto object-contain"
        />
      </div>

      {/* Login buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Student Login Button */}
        <Link
          to="/student"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition transform transform hover:scale-105"
        >
          Student Login
        </Link>

        {/* Teacher Login Button */}
        <Link
          to="/teacher"
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition transform hover:scale-105"
        >
          Teacher Login
        </Link>
      </div>
    </div>
  );
}
