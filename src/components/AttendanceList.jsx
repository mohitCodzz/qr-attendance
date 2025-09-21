// src/components/AttendanceList.jsx
import { getAttendanceList } from "../utils/api";

export default function AttendanceList() {
  const attendanceList = getAttendanceList();

  return (
    <div className="w-full max-w-md bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Attendance List</h2>
      <ul className="list-disc list-inside">
        {attendanceList.length === 0 && <li>No attendance marked yet.</li>}
        {attendanceList.map((id, idx) => (
          <li key={idx}>{id}</li>
        ))}
      </ul>
    </div>
  );
}
