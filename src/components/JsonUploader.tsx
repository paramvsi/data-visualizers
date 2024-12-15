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
    <div className="space-y-2 flex flex-col items-start gap-3">
      <textarea
        className="w-[600px] h-32 border-2 border-[#E0E0E0] p-2 shadow-md font-mono"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Paste JSON data here..."
      />
      <button
        className=" px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 font-mono"
        onClick={handleUpload}
      >
        Upload Data
      </button>
    </div>
  );
};
