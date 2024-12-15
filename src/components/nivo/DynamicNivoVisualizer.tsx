/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";

interface DynamicNivoVisualizerProps {
  data: any[];
  type: string;
}

const DynamicNivoVisualizer: React.FC<DynamicNivoVisualizerProps> = ({
  data,
  type,
}) => {
  const prepareLineData = () => {
    return [
      {
        id: "sales",
        data: data.map((d) => ({
          x: d.date,
          y: d.sales,
        })),
      },
    ];
  };

  const prepareBarData = () => {
    return data.map((d) => ({
      date: d.date,
      sales: d.sales,
    }));
  };

  const preparePieData = () => {
    return data.map((d) => ({
      id: d.date,
      label: d.date,
      value: d.sales,
    }));
  };

  const renderChart = () => {
    switch (type) {
      case "LineChart":
        return (
          <div style={{ height: "400px" }}>
            <ResponsiveLine
              data={prepareLineData()}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Date",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Sales",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                },
              ]}
            />
          </div>
        );

      case "BarChart":
        return (
          <div style={{ height: "400px" }}>
            <ResponsiveBar
              data={prepareBarData()}
              keys={["sales"]}
              indexBy="date"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Date",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Sales",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                },
              ]}
            />
          </div>
        );

      case "PieChart":
        return (
          <div style={{ height: "400px" }}>
            <ResponsivePie
              data={preparePieData()}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                },
              ]}
            />
          </div>
        );

      default:
        return <p>Chart type not supported.</p>;
    }
  };

  return <div>{renderChart()}</div>;
};

export default DynamicNivoVisualizer;
