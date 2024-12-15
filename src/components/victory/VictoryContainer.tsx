/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/VictoryContainer.tsx
import React, { useState } from "react";
import { JsonUploader } from "../JsonUploader";
import { ChartType, ChartTypeSelector } from "../recharts/ChartTypes";
import DynamicVictoryVisualizer from "./DyamicVictoryVisualizer";

const VictoryContainer: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [chartType, setChartType] = useState<ChartType>("BarChart");

  const handleDataUpload = (uploadedData: any[]) => {
    setChartData(uploadedData);
  };

  const handleChartTypeChange = (selectedType: ChartType) => {
    setChartType(selectedType);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-header">Victory Visualization</h2>
      <JsonUploader onUpload={handleDataUpload} />
      <ChartTypeSelector onChange={handleChartTypeChange} />
      <div className="w-96 h-auto">
        {" "}
        <DynamicVictoryVisualizer data={chartData} type={chartType} />
      </div>
    </div>
  );
};

export default VictoryContainer;
