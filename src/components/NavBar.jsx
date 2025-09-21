// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="ext-xl sm:text-2xl md:text-3xl font-bold">TalkIn</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/student" className="hover:underline">About</Link>
        <Link to="/teacher" className="hover:underline">Help</Link>
      </div>
    </nav>
  );
}
