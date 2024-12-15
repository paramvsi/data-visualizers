"use client";

import Sidebar from "@/components/Sidebar";
import Visualizer from "@/components/Visualizer";
import { useState } from "react";

export default function Home() {
  const [selectedLibrary, setSelectedLibrary] = useState<string | null>(null);

  return (
    <div className="flex ">
      <Sidebar onSelectLibrary={setSelectedLibrary} />
      <Visualizer library={selectedLibrary || "Recharts"} />
    </div>
  );
}
