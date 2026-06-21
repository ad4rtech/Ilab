"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutGrid,
  Package,
  GraduationCap,
  FileText,
  Users,
  BarChart3,
  Mail,
  Settings,
  LogOut,
  Zap,
} from "lucide-react"
import { signOut } from "next-auth/react"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutGrid },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Courses", href: "/admin/courses", icon: GraduationCap },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Sales Reports", href: "/admin/sales", icon: BarChart3 },
  { label: "Subscribers", href: "/admin/subscribers", icon: Mail },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-zinc-950 text-zinc-300">
      <div className="flex items-center gap-3 border-b border-zinc-800 p-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
          <Zap className="h-4 w-4 fill-white text-white" />
        </span>
        <div>
          <p className="font-display text-sm font-bold leading-tight text-white">iLab Growth</p>
          <p className="text-xs text-zinc-500">Admin Panel</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "flex items-center gap-3 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white"
                  : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-zinc-800 p-3">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
