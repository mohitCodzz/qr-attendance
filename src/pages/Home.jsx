// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        QR Attendance System
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Mark your attendance easily by scanning a QR code. Fast, secure, and
        hassle-free.
      </p>
      <Link
        to="/attendance"
        className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
      >
        Go to Attendance
      </Link>
    </div>
  );
}
