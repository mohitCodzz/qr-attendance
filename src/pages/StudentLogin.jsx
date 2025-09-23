// src/pages/TeacherLogin.jsx
import AttendanceList from "../components/StudentLogin";

export default function TeacherLogin() {
  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
      <AttendanceList />
    </div>
  );
}
        