import React, { useState, useRef, useEffect } from "react";

// Reusable select input component for dropdowns (Department, Year, Section)
const SelectInput = ({ value, onChange, options, placeholder, error }) => {
  return (
    <div className="relative mb-1">
      <select
        value={value} // Controlled component value
        onChange={onChange} // Update parent state on change
        className={`w-full appearance-none bg-white border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
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

      {/* Dropdown arrow icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.405l2.904-2.857c.436-.446 1.144-.446 1.58 0 .436.445.436 1.162 0 1.608l-3.694 3.63c-.436.446-1.144.446-1.58 0L5.516 9.156c-.436-.446-.436-1.162 0-1.608z" />
        </svg>
      </div>

      {/* Inline error message if field not selected */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

const TeacherDashboard = () => {
  // Form states
  const [department, setDepartment] = useState(""); // Selected department
  const [session, setSession] = useState(""); // Selected session
  const [year, setYear] = useState(""); // Selected year
  const [section, setSection] = useState(""); // Selected section

  // Error states for validation
  const [errors, setErrors] = useState({}); // Store errors for each field

  // QR display state
  const [qrGenerated, setQrGenerated] = useState(false); // Whether QR image is displayed
  const qrRef = useRef(null); // Reference to QR section for auto-scrolling

  // Timer state in seconds
  const [timeLeft, setTimeLeft] = useState(0); 

  // NEW: Track if QR has expired
  const [qrExpired, setQrExpired] = useState(false);

  // Handle Generate QR button click
  const handleGenerateQR = () => {
    const newErrors = {};

    // Validate each dropdown
    if (!department) newErrors.department = "Please select a department.";
    if (!session) newErrors.session = "Please select a session.";
    if (!year) newErrors.year = "Please select a year.";
    if (!section) newErrors.section = "Please select a section.";

    setErrors(newErrors);

    // Stop if there are errors
    if (Object.keys(newErrors).length > 0) return;

    // If valid, generate QR and start 5-min timer
    setQrGenerated(true);
    setTimeLeft(300); // 5 minutes = 300 seconds
    setQrExpired(false); // Reset expired status
  };

  // Countdown effect
  useEffect(() => {
    if (qrGenerated && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && qrGenerated) {
      // QR expired: hide QR and mark as expired
      setQrGenerated(false);
      setQrExpired(true);
    }
  }, [qrGenerated, timeLeft]);

  // Scroll to QR when generated
  useEffect(() => {
    if (qrGenerated && qrRef.current) {
      qrRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [qrGenerated]);

  // Format seconds into mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans px-4 py-8 relative">
      {/* Teacher Profile Section */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
        <img
          src="../images/profile.png"
          alt="Teacher Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="flex flex-col text-sm pr-2">
          <p className="text-gray-900 font-bold">Rahul Sharma</p>
          <p className="text-gray-500 text-xs">ID: teacher12345</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Welcome back, <span className="text-blue-600">Rahul Sharma!</span> 👋
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          Here's a quick look at your day.
        </p>
      </div>

      {/* Current Class Info */}
      <div className="w-full max-w-lg mx-auto mb-6 text-center">
        <p className="text-xl font-semibold text-gray-700">
          Currently it’s your <span className="text-blue-600">Java</span> class
        </p>
        <p className="text-gray-500 mt-1">
          Teacher: <span className="font-medium text-green-600">Mr. Rahul Sharma</span>
        </p>
      </div>

      {/* Status Cards */}
      <div className="flex justify-center gap-6 mb-8 w-full max-w-lg">
        <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center flex-1">
          <p className="text-3xl font-bold text-blue-600">3</p>
          <p className="text-gray-500 text-sm mt-1">Classes Today</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center flex-1">
          <p className="text-3xl font-bold text-green-600">95%</p>
          <p className="text-gray-500 text-sm mt-1">Average Attendance</p>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center max-w-md">
        Choose your Department, Year, and Section to create{" "}
        <span className="font-extrabold text-blue-600">QR code</span>
      </p>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col gap-4">
        <SelectInput
          placeholder="Select Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={["Engineering", "Arts & Sciences", "Business"]}
          error={errors.department}
        />
        <SelectInput
          placeholder="Select Session"
          value={session}
          onChange={(e) => setSession(e.target.value)}
          options={["2023-2027", "2024-2028", "2025-2029"]}
          error={errors.session}
        />
        <SelectInput
          placeholder="Select Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          options={["1st Year", "2nd Year", "3rd Year", "4th Year"]}
          error={errors.year}
        />
        <SelectInput
          placeholder="Select Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          options={["Section M1", "Section M2", "Section M3"]}
          error={errors.section}
        />

        {/* Generate QR Button */}
        <button
          onClick={handleGenerateQR}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg mt-2 hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Generate QR
        </button>
      </div>

      {/* QR Code Section with 5-min timer */}
      {qrGenerated && (
        <div
          ref={qrRef}
          className="mt-8 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center"
        >
          <p className="text-center text-gray-700 font-medium mb-4">
            QR Code for {department}, {session}, {year}, {section}
          </p>

          <img
            src="../images/qr-code.png"
            alt="QR Code"
            className="w-48 h-48 object-contain mb-4"
          />

          {/* Countdown Timer */}
          <p className="text-red-600 font-semibold text-lg">
            Hurry up! QR valid for: {formatTime(timeLeft)}
          </p>
        </div>
      )}

      {/* NEW: Message when QR actually expires */}
      {qrExpired && (
        <p className="mt-4 text-red-600 font-bold">
          QR expired! Please generate a new one.
        </p>
      )}
    </div>
  );
};

export default TeacherDashboard;
