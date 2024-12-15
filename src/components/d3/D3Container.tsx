/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { JsonUploader } from "../JsonUploader";
import * as d3 from "d3";

const D3Container = () => {
  const [worldData, setWorldData] = useState(null);
  const [selectedDataOverlay, setSelectedDataOverlay] = useState("population");
  const mapContainerRef = useRef(null);

  const handleDataUpload = (uploadedData: any) => {
    setWorldData(uploadedData);
  };

  const handleOverlayChange = (event: any) => {
    setSelectedDataOverlay(event.target.value);
  };

  useEffect(() => {
    if (!worldData) return;

    // Clear any existing SVG
    d3.select(mapContainerRef.current).selectAll("svg").remove();

    const width = 960;
    const height = 500;
    const padding = 40; // Add padding to prevent cutoff

    const svg = d3
      .select(mapContainerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Create a projection that fits your data
    const projection = d3
      .geoMercator()
      .fitSize([width - padding * 2, height - padding * 2], worldData)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Create color scales based on your data
    const colorScale = d3
      .scaleSequential()
      .domain([0, selectedDataOverlay === "population" ? 1500000000 : 25000000]) // Adjust max values based on your data
      .interpolator(d3.interpolateBlues);

    // Draw the map
    svg
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("fill", (d) => {
        const value = d.properties[selectedDataOverlay];
        return value ? colorScale(value) : "#ccc";
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      // Add hover effects
      .on("mouseover", function (event, d) {
        d3.select(this).attr("stroke-width", 2).attr("stroke", "#000");

        // Add tooltip
        svg
          .append("text")
          .attr("class", "tooltip")
          .attr("x", event.pageX - mapContainerRef.current.offsetLeft)
          .attr("y", event.pageY - mapContainerRef.current.offsetTop)
          .text(
            `${d.properties.name}: ${d.properties[
              selectedDataOverlay
            ].toLocaleString()}`
          )
          .attr("fill", "black")
          .attr("font-size", "12px");
      })
      .on("mouseout", function () {
        d3.select(this).attr("stroke-width", 0.5).attr("stroke", "#fff");

        svg.selectAll(".tooltip").remove();
      });

    // Cleanup function
    return () => {
      d3.select(mapContainerRef.current).selectAll("svg").remove();
    };
  }, [worldData, selectedDataOverlay]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-header">D3 World Map Visualization</h2>
      <select onChange={handleOverlayChange}>
        <option value="population">Population</option>
        <option value="gdp">GDP</option>
      </select>
      <JsonUploader onUpload={handleDataUpload} />
      <div id="d3-map-container" ref={mapContainerRef} />
    </div>
  );
};

export default D3Container;
