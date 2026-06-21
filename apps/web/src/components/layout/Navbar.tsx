"use client"

import { useState } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { User, ChevronDown, LayoutDashboard, GraduationCap, Package, LogOut } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const { data: session, status } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
            iL
          </span>
          <span>
            iLab <span className="text-amber-600">Growth</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {status === "loading" ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-zinc-200" />
          ) : session?.user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-border py-1 pl-1 pr-3 hover:bg-zinc-50"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  {session.user.name?.[0]?.toUpperCase() ?? <User className="h-3.5 w-3.5" />}
                </span>
                <span className="text-sm font-medium">{session.user.name?.split(" ")[0] ?? "Account"}</span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-border bg-white py-1 shadow-lg">
                  <div className="border-b border-border px-4 py-3">
                    <p className="text-sm font-medium">{session.user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{session.user.email}</p>
                  </div>
                  <Link
                    href="/account"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-50"
                  >
                    <LayoutDashboard className="h-4 w-4" /> My Account
                  </Link>
                  <Link
                    href="/account?tab=courses"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-50"
                  >
                    <GraduationCap className="h-4 w-4" /> My Courses
                  </Link>
                  <Link
                    href="/account?tab=products"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-50"
                  >
                    <Package className="h-4 w-4" /> My Products
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex w-full items-center gap-2 border-t border-border px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden text-sm font-medium hover:text-foreground/80 sm:block">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
