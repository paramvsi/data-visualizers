// src/components/JsonUploader.tsx
import React, { useState } from "react";

interface JsonUploaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpload: (data: any[]) => void;
}

export const JsonUploader: React.FC<JsonUploaderProps> = ({ onUpload }) => {
  const [inputData, setInputData] = useState("");

  const handleUpload = () => {
    try {
      const data = JSON.parse(inputData);
      onUpload(data);
    } catch (error) {
      alert(`Failed to parse JSON. Please check the format, ${error}`);
    }
  };

  return (
    <div className="space-y-2">
      <textarea
        className="w-full h-32 border border-gray-300 p-2"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Paste JSON data here..."
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleUpload}
      >
        Upload Data
      </button>
    </div>
  );
};
