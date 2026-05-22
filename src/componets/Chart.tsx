import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", savings: 400 },
  { month: "Feb", savings: 700 },
  { month: "Mar", savings: 1200 },
  { month: "Apr", savings: 900 },
  { month: "May", savings: 1700 },
];

export default function Chart() {
  return (
    <div className="bg-white p-5  rounded-2xl shadow w-full h-65">
      <h2 className="font-semibold mb-4">Savings Growth</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="#00543B"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
