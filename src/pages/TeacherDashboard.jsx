import React, { useState, useRef, useEffect } from "react";

// Reusable select input component for dropdowns (Department, Year, Section)
const SelectInput = ({ value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value} // Controlled component value
        onChange={onChange} // Update parent state on change
        className="w-full appearance-none bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      {/* Dropdown arrow icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.405l2.904-2.857c.436-.446 1.144-.446 1.58 0 .436.445.436 1.162 0 1.608l-3.694 3.63c-.436.446-1.144.446-1.58 0L5.516 9.156c-.436-.446-.436-1.162 0-1.608z" />
        </svg>
      </div>
    </div>
  );
};

const TeacherDashboard = () => {
  // Form states
  const [department, setDepartment] = useState(""); // Selected department
  const [year, setYear] = useState("");             // Selected year
  const [section, setSection] = useState("");       // Selected section

  // QR display state
  const [qrGenerated, setQrGenerated] = useState(false); // Whether QR image is displayed
  const qrRef = useRef(null); // Reference to QR section for auto-scrolling

  // Handle Generate QR button click
  const handleGenerateQR = () => {
    if (!department || !year || !section) {
      // NOTE: Replaced window.alert with a console log as window.alert is not supported in the live preview.
      console.log("Please select department, year, and section.");
      return;
    }
    setQrGenerated(true); // Show QR image
  };

  // Scroll down to QR image automatically when it’s displayed
  useEffect(() => {
    if (qrGenerated && qrRef.current) {
      qrRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [qrGenerated]);

  return (
         
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans px-4 py-8 relative">

      {/* Teacher Profile Section (Top Right Corner) */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
        <img
          src="../images/profile.png" // Placeholder for the profile picture
          alt="Teacher Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="flex flex-col text-sm pr-2">
          <p className="text-gray-900 font-bold">Mohit Jaryal</p>
          <p className="text-gray-500 text-xs">ID: teacher12345</p>
        </div>
      </div>

      {/* New Section: Welcome & Status */}
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Welcome back, <span className="text-blue-600">Mohit!</span> 👋
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          Here's a quick look at your day.
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8 w-full max-w-lg">
        {/* Status Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center flex-1">
          <p className="text-3xl font-bold text-blue-600">3</p>
          <p className="text-gray-500 text-sm mt-1">Classes Today</p>
        </div>
        
        {/* Status Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center flex-1">
          <p className="text-3xl font-bold text-green-600">95%</p>
          <p className="text-gray-500 text-sm mt-1">Average Attendance</p>
        </div>
      </div>
      
      {/* Main Content */}
      <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center max-w-md">
        Choose your Department, Year, and Section to create {" "}
        <span className="font-extrabold text-blue-600">QR code</span>
      </p>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col gap-4">
        {/* Department Dropdown */}
        <SelectInput
          placeholder="Select Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={["Engineering", "Arts & Sciences", "Business"]}
        />

        {/* Year Dropdown */}
        <SelectInput
          placeholder="Select Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          options={["1st Year", "2nd Year", "3rd Year", "4th Year"]}
        />

        {/* Section Dropdown */}
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
      </div>

      {/* QR Image Section Displayed after Generate QR is clicked */}
      {qrGenerated && (
        <div
          ref={qrRef} // Scroll target
          className="mt-8 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center"
        >
          {/* QR Label */}
          <p className="text-center text-gray-700 font-medium mb-4">
            QR Code for {department}, {year}, {section}
          </p>

          {/* QR image */}
          <img
            src="https://placehold.co/192x192/000000/FFFFFF?text=QR"
            alt="QR Code"
            className="w-48 h-48 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;