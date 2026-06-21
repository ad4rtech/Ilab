import { ExternalLink } from "lucide-react"

const badgeStyles: Record<string, string> = {
  Course: "bg-blue-50 text-blue-700",
  Product: "bg-zinc-100 text-zinc-700",
  Service: "bg-amber-600 text-white",
}

const sales = [
  { title: "Digital Marketing Masterclass", customer: "Amina W.", location: "Kenya", price: "$49", type: "Course" },
  { title: "Complete Business Plan Toolkit", customer: "David K.", location: "Ghana", price: "$29", type: "Product" },
  { title: "SME Cash Flow Spreadsheet Pack", customer: "Fatima D.", location: "Nigeria", price: "$15", type: "Product" },
  { title: "Growth Accelerator Program", customer: "Kwame A.", location: "Ghana", price: "$499", type: "Service" },
  { title: "Pitch Deck Template for Startups", customer: "Ngozi O.", location: "Nigeria", price: "$39", type: "Product" },
]

export function RecentSales() {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold">Recent Sales</h3>
        <a href="#" className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
          View report <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <ul className="mt-3 divide-y divide-border">
        {sales.map((sale) => (
          <li key={sale.title} className="flex items-center gap-3 py-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{sale.title}</p>
              <p className="text-xs text-muted-foreground">
                {sale.customer} &middot; {sale.location}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-semibold">{sale.price}</span>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badgeStyles[sale.type]}`}>
                {sale.type}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
