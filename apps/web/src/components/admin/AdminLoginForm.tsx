"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn, signOut, getSession } from "next-auth/react"
import { toast } from "sonner"
import { ShieldCheck, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

export function AdminLoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const result = await signIn("credentials", { email, password, redirect: false })

    if (result?.error) {
      setLoading(false)
      toast.error("Invalid credentials.")
      return
    }

    const session = await getSession()
    const role = (session?.user as { role?: string } | undefined)?.role

    if (role !== "ADMIN") {
      await signOut({ redirect: false })
      setLoading(false)
      toast.error("This account does not have admin access.")
      return
    }

    setLoading(false)
    toast.success("Welcome back, admin.")
    router.push("/admin")
    router.refresh()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-16">
      <div className="flex items-center gap-2 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <span className="font-display text-lg font-bold">iLab Growth Admin</span>
      </div>

      <div className="mt-8 w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h1 className="font-display text-xl font-bold text-white">Admin Sign In</h1>
        <p className="mt-1 text-sm text-zinc-400">Restricted access. Authorized personnel only.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-300">Email Address</label>
            <div className="relative mt-1.5">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ilabgrowth.com"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-300">Password</label>
            <div className="relative mt-1.5">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 py-2.5 pl-9 pr-9 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"} {!loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>

      <p className="mt-6 max-w-sm text-center text-xs text-zinc-600">
        This portal is for iLab Growth staff only. If you&apos;re a customer, go to{" "}
        <a href="/login" className="text-zinc-400 underline hover:text-zinc-300">
          the regular sign in page
        </a>
        .
      </p>
    </div>
  )
}
