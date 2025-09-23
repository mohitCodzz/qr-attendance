// StudentDashboard.jsx

import React, { useState, useRef, useEffect } from "react";

const AttendanceForm = () => {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState("");
  const videoRef = useRef(null);

  // Start camera when scannerOpen becomes true
  useEffect(() => {
    if (!scannerOpen) return;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // back camera
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        alert("Camera access denied or not available.");
        setScannerOpen(false);
      }
    };

    startCamera();

    // Cleanup on unmount or close
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [scannerOpen]);

  const handleScanClick = () => {
    setScannerOpen(true);
    setScanResult("");
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center font-sans px-4 py-8 relative">
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

      {/* Welcome Section */}
      <div className="text-center mb-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Welcome back, <span className="text-blue-600">Mohit!</span> 👋
        </h1>
        <div className="h-4"></div>
        <p className="text-md sm:text-lg text-gray-600 mt-0">
          Hey Mohit, scan this QR for marking attendance in your subject:{" "}
          <span className="font-semibold text-blue-600">DCCN</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full max-w-sm space-y-4 px-1 py-4">
        <p className="text-lg sm:text-xl text-gray-700 mb-2 text-center max-w-md">
          Mark your attendance with{" "}
          <span className="font-extrabold text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            TrackIn
          </span>
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-2 w-full flex items-center justify-center mb-2">
          <img
            src="/images/scanningQR.png"
            alt="Scanning QR"
            className="w-56 sm:w-64 h-auto object-contain"
          />
        </div>

        {/* Scan Button */}
        <div className="w-full">
          <button
            onClick={handleScanClick}
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-2 hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Scan QR Code
          </button>

          {scannerOpen && (
            <div className="mt-4 w-full">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full rounded-lg shadow-md"
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
