import { Search, Bell, ChevronDown } from "lucide-react"

export function AdminTopbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-white px-8 py-5">
      <h1 className="font-display text-2xl font-bold">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-md border border-border bg-zinc-50 py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-zinc-50">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-600" />
        </button>

        <button className="flex items-center gap-2 rounded-md border border-border py-1.5 pl-1.5 pr-3 hover:bg-zinc-50">
          <div className="h-7 w-7 rounded-full bg-zinc-200" />
          <span className="text-sm font-medium">Dr. Ifeoma</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>
    </header>
  )
}
