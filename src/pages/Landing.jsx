// src/pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">TrackIn</h1>
      <p className="text-lg text-gray-600 mb-6">Attendance Made Easy with TrackIn</p>
      
      
  <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md flex items-center justify-center">
    <img
      src="/images/landing.png"
      alt="landing"
      className="object-contain w-full h-48"
    />
  </div>


      <div className="space-x-4">
        <Link
          to="/student"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Student Login
        </Link>
        <Link
          to="/teacher"
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
        >
          Teacher Login
        </Link>
      </div>
    </div>
  );
}
