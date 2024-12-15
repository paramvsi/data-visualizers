/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/plotly/PlotlyContainer.tsx
import React, { useState } from "react";
import { JsonUploader } from "../JsonUploader";
import { ChartType, ChartTypeSelector } from "../recharts/ChartTypes";
import DynamicPlotlyVisualizer from "./DynamicPlotlyViusalizer";

const PlotlyContainer: React.FC = () => {
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
      <h2 className="text-lg font-header">Plotly Visualization</h2>
      <JsonUploader onUpload={handleDataUpload} />
      <ChartTypeSelector onChange={handleChartTypeChange} />
      <DynamicPlotlyVisualizer data={chartData} type={chartType} />
    </div>
  );
};

export default PlotlyContainer;
