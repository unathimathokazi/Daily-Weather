// Header.jsx
import { useState } from "react";

export default function Header({ city = "New York" }) {
  const [isOpen, setIsOpen] = useState(false);

  // Format today's date like "Tuesday, Aug 20"
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="text-center py-6 text-white">
      {/* City Name */}
      <h1 className="text-4xl font-bold tracking-wide drop-shadow-md">
        {city}
      </h1>

      {/* Date */}
      <p className="text-lg text-gray-200 mt-1">{today}</p>

      {/* Optional settings/search button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition"
        >
          ⚙️
        </button>
      </div>

      {/* Dropdown placeholder */}
      {isOpen && (
        <div className="absolute top-14 right-4 bg-white/90 rounded-xl shadow-md p-3 text-gray-800">
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Settings</li>
            <li className="hover:text-blue-500 cursor-pointer">Favorites</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
          </ul>
        </div>
      )}
    </header>
  );
}
