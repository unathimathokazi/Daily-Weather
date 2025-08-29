import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import WeatherTenDayCard from "../components/WeatherTenDayCard";
import TemperatureChart from "../components/TemperatureChart";
import { getForecastByCity } from "../services/weatherApi";

export default function Index() {
  const [cityWeather, setCityWeather] = useState(null);

  async function handleSearch(cityName) {
    const data = await getForecastByCity(cityName);

    if (!data || data.forecast.length === 0) {
      alert("City not found or API error");
      setCityWeather(null);
      return;
    }

    const today = data.forecast[0];

    const weatherToday = {
      city: data.city,
      tempC: today.tempC,
      summary: today.summary,
      icon: today.icon,
      wind: today.windKmh,
      humidity: today.humidity,
      sunrise: today.sunrise,
      sunset: today.sunset,
      pollen: today.pollen,
      aqi: today.aqi,
      running: today.running,
      driving: today.driving,
    };

    setCityWeather({
      today: weatherToday,
      tenDay: data.forecast,
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-indigo-300 pb-10">
      <Header />
      <div className="max-w-2xl mx-auto mt-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {cityWeather && cityWeather.today && (
        <WeatherCard weather={cityWeather.today} />
      )}

      {cityWeather && cityWeather.tenDay && (
        <>
          <div className="max-w-6xl mx-auto mt-6">
            <WeatherTenDayCard forecast={cityWeather.tenDay} />
          </div>

          <div className="max-w-6xl mx-auto mt-6">
            <TemperatureChart forecast={cityWeather.tenDay} />
          </div>
        </>
      )}
    </div>
  );
}
