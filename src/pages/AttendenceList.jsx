// src/pages/Attendance.jsx
import { useState } from "react";
import QRScanner from "../components/QRScanner";

export default function Attendance() {
  const [scannedIds, setScannedIds] = useState([]);

  const handleScan = (id) => {
    if (!scannedIds.includes(id)) {
      setScannedIds([...scannedIds, id]);
      alert(`Attendance marked for ID: ${id}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Scan QR to Mark Attendance</h1>
      <QRScanner onScan={handleScan} />
      
      {scannedIds.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Scanned IDs:</h2>
          <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg">
            {scannedIds.map((id, index) => (
              <li key={index}>{id}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
