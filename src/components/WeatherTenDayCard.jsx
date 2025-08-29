import React from "react";

export default function WeatherTenDayCard({ forecast = [] }) {
  if (!forecast.length) return null;

  const getDayLabel = (i, date) => {
    if (i === 0) return "Today";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { weekday: "short" }); 
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">{forecast.length}-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, i) => (
          <div key={i} className="p-3 bg-gray-100 rounded-xl text-center">
            <p className="font-semibold">{getDayLabel(i, day.date)}</p>
            {day.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.summary}
                className="mx-auto w-12 h-12"
              />
            )}
            <p className="text-lg font-bold">{day.tempC}°C</p>
            <p className="text-sm text-gray-500">💨 {day.windKmh} km/h</p>
          </div>
        ))}
      </div>
    </div>
  );
}
