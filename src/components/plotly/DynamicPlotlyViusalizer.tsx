/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/plotly/DynamicPlotlyVisualizer.tsx
import React from "react";
import Plot from "react-plotly.js";

interface DynamicPlotlyVisualizerProps {
  data: any[];
  type: string;
}

const DynamicPlotlyVisualizer: React.FC<DynamicPlotlyVisualizerProps> = ({
  data,
  type,
}) => {
  const getPlotData = () => {
    const dates = data.map((item) => item.date);
    const sales = data.map((item) => item.sales);

    switch (type) {
      case "LineChart":
        return [
          {
            type: "scatter",
            mode: "lines+markers",
            x: dates,
            y: sales,
            name: "Sales",
            line: { color: "#8884d8" },
          },
        ];

      case "BarChart":
        return [
          {
            type: "bar",
            x: dates,
            y: sales,
            name: "Sales",
            marker: { color: "#8884d8" },
          },
        ];

      case "PieChart":
        return [
          {
            type: "pie",
            labels: dates,
            values: sales,
            name: "Sales",
            hole: 0.4, // Makes it a donut chart
            marker: {
              colors: [
                "#0088FE",
                "#00C49F",
                "#FFBB28",
                "#FF8042",
                "#8884d8",
                "#82ca9d",
              ],
            },
          },
        ];

      default:
        return [];
    }
  };

  const getLayout = () => {
    const baseLayout = {
      width: 800,
      height: 400,
      margin: { l: 50, r: 50, t: 50, b: 50 },
      showlegend: true,
    };

    switch (type) {
      case "LineChart":
      case "BarChart":
        return {
          ...baseLayout,
          xaxis: {
            title: "Date",
          },
          yaxis: {
            title: "Sales",
          },
        };

      case "PieChart":
        return {
          ...baseLayout,
          title: "Sales Distribution",
        };

      default:
        return baseLayout;
    }
  };

  const getConfig = () => {
    return {
      responsive: true,
      displayModeBar: true,
      displaylogo: false,
    };
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Plot
        data={getPlotData()}
        layout={getLayout()}
        config={getConfig()}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default DynamicPlotlyVisualizer;
