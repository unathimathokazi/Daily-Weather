import React from "react";

export default function WeatherTenDayCard({ forecast = [] }) {
  const fallback = Array.from({ length: 10 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      date: d.toISOString().slice(0, 10),
      tempC: Math.round(18 + Math.random() * 12),
      windKmh: Math.round(5 + Math.random() * 30),
      humidity: Math.round(40 + Math.random() * 50),
      summary: ["Sunny", "Clear", "Cloudy", "Showers", "Windy", "Storms"][Math.floor(Math.random() * 6)],
    };
  });

  const days = (forecast.length ? forecast : fallback).slice(0, 10);

  const dayLabel = (iso) =>
    new Date(iso).toLocaleDateString(undefined, { weekday: "short" }); // e.g. Thu
  const dateLabel = (iso) =>
    new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" }); // e.g. Aug 14

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {days.map((d, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white/80 shadow-sm p-4 backdrop-blur-sm hover:shadow-md transition"
          >
            {/* Top: Day + Date */}
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-gray-700">
                {dayLabel(d.date)}
              </h3>
              <span className="text-xs text-gray-500">{dateLabel(d.date)}</span>
            </div>

            {/* Summary */}
            <p className="mt-1 text-sm text-gray-600">{d.summary}</p>

            {/* Temperature (light red emphasis) */}
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none text-red-600">
                {d.tempC}°
              </span>
              <span className="mb-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                Temp
              </span>
            </div>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {/* Wind in km/h, light red */}
              <div className="flex flex-col rounded-lg border border-red-100 bg-red-50 px-3 py-2">
                <span className="text-[11px] uppercase tracking-wide text-red-500">Wind</span>
                <span className="font-semibold text-red-600">{d.windKmh} km/h</span>
              </div>

              {/* Humidity */}
              <div className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                <span className="text-[11px] uppercase tracking-wide text-gray-500">Humidity</span>
                <span className="font-semibold text-gray-700">{d.humidity}%</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
