import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherTenDayCard from "./components/WeatherCard";
import { getForecastByCity } from "./services/weatherApi";
import WeatherTodayCard from "./components/WeatherTodayCard";

export default function App() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");

  async function fetchWeather(cityName) {
    try {
      const data = await getForecastByCity(cityName);

      if (!data.forecast || !data.forecast.length) throw new Error("No forecast found");

      setForecast(data.forecast); 
      setCity(data.city);
    } catch (err) {
      console.error(err);
      setForecast([]);
      setCity("");
      alert("City not found or API error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-600 text-white p-4">
      <Header />
      <div className="max-w-2xl mx-auto mt-6">
        <SearchBar onSearch={fetchWeather} />
      </div>

      {city && (
        <>
          <WeatherTodayCard city={city} today={forecast[0]} />
          <h2 className="text-center mt-6 text-2xl font-semibold">10-Day Forecast for {city}</h2>
          <div className="max-w-6xl mx-auto mt-4">
            <WeatherTenDayCard forecast={forecast} />
          </div>
        </>
      )}
    </div>
  );
}
