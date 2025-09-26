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
      <div className="w-full bg-blue-600 text-white text-center overflow-hidden relative py-2">
        {/* Marquee */}
        <div className="marquee flex gap-6 whitespace-nowrap px-4">
          <span className="marquee-item">🚀 Effortless Attendance</span>
          <span className="marquee-item">📊 Real-Time Dashboard</span>
          <span className="marquee-item">🔒 Secure Login</span>
          <span className="marquee-item">📈 Instant Reports</span>
          <span className="marquee-item">⚡ Fast Performance</span>
          <span className="marquee-item">🔗 Easy Integration</span>
          <span className="marquee-item">🛡️ Data Security</span>
          {/* Repeat for seamless scroll */}
          <span className="marquee-item">🚀 Effortless Attendance</span>
          <span className="marquee-item">📊 Real-Time Dashboard</span>
          <span className="marquee-item">🔒 Secure Login</span>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-blue-600 via-blue-600/50 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-blue-600 via-blue-600/50 to-transparent pointer-events-none"></div>
      </div>

      <style>
        {`
  @keyframes marquee-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes float-scale {
    0%, 100% { transform: translateY(0) scale(1); }
    25% { transform: translateY(-3px) scale(1.05); }
    50% { transform: translateY(2px) scale(1); }
    75% { transform: translateY(-2px) scale(1.03); }
  }

  .marquee {
    display: inline-flex;
    animation: marquee-scroll 20s linear infinite;
  }

  .marquee-item {
    flex-shrink: 0;
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0 1rem;
    white-space: nowrap;
    animation: float-scale 4s ease-in-out infinite;
    transition: transform 0.3s ease;
  }

  .marquee:hover {
    animation-play-state: paused;
  }
`}
      </style>

      {/* Links */}
      <div className="space-x-4">
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
