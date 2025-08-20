"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", blue: 35, green: 28, red: 10 },
  { name: "Feb", blue: 5, green: 28, red: 10 },
  { name: "Mar", blue: 15, green: 9, red: 4 },
  { name: "Apr", blue: 15, green: 25, red: 10 },
  { name: "May", blue: 10, green: 3, red: 7 },
  { name: "Jun", blue: 35, green: 50, red: 7 },
  { name: "Jul", blue: 23, green: 35, red: 20 },
  { name: "Aug", blue: 23, green: 8, red: 20 },
  { name: "Sep", blue: 35, green: 32, red: 8 },
];

export default function MonthlyChart() {
  return (
    <ResponsiveContainer width="100%" height={280} className="">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="blue" fill="#4545FE" />
        <Bar dataKey="green" fill="#12B76A" />
        <Bar dataKey="red" fill="#F04438" />
      </BarChart>
    </ResponsiveContainer>
  );
}
