"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, Package, Download, PlayCircle } from "lucide-react"

type Enrollment = {
  id: string
  enrolledAt: Date
  course: { id: string; title: string; slug: string }
}

type OrderItem = {
  id: string
  product: { id: string; title: string; fileUrl: string } | null
  order: { createdAt: Date }
}

export function AccountTabs({
  enrollments,
  orderItems,
}: {
  enrollments: Enrollment[]
  orderItems: OrderItem[]
}) {
  const [tab, setTab] = useState<"courses" | "products">("courses")

  return (
    <div>
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setTab("courses")}
          className={
            tab === "courses"
              ? "flex items-center gap-2 border-b-2 border-blue-600 px-4 py-3 text-sm font-medium text-blue-700"
              : "flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
          }
        >
          <GraduationCap className="h-4 w-4" /> My Courses ({enrollments.length})
        </button>
        <button
          onClick={() => setTab("products")}
          className={
            tab === "products"
              ? "flex items-center gap-2 border-b-2 border-blue-600 px-4 py-3 text-sm font-medium text-blue-700"
              : "flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
          }
        >
          <Package className="h-4 w-4" /> My Products ({orderItems.length})
        </button>
      </div>

      <div className="mt-6">
        {tab === "courses" &&
          (enrollments.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {enrollments.map((e) => (
                <div key={e.id} className="flex items-center gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <PlayCircle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{e.course.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Enrolled {new Date(e.enrolledAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Link
                    href={`/courses/${e.course.slug}`}
                    className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                  >
                    Continue
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={GraduationCap}
              message="You haven't enrolled in any courses yet."
              ctaLabel="Browse Courses"
              ctaHref="/courses"
            />
          ))}

        {tab === "products" &&
          (orderItems.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {orderItems.map(
                (item) =>
                  item.product && (
                    <div key={item.id} className="flex items-center gap-4 rounded-xl border border-border bg-white p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        <Package className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{item.product.title}</p>
                        <p className="text-xs text-muted-foreground">
                          Purchased {new Date(item.order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      
                        <a
                        href={item.product.fileUrl}
                        className="flex items-center gap-1.5 rounded-md bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700"
                      >
                        <Download className="h-3.5 w-3.5" /> Download
                      </a>
                    </div>
                  )
              )}
            </div>
          ) : (
            <EmptyState
              icon={Package}
              message="You haven't purchased any products yet."
              ctaLabel="Browse Products"
              ctaHref="/products"
            />
          ))}
      </div>
    </div>
  )
}

function EmptyState({
  icon: Icon,
  message,
  ctaLabel,
  ctaHref,
}: {
  icon: typeof GraduationCap
  message: string
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-border bg-white py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-muted-foreground">
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-4 text-sm text-muted-foreground">{message}</p>
      <Link href={ctaHref} className="mt-4 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
        {ctaLabel}
      </Link>
    </div>
  )
}
