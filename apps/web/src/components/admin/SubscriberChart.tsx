"use client"

import { BarChart, Bar, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const data = [
  { month: "Jul", value: 30 },
  { month: "Aug", value: 35 },
  { month: "Sep", value: 38 },
  { month: "Oct", value: 50 },
  { month: "Nov", value: 55 },
  { month: "Dec", value: 62 },
  { month: "Jan", value: 68 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 88 },
  { month: "May", value: 92 },
  { month: "Jun", value: 100 },
]

export function SubscriberChart() {
  return (
    <div className="w-80 shrink-0 rounded-xl border border-border bg-white p-6">
      <h3 className="font-display text-base font-semibold">Subscriber Growth</h3>
      <p className="mt-1 text-sm text-muted-foreground">Last 12 months</p>

      <p className="mt-4 font-display text-3xl font-bold">8,912</p>
      <div className="mt-1 flex items-center gap-1 text-xs">
        <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
        <span className="font-medium text-amber-600">+1,240</span>
        <span className="text-muted-foreground">new this year</span>
      </div>

      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="value" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>Jul 2024</span>
        <span>Jun 2025</span>
      </div>
    </div>
  )
}
