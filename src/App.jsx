import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherTenDayCard from "./components/WeatherCard";

export default function App() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");

  async function fetchWeather(cityName) {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();

      // Aggregate to daily (taking midday entry)
      const byDate = {};
      data.list.forEach((entry) => {
        const date = entry.dt_txt.split(" ")[0];
        if (!byDate[date] && entry.dt_txt.includes("12:00:00")) {
          byDate[date] = {
            date,
            tempC: Math.round(entry.main.temp),
            windKmh: Math.round(entry.wind.speed * 3.6),
            humidity: entry.main.humidity,
            summary: entry.weather[0].main,
          };
        }
      });

      setForecast(Object.values(byDate)); // only 5 days max here
      setCity(data.city.name); // update city name
    } catch (err) {
      console.error(err);
      setForecast([]);
      setCity("");
      alert("City not found or API error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-600 to-indigo-700 text-white">
      <Header />
      <div className="max-w-2xl mx-auto mt-6">
        <SearchBar onSearch={fetchWeather} />
      </div>

      {/* Show current city */}
      {city && (
        <h2 className="text-center mt-4 text-2xl font-semibold">
          Forecast for {city}
        </h2>
      )}

      <div className="max-w-6xl mx-auto mt-6">
        <WeatherTenDayCard forecast={forecast} />
      </div>
    </div>
  );
}
