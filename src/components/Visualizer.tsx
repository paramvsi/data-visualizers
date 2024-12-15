// src/components/Visualizer.tsx
import React from "react";
import RechartsContainer from "./recharts/RechartsContainer";
import VictoryContainer from "./victory/VictoryContainer";
import D3Container from "./d3/D3Container";
import HighchartsContainer from "./highcharts/HighchartsContainer";
import NivoContainer from "./nivo/NivoContainer";
import EchartsContainer from "./echarts/EchartContainer";
import PlotlyContainer from "./plotly/PlotlyContainer";

interface VisualizerProps {
  library: string | "Recharts";
}

const Visualizer: React.FC<VisualizerProps> = ({ library }) => {
  // Render the appropriate container based on the library
  const renderVisualization = () => {
    switch (library) {
      case "Recharts":
        return <RechartsContainer />;

      case "Victory":
        return <VictoryContainer />;

      case "D3js":
        return <D3Container />;

      case "Highcharts":
        return <HighchartsContainer />;

      case "Nivo":
        return <NivoContainer />;

      case "Echarts":
        return <EchartsContainer />;

      case "Plotly":
        return <PlotlyContainer />;

      default:
        return (
          <h2 className="font-body text-lg">
            Visualization for {library} is not implemented yet.
          </h2>
        );
    }
  };

  return (
    <div className="flex-grow">
      <h3 className="text-xl p-5 py-10 font-sans text-[#333333]">Dashboard</h3>
      <hr />
      <div className="p-4">{renderVisualization()}</div>
    </div>
  );
};

export default Visualizer;
