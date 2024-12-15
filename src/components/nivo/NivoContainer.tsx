/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { JsonUploader } from "../JsonUploader";
import DynamicNivoVisualizer from "./DynamicNivoVisualizer";
import { ChartType, ChartTypeSelector } from "../recharts/ChartTypes";

const NivoContainer: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [chartType, setChartType] = useState<ChartType>("LineChart");

  const handleDataUpload = (uploadedData: any[]) => {
    setChartData(uploadedData);
  };

  const handleChartTypeChange = (selectedType: ChartType) => {
    setChartType(selectedType);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-header">Nivo Visualization</h2>
      <JsonUploader onUpload={handleDataUpload} />
      <ChartTypeSelector onChange={handleChartTypeChange} />
      <DynamicNivoVisualizer data={chartData} type={chartType} />
    </div>
  );
};

export default NivoContainer;
