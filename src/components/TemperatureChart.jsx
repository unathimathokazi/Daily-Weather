import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function TemperatureChart({ forecast = [] }) {
  if (!forecast.length) return null;

  
  const chartData = forecast.map((day, i) => ({
    ...day,
    dayLabel: i === 0 
      ? "Today" 
      : new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }) 
  }));

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">Temperature Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="dayLabel" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="tempC" stroke="#ff7300" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
