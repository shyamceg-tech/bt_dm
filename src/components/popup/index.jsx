// components/Popup.js
import { useEffect, useState } from "react";

export default function Popup({ message, type, onClose }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onClose(); // auto close after progress ends
          return 100;
        }
        return prev + 100 / (5 * 10); // 30 sec = 300 updates every 100ms
      });
    }, 100); // update every 100ms

    return () => clearInterval(interval);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={`rounded-xl shadow-lg p-6 w-[90%] max-w-md text-center relative
        ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
      `}
      >
        <p className="text-lg font-medium">{message}</p>

        {/* Progress Bar */}
        <div className="w-full h-2 mt-6 bg-gray-300 rounded">
          <div
            className={`h-full rounded transition-all duration-100 ease-linear ${
              type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
