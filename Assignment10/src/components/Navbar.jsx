import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-blue-400">MySite</span>
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="sm:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Links + Search (Desktop) */}
        <div className="hidden sm:flex items-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
          
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 px-6 pb-4 space-y-3">
          <a href="#" className="block hover:text-blue-400">Home</a>
          <a href="#" className="block hover:text-blue-400">About</a>
          <a href="#" className="block hover:text-blue-400">Contact</a>
          <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-3 py-1 w-full outline-none"
            />
            <button className="bg-blue-500 px-3 py-1 hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
