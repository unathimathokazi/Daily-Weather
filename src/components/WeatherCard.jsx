import React from "react";

export default function WeatherTenDayCard({ forecast = [] }) {
  // Fallback data if forecast is empty
  const fallback = Array.from({ length: 10 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      date: d.toISOString().slice(0, 10),
      tempC: Math.round(18 + Math.random() * 12),
      windKmh: Math.round(5 + Math.random() * 30),
      humidity: Math.round(40 + Math.random() * 50),
      summary: ["Sunny", "Clear", "Cloudy", "Showers", "Windy", "Storms"][
        Math.floor(Math.random() * 6)
      ],
    };
  });

  const days = (forecast.length ? forecast : fallback).slice(0, 10);

  const dayLabel = (iso) =>
    new Date(iso).toLocaleDateString(undefined, { weekday: "short" });
  const dateLabel = (iso) =>
    new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });

  const weatherIcons = {
    Sunny: "☀️",
    Clear: "🌤️",
    Cloudy: "☁️",
    Showers: "🌦️",
    Windy: "🌬️",
    Storms: "⛈️",
  };

  return (
    <section className="w-full">
      <div className="flex gap-4 overflow-x-auto py-4 px-2">
        {days.map((d, idx) => (
          <article
            key={idx}
            className="min-w-[150px] rounded-2xl bg-white/20 backdrop-blur-md shadow-md p-4 flex-shrink-0 transform transition duration-200 hover:scale-105"
          >
            {/* Day + Date */}
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-white">{dayLabel(d.date)}</h3>
              <span className="text-xs text-gray-200">{dateLabel(d.date)}</span>
            </div>

            {/* Weather Icon */}
            <div className="text-3xl text-center mt-2">{weatherIcons[d.summary]}</div>

            {/* Temperature */}
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-red-500">{d.tempC}°</span>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {/* Wind */}
              <div className="flex flex-col rounded-lg border border-red-100 bg-red-50/40 px-2 py-1 text-center">
                <span className="text-[10px] uppercase tracking-wide text-red-300">Wind</span>
                <span className="font-semibold text-red-500">{d.windKmh} km/h</span>
              </div>

              {/* Humidity */}
              <div className="flex flex-col rounded-lg border border-gray-100 bg-gray-50/30 px-2 py-1 text-center">
                <span className="text-[10px] uppercase tracking-wide text-gray-200">Humidity</span>
                <span className="font-semibold text-white">{d.humidity}%</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
