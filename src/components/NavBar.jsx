// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-1 px-2 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-28 h-28 sm:w-32 sm:h-32"
        />
      </h1>

      {/* Navbar Text*/}
     <div className="w-full bg-blue-600 text-white text-center overflow-hidden relative">
  <div className="animate-marquee flex flex-nowrap gap-6 py-2 px-2 md:px-4 font-semibold text-sm md:text-base">
    <span className="flex-shrink-0">🚀 Effortless Attendance</span>
    <span className="flex-shrink-0">📊 Real-Time Dashboard</span>
    <span className="flex-shrink-0">🔒 Secure Login</span>
  </div>
</div>


      {/* Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/help" className="hover:underline">
          Help
        </Link>
      </div>
    </nav>
  );
}
