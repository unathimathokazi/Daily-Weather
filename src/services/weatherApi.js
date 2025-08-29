
export async function getForecastByCity(cityName) {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    if (!apiKey) throw new Error("API key missing");

    
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
    if (!currentRes.ok) throw new Error("City not found");
    const currentData = await currentRes.json();

    const city = currentData.name;
    const todayWeather = {
      date: new Date().toISOString().split("T")[0],
      tempC: Math.round(currentData.main.temp),
      windKmh: Math.round(currentData.wind.speed * 3.6),
      humidity: currentData.main.humidity,
      summary: currentData.weather[0].main,
      icon: currentData.weather[0].icon,
      sunrise: new Date(currentData.sys.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sunset: new Date(currentData.sys.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      pollen: "Low",    
      aqi: "Good",      
      running: "Good",  
      driving: "Good"   
    };

    
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
    );
    if (!forecastRes.ok) throw new Error("Forecast not found");
    const forecastData = await forecastRes.json();

    
    const byDate = {};
    forecastData.list.forEach((entry) => {
      const date = entry.dt_txt.split(" ")[0];
      if (!byDate[date] && entry.dt_txt.includes("12:00:00")) {
        byDate[date] = {
          date,
          tempC: Math.round(entry.main.temp),
          windKmh: Math.round(entry.wind.speed * 3.6),
          humidity: entry.main.humidity,
          summary: entry.weather[0].main,
          icon: entry.weather[0].icon,
          sunrise: todayWeather.sunrise, 
          sunset: todayWeather.sunset,   
          pollen: "Low",
          aqi: "Good",
          running: "Good",
          driving: "Good"
        };
      }
    });

   
    const forecast = [todayWeather, ...Object.values(byDate).slice(0, 4)]; 

    return { city, forecast };
  } catch (err) {
    console.error(err);
    return { city: "", forecast: [] };
  }
}
