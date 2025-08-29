import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 mt-4"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="px-4 py-2 rounded-lg border shadow"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700"
      >
        Search
      </button>
    </form>
  );
}
