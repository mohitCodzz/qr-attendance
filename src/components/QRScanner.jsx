// src/components/QRScanner.jsx
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner({ onScan }) {
  const [error, setError] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <QrReader
        onResult={(result, err) => {
          if (!!result) {
            onScan(result?.text);
          }
          if (!!err) {
            setError(err?.message || "Error scanning QR");
          }
        }}
        constraints={{ facingMode: "environment" }}
        className="w-80 h-80"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
