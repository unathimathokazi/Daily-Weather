/**
 * @typedef {Object} WeatherData
 * @property {{ temp: number, humidity: number, pressure: number, feels_like: number, temp_min: number, temp_max: number }} main
 * @property {{ speed: number, deg?: number }} wind
 * @property {Array<{ id: number, main: string, description: string, icon: string }>} weather
 * @property {string} name
 * @property {{ country: string, sunrise: number, sunset: number }} sys
 * @property {number} dt
 * @property {number} [visibility]
 * @property {{ all: number }} clouds
 */

/**
 * @typedef {Object} ForecastItem
 * @property {number} dt
 * @property {{ temp: number, temp_min: number, temp_max: number, humidity: number, pressure: number }} main
 * @property {Array<{ id: number, main: string, description: string, icon: string }>} weather
 * @property {{ speed: number, deg?: number }} wind
 * @property {{ all: number }} clouds
 * @property {string} dt_txt
 */

/**
 * @typedef {Object} ForecastData
 * @property {ForecastItem[]} list
 * @property {{ name: string, country: string, coord: { lat: number, lon: number } }} city
 */

/**
 * @typedef {Object} DailyForecast
 * @property {string} date
 * @property {string} day
 * @property {number} temp_min
 * @property {number} temp_max
 * @property {number} temp_avg
 * @property {number} humidity
 * @property {string} description
 * @property {string} icon
 * @property {number} wind_speed
 */