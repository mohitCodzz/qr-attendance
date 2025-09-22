// src/pages/AttendanceForm.jsx
import React, { useState } from "react";

// Reusable select input component
const SelectInput = ({ value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 px-4 pr-8 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Arrow Icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.405l2.904-2.857c.436-.446 1.144-.446 1.58 0 .436.445.436 1.162 0 1.608l-3.694 3.63c-.436.446-1.144.446-1.58 0L5.516 9.156c-.436-.446-.436-1.162 0-1.608z" />
        </svg>
      </div>
    </div>
  );
};

const AttendanceForm = () => {
  // Form states
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("Computer Science");
  const [year, setYear] = useState("4th Year");
  const [section, setSection] = useState("Section A");

  // QR Scanner state
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState("");

  // Handle form "Next" button
  const handleNext = () => {
    alert(
      `Settings Saved:\nDepartment: ${department}\nCourse: ${course}\nYear: ${year}\nSection: ${section}`
    );
  };

  // Handle Scan button click
  const handleScanClick = () => {
    setScannerOpen(true); // open QR scanner
  };

  // QR scan callback
  const handleScan = (result, error) => {
    if (!!result) {
      setScanResult(result?.text || ""); // get scanned QR text
      setScannerOpen(false); // close scanner automatically
      alert(`QR Code Scanned: ${result?.text}`);
    }
    if (!!error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans">
      {/* Message */}
      <p className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-md">
        Attendance Made Easy with{" "}
        <span className="font-extrabold text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
          TrackIn
        </span>
      </p>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex items-center justify-center mb-6">
        <img
          src="/images/scanningQR.png"
          alt="Landing"
          className="w-56 sm:w-64 h-auto object-contain"
        />
      </div>
      <div>
        {/* Scan QR Code Button */}
        <button
          onClick={handleScanClick}
          className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Scan QR Code
        </button>

        {/* QR Scanner */}
        {scannerOpen && (
          <div className="mt-4">
            <QrReader
              constraints={{ facingMode: "environment" }}
              onResult={handleScan}
              style={{ width: "100%" }}
            />
          </div>
        )}

        {/* Display scanned result */}
        {scanResult && (
          <p className="mt-2 text-center text-blue-600 font-medium">
            Scanned: {scanResult}
          </p>
        )}
      </div>
    </div>
  );
};

export default AttendanceForm;
