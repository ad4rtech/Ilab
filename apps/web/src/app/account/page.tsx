import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@repo/database"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AccountTabs } from "@/components/account/AccountTabs"

export default async function AccountPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const [enrollments, orderItems] = await Promise.all([
    prisma.enrollment.findMany({
      where: { userId: session.user.id },
      include: { course: true },
      orderBy: { enrolledAt: "desc" },
    }),
    prisma.orderItem.findMany({
      where: { order: { userId: session.user.id, status: "PAID" } },
      include: { product: true, order: true },
      orderBy: { order: { createdAt: "desc" } },
    }),
  ])

  return (
    <>
      <Navbar />
      <main className="bg-amber-50/30 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
              {session.user.name?.[0]?.toUpperCase() ?? "U"}
            </span>
            <div>
              <h1 className="font-display text-2xl font-bold">{session.user.name}</h1>
              <p className="text-sm text-muted-foreground">{session.user.email}</p>
            </div>
          </div>

          <div className="mt-8">
            <AccountTabs enrollments={enrollments} orderItems={orderItems} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
