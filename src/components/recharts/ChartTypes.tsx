// src/components/ChartTypeSelector.tsx
import React from "react";

export type ChartType = "LineChart" | "BarChart" | "PieChart" | "ScatterPlot";

interface ChartTypeSelectorProps {
  onChange: (type: ChartType) => void;
}

export const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({
  onChange,
}) => {
  return (
    <select
      className="border border-gray-300 p-2"
      onChange={(e) => onChange(e.target.value as ChartType)}
    >
      <option value="LineChart">Line Chart</option>
      <option value="BarChart">Bar Chart</option>
      <option value="PieChart">Pie Chart</option>
      <option value="ScatterPlot">Scatter Plot</option>
    </select>
  );
};
