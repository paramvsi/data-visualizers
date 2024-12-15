/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/echarts/DynamicEchartsVisualizer.tsx
import React from "react";
import ReactECharts from "echarts-for-react";

interface DynamicEchartsVisualizerProps {
  data: any[];
  type: string;
}

const DynamicEchartsVisualizer: React.FC<DynamicEchartsVisualizerProps> = ({
  data,
  type,
}) => {
  const getChartOptions = () => {
    const dates = data.map((item) => item.date);
    const sales = data.map((item) => item.sales);

    const baseOptions = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Sales"],
      },
      xAxis: {
        type: "category",
        data: dates,
      },
      yAxis: {
        type: "value",
      },
    };

    switch (type) {
      case "LineChart":
        return {
          ...baseOptions,
          series: [
            {
              name: "Sales",
              type: "line",
              data: sales,
              smooth: true,
            },
          ],
        };

      case "BarChart":
        return {
          ...baseOptions,
          series: [
            {
              name: "Sales",
              type: "bar",
              data: sales,
            },
          ],
        };

      case "PieChart":
        return {
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "Sales",
              type: "pie",
              radius: "50%",
              data: data.map((item) => ({
                name: item.date,
                value: item.sales,
              })),
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };

      default:
        return baseOptions;
    }
  };

  return (
    <ReactECharts
      option={getChartOptions()}
      style={{ height: "400px", width: "100%" }}
    />
  );
};

export default DynamicEchartsVisualizer;
