// src/pages/StudentLogin.jsx
import { useState, useEffect } from "react";
import QRScanner from "../components/QRScanner";
import { markAttendance, getAttendanceList } from "../utils/api";

export default function StudentLogin() {
  const [attendanceList, setAttendanceList] = useState([]);

  // Load attendance list on component mount
  useEffect(() => {
    setAttendanceList(getAttendanceList());
  }, []);

  const handleScan = (studentId) => {
    if (!studentId) return; // safety check

    markAttendance(studentId); // mark attendance in backend / storage
    const updatedList = getAttendanceList(); // get updated list
    setAttendanceList(updatedList); // update state
    alert(`Attendance marked for ID: ${studentId}`);
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Student QR Scan</h1>
      <QRScanner onScan={handleScan} />
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Marked Attendance</h2>
        <ul className="list-disc list-inside bg-gray-100 p-4 rounded">
          {attendanceList.length === 0 && <li>No attendance marked yet.</li>}
          {attendanceList.map((id, idx) => (
            <li key={idx}>{id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
