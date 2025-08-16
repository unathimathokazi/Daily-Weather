import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-900 w-full mb-130 text-white p-4">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl  p-8 font-bold">Daily Weather</div>

        {/* Desktop / Medium+ Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-yellow-400">Weather</a></li>
          <li><a href="#" className="hover:text-yellow-400">Warning GIB</a></li>
          <li><a href="#" className="hover:text-yellow-400">Favourite City</a></li>
          <li><a href="#" className="hover:text-yellow-400">...</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      )}
    </nav>
    
</>
  );
}

