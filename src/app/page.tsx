"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Visualizer from "@/components/Visualizer";
import { useState } from "react";

export default function Home() {
  const [selectedLibrary, setSelectedLibrary] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <Sidebar onSelectLibrary={setSelectedLibrary} />
        <Visualizer library={selectedLibrary} />
      </div>
    </div>
  );
}
