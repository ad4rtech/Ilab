import { DollarSign, Users, Mail, ShoppingCart, TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  { label: "Total Revenue", value: "$14,280", change: "+18%", trend: "up" as const, icon: DollarSign },
  { label: "Total Users", value: "12,440", change: "+9%", trend: "up" as const, icon: Users },
  { label: "Email Subscribers", value: "8,912", change: "+5%", trend: "up" as const, icon: Mail },
  { label: "Orders This Month", value: "347", change: "-3%", trend: "down" as const, icon: ShoppingCart },
]

export function DashboardStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <stat.icon className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-4 font-display text-3xl font-bold">{stat.value}</p>
          <div className="mt-2 flex items-center gap-1 text-xs">
            {stat.trend === "up" ? (
              <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-muted-foreground" />
            )}
            <span className={stat.trend === "up" ? "font-medium text-amber-600" : "font-medium text-muted-foreground"}>
              {stat.change}
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  )
}
