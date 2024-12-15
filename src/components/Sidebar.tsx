// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  onSelectLibrary: (library: string) => void;
}

const libraries = [
  "Recharts",
  "Victory",
  "D3js",
  "Highcharts",
  "Nivo",
  "Echarts",
  "Plotly",
  "DeckGL",
  "ReactLeaflet",
  "React3D",
];

const Sidebar: React.FC<SidebarProps> = ({ onSelectLibrary }) => {
  return (
    <aside className="w-64 bg-cool-grey p-4">
      <ul className="list-none">
        {libraries.map((lib) => (
          <li
            key={lib}
            onClick={() => onSelectLibrary(lib)}
            className="cursor-pointer p-2 hover:bg-light-blue rounded"
          >
            {lib}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
