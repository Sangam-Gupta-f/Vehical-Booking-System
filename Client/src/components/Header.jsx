import React, { useState } from "react";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        <h2 className="text-3xl font-bold">FleetLink</h2>
        <div className="hidden md:flex">
          <Navbar isMobile={false} />
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col space-y-3 px-4 py-3">
          <Navbar isMobile={true} />
        </div>
      )}
    </header>
  );
}

export default Header;
