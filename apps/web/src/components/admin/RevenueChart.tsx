"use client"

import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { day: "Mon", revenue: 980 },
  { day: "Tue", revenue: 1240 },
  { day: "Wed", revenue: 1080 },
  { day: "Thu", revenue: 1620 },
  { day: "Fri", revenue: 1890 },
  { day: "Sat", revenue: 1540 },
  { day: "Sun", revenue: 2100 },
]

export function RevenueChart() {
  return (
    <div className="rounded-xl border border-border bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-base font-semibold">Revenue &mdash; Last 7 Days</h3>
          <p className="mt-1 text-sm text-muted-foreground">Daily sales across all products &amp; services</p>
        </div>
        <select className="rounded-md border border-border bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#71717a" }} />
            <Tooltip
              formatter={(value: number) => [`$${value}`, "Revenue"]}
              contentStyle={{ borderRadius: 8, borderColor: "#e4e4e7", fontSize: 12 }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} fill="url(#revenueFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
