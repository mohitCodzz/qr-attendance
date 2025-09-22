// src/pages/StudentDashboard.jsx

import React, { useState } from "react";

// Reusable select input component
const SelectInput = ({ value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {/* Arrow Icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.405l2.904-2.857c.436-.446 1.144-.446 1.58 0 .436.445.436 1.162 0 1.608l-3.694 3.63c-.436.446-1.144.446-1.58 0L5.516 9.156c-.436-.446-.436-1.162 0-1.608z" />
        </svg>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  // Form states
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  // QR generation state
  const [qrGenerated, setQrGenerated] = useState(false);

  // Handle QR generation
  const handleGenerateQR = () => {
    if (!department || !year || !section) {
      alert("Please select department, year, and section.");
      return;
    }
    setQrGenerated(true); // Show QR generated message / logic
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans px-4">
      {/* Heading */}
      <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center max-w-md">
        Generate QR to mark Attendence for your {" "}
        <span className="font-extrabold text-blue-600">
          Class
        </span>
      </p>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col gap-4">
        {/* Department */}
        <SelectInput
          placeholder="Select Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={["Engineering", "Arts & Sciences", "Business"]}
        />

        {/* Year */}
        <SelectInput
          placeholder="Select Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          options={["1st Year", "2nd Year", "3rd Year", "4th Year"]}
        />

        {/* Section */}
        <SelectInput
          placeholder="Select Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          options={["Section A", "Section B", "Section C"]}
        />

        {/* Generate QR Button */}
        <button
          onClick={handleGenerateQR}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg mt-2 hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Generate QR
        </button>

        {/* QR Generated Message */}
        {qrGenerated && (
          <p className="mt-4 text-center text-green-600 font-medium">
            QR Code Generated for {department}, {year}, {section}!
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
