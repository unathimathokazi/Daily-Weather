import React from "react";
import { Calendar, Thermometer, Droplets, Wind } from "lucide-react";

export default function ForecastCard({ forecasts }) {
  if (!forecasts || forecasts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-card backdrop-blur-sm rounded-3xl shadow-weather border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-8 h-8 text-primary" />
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          10-Day Forecast
        </h3>
      </div>

      <div className="grid gap-4">
        {forecasts.map((forecast, index) => (
          <ForecastDay
            key={forecast.date}
            forecast={forecast}
            isToday={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

function ForecastDay({ forecast, isToday }) {
  const date = new Date(forecast.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-2xl border transition-smooth hover:shadow-soft
      ${
        isToday
          ? "bg-primary/10 border-primary/20 shadow-glow"
          : "bg-card border-border hover:bg-muted/50"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-foreground">
            {isToday ? "Today" : forecast.day}
          </div>
          <div className="text-xs text-muted-foreground">{formattedDate}</div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
          width="48"
          height="48"
          alt={forecast.description}
          className="shrink-0"
        />
        <div className="hidden md:block text-sm text-muted-foreground capitalize">
          {forecast.description}
        </div>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-orange-500" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground text-lg">
              {forecast.temp_max}°
            </span>
            <span className="text-muted-foreground">{forecast.temp_min}°</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Droplets className="w-3 h-3" />
            <span>{forecast.humidity}%</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Wind className="w-3 h-3" />
            <span>{forecast.wind_speed}km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}