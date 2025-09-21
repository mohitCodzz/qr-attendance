// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-1 px-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        <img
          src="/images/favicon.png"
          alt="Logo"
          className="w-28 h-28 sm:w-32 sm:h-32"
        />
      </h1>

      {/* Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/help" className="hover:underline">Help</Link>
      </div>
    </nav>
  );
}
