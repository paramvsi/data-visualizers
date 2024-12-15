/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/DynamicVictoryVisualizer.tsx
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryPie,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

interface DynamicVictoryVisualizerProps {
  data: any[];
  type: string;
}

const DynamicVictoryVisualizer: React.FC<DynamicVictoryVisualizerProps> = ({
  data,
  type,
}) => {
  // Ensure there is data before trying to render a chart
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  const renderChart = () => {
    switch (type) {
      case "BarChart":
        return (
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis tickFormat={(t) => `${t}`} />
            <VictoryAxis dependentAxis />
            <VictoryBar
              data={data}
              x="category"
              y="sales" // Assuming you want to visualize sales
              labels={({ datum }) => `Sales: ${datum.sales}`}
              labelComponent={<VictoryTooltip />}
            />
          </VictoryChart>
        );
      case "LineChart":
        return (
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis tickFormat={(t) => `${t}`} />
            <VictoryAxis dependentAxis />
            <VictoryLine
              data={data}
              x="month"
              y="profit" // Assuming you want to visualize profit
              labels={({ datum }) => `Profit: ${datum.profit}`}
              labelComponent={<VictoryTooltip />}
            />
          </VictoryChart>
        );
      case "PieChart":
        return (
          <VictoryPie
            data={data}
            x="category"
            y="cost" // Assuming you want to visualize cost
            labels={({ datum }) => `${datum.category}: $${datum.cost}`}
            labelComponent={<VictoryTooltip />}
          />
        );
      default:
        return <div>Chart type not supported.</div>;
    }
  };

  return <div>{renderChart()}</div>;
};

export default DynamicVictoryVisualizer;
