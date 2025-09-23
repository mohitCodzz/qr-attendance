// StudentDashboard.jsx

import React, { useState } from "react";

const AttendanceForm = () => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState("");

  const handleScanClick = () => {
    setScannerOpen(true);
    setScanResult("");
  };

  const handleScan = (result, error) => {
    if (!!result) {
      const scannedText = result?.text || "";
      setScanResult(scannedText);
      setScannerOpen(false);
      alert(`QR Code Scanned: ${scannedText}`);
    }
    if (!!error) {
      console.error("QR Scan Error:", error);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans px-4 py-8 relative">
      {/* User id and profile pic */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
        <img
          src="../images/profile.png"
          alt="Student Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="flex flex-col text-sm pr-2">
          <p className="text-gray-900 font-bold">Mohit Jaryal</p>
          <p className="text-gray-500 text-xs">ID: student001</p>
        </div>
      </div>

      {/* Welcome  */}
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Welcome back, <span className="text-blue-600">Mohit!</span> 👋
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          {`Hey ${"Mohit"}, scan this QR for marking attendance in your subject: `}
          <span className="font-semibold text-blue-600">DCCN</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <p className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-md">
          Mark your attendence with{" "}
          <span className="font-extrabold text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            TrackIn
          </span>
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex items-center justify-center mb-6">
          <img
            src="/images/scanningQR.png"
            alt="Scanning QR"
            className="w-56 sm:w-64 h-auto object-contain"
          />
        </div>

        <div className="w-full max-w-sm">
          <button
            onClick={handleScanClick}
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-4 hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Scan QR Code
          </button>

          {scannerOpen && (
            <div className="mt-4">
              <QrReader
                constraints={{ facingMode: "environment" }}
                onResult={handleScan}
                style={{ width: "100%" }}
              />
            </div>
          )}

          {scanResult && (
            <p className="mt-2 text-center text-blue-600 font-medium">
              Scanned: {scanResult}
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AttendanceForm;
