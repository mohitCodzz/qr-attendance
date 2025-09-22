// Student Dashboard component - QR and all

import React, { useState } from 'react';
import StudentLogin from './StudentLogin';

// A reusable dropdown component for a cleaner look
const SelectInput = ({ label, value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 px-4 pr-8 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
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


const AttendanceForm = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState('settings');

  // State for form inputs
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('Computer Science'); // Pre-filled value
  const [year, setYear] = useState('4th Year'); // Pre-filled value
  const [section, setSection] = useState('Section A'); // Pre-filled value

  const handleNext = () => {
    // Handle the form submission logic here
    alert(`Settings Saved:\nDepartment: ${department}\nCourse: ${course}\nYear: ${year}\nSection: ${section}`);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">

        {/* Tab Buttons */}
        <div className="flex mb-6 rounded-lg bg-gray-200 p-1">
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-1/2 p-2 rounded-md text-sm font-semibold transition-colors duration-300 ${
              activeTab === 'settings' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
            }`}
          >
            Attendance Settings
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`w-1/2 p-2 rounded-md text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'qr' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
            }`}
          >
            Generate QR
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
            </svg>
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          <SelectInput
            placeholder="Select Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            options={['Engineering', 'Arts & Sciences', 'Business']}
          />
          <SelectInput
            placeholder="Select Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            options={['Computer Science', 'Information Technology', 'Electronics']}
          />
          <SelectInput
            placeholder="Select Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            options={['1st Year', '2nd Year', '3rd Year', '4th Year']}
          />
          <SelectInput
            placeholder="Select Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            options={['Section A', 'Section B', 'Section C']}
          />

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
          >
            Next
          </button>
        </form>

      </div>
    </div>
  );
};

export default AttendanceForm;