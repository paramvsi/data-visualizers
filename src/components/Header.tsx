// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center text-[#333333] border-b border-[#E0E0E0] rounded-lg">
      <h1 className="text-xl font-header font-sans">DataViz Studio</h1>
    </header>
  );
};

export default Header;
