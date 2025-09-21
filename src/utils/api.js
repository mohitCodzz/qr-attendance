// src/utils/api.js

const STORAGE_KEY = "attendanceList";

export const getAttendanceList = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const markAttendance = (studentId) => {
  const list = getAttendanceList();
  if (!list.includes(studentId)) {
    list.push(studentId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
};
