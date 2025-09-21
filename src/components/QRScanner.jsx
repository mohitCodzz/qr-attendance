// src/components/QRScanner.jsx
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner({ onScan }) {
  const [error, setError] = useState(null);

  return (
    <div className="w-full max-w-md h-64 bg-gray-200 flex flex-col items-center justify-center rounded p-2">
      <QrReader
        constraints={{ facingMode: "environment" }}
        scanDelay={500}
        onResult={(result, err) => {
          if (!!result) {
            onScan(result.text); // Send scanned ID to parent
          }
          if (!!err) {
            setError(err?.message);
          }
        }}
        style={{ width: "100%", height: "100%" }}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
