/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/DynamicRechartsVisualizer.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface DynamicRechartsVisualizerProps {
  data: any[];
  type: string;
}

const DynamicRechartsVisualizer: React.FC<DynamicRechartsVisualizerProps> = ({
  data,
  type,
}) => {
  const renderChart = () => {
    switch (type) {
      case "LineChart":
        return (
          <LineChart width={730} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        );
      case "BarChart":
        return (
          <BarChart width={730} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        );
      case "PieChart":
        return (
          <PieChart width={400} height={400}>
            <Pie
              dataKey="sales"
              data={data}
              cx={200}
              cy={200}
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      default:
        return <p>Chart type not supported.</p>;
    }
  };

  return <div>{renderChart()}</div>;
};

export default DynamicRechartsVisualizer;
