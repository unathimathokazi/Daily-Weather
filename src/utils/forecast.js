/**
 * @typedef {import('../types/weather').ForecastData} ForecastData
 * @typedef {import('../types/weather').ForecastItem} ForecastItem
 * @typedef {import('../types/weather').DailyForecast} DailyForecast
 */

/**
 * Processes raw forecast data into daily summaries
 * @param {ForecastData} forecastData
 * @returns {DailyForecast[]}
 */
export function processForecastData(forecastData) {
  /** @type {{ [key: string]: ForecastItem[] }} */
  const dailyForecasts = {};
  
  forecastData.list.forEach(item => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = [];
    }
    dailyForecasts[date].push(item);
  });
  
  const processedForecasts = Object.entries(dailyForecasts)
    .slice(0, 10)
    .map(([dateString, items]) => {
      const date = new Date(dateString);
      const temps = items.map(item => item.main.temp);
      const temp_min = Math.min(...items.map(item => item.main.temp_min));
      const temp_max = Math.max(...items.map(item => item.main.temp_max));
      const temp_avg = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
      
      const weatherCounts = {};
      items.forEach(item => {
        const weather = item.weather[0];
        const key = `${weather.main}-${weather.icon}`;
        weatherCounts[key] = (weatherCounts[key] || 0) + 1;
      });
      
      const mostCommonWeather = Object.entries(weatherCounts)
        .sort(([,a], [,b]) => b - a)[0][0];
      
      const [weatherMain, weatherIcon] = mostCommonWeather.split("-");
      const weatherItem = items.find(
        item => item.weather[0].main === weatherMain &&
                item.weather[0].icon === weatherIcon
      );
      
      const avgHumidity = items.reduce((sum, item) => sum + item.main.humidity, 0) / items.length;
      const avgWindSpeed = items.reduce((sum, item) => sum + item.wind.speed, 0) / items.length;
      
      return {
        date: date.toISOString().split("T")[0],
        day: date.toLocaleDateString("en-US", { weekday: "long" }),
        temp_min: Math.round(temp_min),
        temp_max: Math.round(temp_max),
        temp_avg: Math.round(temp_avg),
        humidity: Math.round(avgHumidity),
        description: weatherItem.weather[0].description,
        icon: weatherItem.weather[0].icon,
        wind_speed: Math.round(avgWindSpeed * 3.6)
      };
    });
  
  return processedForecasts;
}