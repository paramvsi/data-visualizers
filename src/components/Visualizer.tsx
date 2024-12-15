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
  library: string | null;
}

const Visualizer: React.FC<VisualizerProps> = ({ library }) => {
  console.log(library);
  if (!library)
    return (
      <div className="flex-grow p-4">
        Please select a library to get started.
      </div>
    );

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

  return <div className="flex-grow p-4">{renderVisualization()}</div>;
};

export default Visualizer;
