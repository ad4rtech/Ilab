import { Key, Pencil } from "lucide-react"

const users = [
  { name: "Amina Wanjiku", email: "amina@example.com", status: "Active" },
  { name: "David Kofi", email: "david@example.com", status: "Active" },
  { name: "Fatima Diallo", email: "fatima@example.com", status: "Active" },
  { name: "Emmanuel Asare", email: "emmanuel@example.com", status: "Disabled" },
]

export function RecentUsers() {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold">Recent Users</h3>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          Manage all &rarr;
        </a>
      </div>

      <ul className="mt-3 divide-y divide-border">
        {users.map((user) => (
          <li key={user.email} className="flex items-center gap-3 py-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user.email}</p>
            </div>
            <span
              className={
                user.status === "Active"
                  ? "rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
                  : "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500"
              }
            >
              {user.status}
            </span>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <button className="hover:text-foreground">
                <Key className="h-3.5 w-3.5" />
              </button>
              <button className="hover:text-foreground">
                <Pencil className="h-3.5 w-3.5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
