import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
