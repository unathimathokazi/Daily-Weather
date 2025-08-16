import { useState } from "react";

export default function SearchBar() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for: ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="search" 
        value={city} 
        onChange={updateCity} 
        placeholder="Enter a city"
        className="border p-8  w-auto ml-100 rounded"
      />
      <input 
        type="submit" 
        value="Search" 
        className="bg-blue-500  mb-130 ml-100 text-white p-4 rounded ml-2 cursor-pointer hover:bg-blue-600"
      />
    </form>
  );
}
