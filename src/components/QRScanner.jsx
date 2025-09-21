import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScanner({ onScan }) {
  useEffect(() => {
    const qrCodeRegionId = "qr-reader";
    const html5QrCode = new Html5Qrcode(qrCodeRegionId);

    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10 },
      (decodedText) => {
        onScan(decodedText);
        html5QrCode.stop();
      },
      (error) => {
        console.log(error);
      }
    );

    return () => html5QrCode.stop();
  }, [onScan]);

  return <div id="qr-reader" style={{ width: "100%", height: "300px" }}></div>;
}
