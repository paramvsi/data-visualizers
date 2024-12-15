/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface DynamicHighchartsVisualizerProps {
  data: any[];
  type: string;
}

const DynamicHighchartsVisualizer: React.FC<
  DynamicHighchartsVisualizerProps
> = ({ data, type }) => {
  const getChartOptions = (): Highcharts.Options => {
    const baseOptions: Highcharts.Options = {
      title: { text: "" },
      xAxis: {
        categories: data.map((item) => item.date),
      },
      yAxis: {
        title: { text: "Sales" },
      },
      tooltip: {
        shared: true,
      },
    };

    switch (type) {
      case "LineChart":
        return {
          ...baseOptions,
          series: [
            {
              type: "line",
              name: "Sales",
              data: data.map((item) => item.sales),
            },
          ],
        };

      case "BarChart":
        return {
          ...baseOptions,
          chart: { type: "column" },
          series: [
            {
              type: "column",
              name: "Sales",
              data: data.map((item) => item.sales),
            },
          ],
        };

      case "PieChart":
        return {
          chart: { type: "pie" },
          series: [
            {
              type: "pie",
              name: "Sales",
              data: data.map((item) => ({
                name: item.date,
                y: item.sales,
              })),
            },
          ],
        };

      default:
        return baseOptions;
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={getChartOptions()} />
    </div>
  );
};

export default DynamicHighchartsVisualizer;
