// src/components/QRScanner.jsx
import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScanner({ onScan }) {
  const qrRef = useRef(null);

  useEffect(() => {
    if (!qrRef.current) return;

    const qrCodeScanner = new Html5Qrcode(qrRef.current.id);

    qrCodeScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        onScan(decodedText);
        qrCodeScanner.stop();
      },
      (errorMessage) => {
        console.warn("QR scan error:", errorMessage);
      }
    ).catch(console.error);

    return () => {
      qrCodeScanner.stop().catch(() => {});
    };
  }, [onScan]);

  return <div id="qr-reader" ref={qrRef} className="w-full max-w-md mx-auto"></div>;
}
