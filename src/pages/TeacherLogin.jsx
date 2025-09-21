// src/pages/TeacherLogin.jsx
import AttendanceList from "../components/AttendanceList";

export default function TeacherLogin() {
  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      <AttendanceList />
    </div>
  );
}
        