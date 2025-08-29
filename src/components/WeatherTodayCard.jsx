
import React from "react";
import { WiSunrise, WiSunset, WiStrongWind, WiHumidity } from "react-icons/wi";
import { FaLeaf, FaCar, FaRunning } from "react-icons/fa";

export default function WeatherTodayCard({ city, today }) {
  if (!today) return null;

 
  const dayName = new Date(today.date).toLocaleDateString(undefined, {
    weekday: "long",
  });

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto mt-6 shadow-lg text-black">
     
      <h1 className="text-3xl font-bold">{city}</h1>
      <p className="text-xl capitalize">{dayName}</p>

     
      <div className="flex items-center justify-center mt-4 space-x-6">
        <img
          src={`https://openweathermap.org/img/wn/${today.icon}@2x.png`}
          alt={today.summary}
          className="w-20 h-20"
        />
        <div>
          <p className="text-5xl font-bold">{today.tempC}°C</p>
          <p className="capitalize text-lg">{today.summary}</p>
          <p className="flex items-center gap-2">
            <WiStrongWind /> {today.windKmh} km/h
          </p>
          <p className="flex items-center gap-2">
            <WiHumidity /> {today.humidity}%
          </p>
        </div>
      </div>

    
      <div className="flex justify-around mt-6 bg-white/30 rounded-xl p-4 text-black">
        <div className="flex flex-col items-center">
          <WiSunrise size={40} />
          <span>Rise & Shine</span>
          <span>{today.sunrise}</span>
        </div>
        <div className="flex flex-col items-center">
          <WiSunset size={40} />
          <span>Sunset</span>
          <span>{today.sunset}</span>
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-black">
        <div className="bg-white/40 rounded-xl p-4 flex flex-col items-center">
          <FaLeaf size={30} />
          <span>Pollen</span>
          <span>{today.pollen}</span>
        </div>
        <div className="bg-white/40 rounded-xl p-4 flex flex-col items-center">
          <span>AQI</span>
          <span>{today.aqi}</span>
        </div>
        <div className="bg-white/40 rounded-xl p-4 flex flex-col items-center">
          <FaRunning size={30} />
          <span>Running</span>
          <span>{today.running}</span>
        </div>
        <div className="bg-white/40 rounded-xl p-4 flex flex-col items-center">
          <FaCar size={30} />
          <span>Driving</span>
          <span>{today.driving}</span>
        </div>
      </div>

      
      <div className="mt-6 bg-white/20 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-2">Top Stories</h2>
        <ul className="list-disc list-inside">
          <li>Story 1 about today's weather</li>
          <li>Story 2 about local news</li>
          <li>Story 3 about sports/events</li>
        </ul>
      </div>
    </div>
  );
}
