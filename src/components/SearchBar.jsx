import { useState } from "react";
import { Search } from "lucide-react"; // optional: adds a small icon like iOS

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center justify-center gap-2 p-2"
    >
      <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 w-72 shadow-md">
        <Search className="text-white/70 mr-2" size={18} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search city"
          className="bg-transparent text-white placeholder-white/70 focus:outline-none w-full"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500/80 text-white rounded-full shadow-md hover:bg-blue-500 transition"
      >
        Go
      </button>
    </form>
  );
}
