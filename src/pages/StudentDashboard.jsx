// src/pages/AttendanceForm.jsx
import React, { useState } from "react";


const AttendanceForm = () => {
  // State for managing the QR scanner visibility and result
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState("");

  // Handles the "Scan QR Code" button click to open the scanner
  const handleScanClick = () => {
    setScannerOpen(true);
    setScanResult(""); // Clear previous scan result
  };

  // Callback function for the QrReader component
  const handleScan = (result, error) => {
    // If a result is successfully scanned
    if (!!result) {
      const scannedText = result?.text || "";
      setScanResult(scannedText);
      setScannerOpen(false); // Close the scanner on successful scan
      alert(`QR Code Scanned: ${scannedText}`);
    }

    // If there's an error during scanning
    if (!!error) {
      console.error("QR Scan Error:", error);
    }
  };
  
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans">
      {/* Message */}
      <p className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-md">
        Attendance Made Easy with{" "}
        <span className="font-extrabold text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
          TrackIn
        </span>
      </p>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex items-center justify-center mb-6">
        <img
          src="/images/scanningQR.png"
          alt="Landing"
          className="w-56 sm:w-64 h-auto object-contain"
        />
      </div>
      <div>
        {/* Scan QR Code Button */}
        <button
          onClick={handleScanClick}
          className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Scan QR Code
        </button>

        {/* QR Scanner */}
        {scannerOpen && (
          <div className="mt-4">
            <QrReader
              constraints={{ facingMode: "environment" }}
              onResult={handleScan}
              style={{ width: "100%" }}
            />
          </div>
        )}

        {/* Display scanned result */}
        {scanResult && (
          <p className="mt-2 text-center text-blue-600 font-medium">
            Scanned: {scanResult}
          </p>
        )}
      </div>
    </div>
  );
};

export default AttendanceForm;
