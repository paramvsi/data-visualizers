// src/components/Sidebar.tsx
import React from "react";
import Header from "./Header";

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
];

const Sidebar: React.FC<SidebarProps> = ({ onSelectLibrary }) => {
  return (
    <div className="h-screen w-64 border-r-2 border-[#E0E0E0]">
      <div className="p-5">
        <Header />
      </div>
      <aside className="w-64">
        <ul className="list-none px-5 font-mono">
          {libraries.map((lib) => (
            <li
              key={lib}
              onClick={() => onSelectLibrary(lib)}
              className="cursor-pointer p-2 rounded hover:bg-[#F5F5F5] hover:text-[#333333]"
            >
              {lib}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
