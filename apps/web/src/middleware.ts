import NextAuth from "next-auth"
import { NextResponse } from "next/server"
import { authConfig } from "@/lib/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAdminRoute = pathname.startsWith("/admin") && pathname !== "/admin/login"

  if (isAdminRoute) {
    const role = (req.auth?.user as { role?: string } | undefined)?.role

    if (!req.auth || role !== "ADMIN") {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }
  }
})

export const config = {
  matcher: ["/admin/:path*"],
}
