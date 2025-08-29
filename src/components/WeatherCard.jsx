
export default function WeatherCard({ weather }) {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-6 mt-6 rounded-2xl shadow-lg text-center text-white">
     
      <h2 className="text-2xl font-bold">{weather.city}</h2>
      <p className="text-5xl mt-2">{weather.tempC}°C</p>
      <p className="capitalize text-lg mt-1">{weather.summary}</p>

     
      {weather.icon && (
        <img
          className="mx-auto mt-2 w-20 h-20"
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.summary}
        />
      )}

     
      <div className="mt-4">
        <p className="font-semibold">Rise and shine 🌅</p>
        <p>Sunrise: {weather.sunrise}</p>
        <p className="mt-2">Sunset: {weather.sunset}</p>
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-black">
        <div className="bg-yellow-200 p-2 rounded-lg">
          🌸 Pollen: {weather.pollen}
        </div>
        <div className="bg-green-300 p-2 rounded-lg">
          🌬 AQI: {weather.aqi}
        </div>
        <div className="bg-blue-300 p-2 rounded-lg">
          🏃 Running: {weather.running}
        </div>
        <div className="bg-red-300 p-2 rounded-lg">
          🚗 Driving: {weather.driving}
        </div>
      </div>
    </div>
  );
}
