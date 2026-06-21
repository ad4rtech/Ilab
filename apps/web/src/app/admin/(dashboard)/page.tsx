import { AdminTopbar } from "@/components/admin/AdminTopbar"
import { DashboardStats } from "@/components/admin/DashboardStats"
import { RevenueChart } from "@/components/admin/RevenueChart"
import { SubscriberChart } from "@/components/admin/SubscriberChart"
import { RecentSales } from "@/components/admin/RecentSales"
import { RecentBlogPosts } from "@/components/admin/RecentBlogPosts"
import { RecentUsers } from "@/components/admin/RecentUsers"
import { Plus, FileText, Download, Calendar } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <>
      <AdminTopbar title="Dashboard" />

      <div className="space-y-6 p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              <Plus className="h-4 w-4" /> Add Product
            </button>
            <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-50">
              <FileText className="h-4 w-4" /> New Blog Post
            </button>
            <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-50">
              <Download className="h-4 w-4" /> Export Sales Report
            </button>
          </div>

          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium">
            <Calendar className="h-4 w-4" /> Jun 1 &mdash; Jun 14, 2025
          </button>
        </div>

        <DashboardStats />

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <RevenueChart />
          </div>
          <SubscriberChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <RecentSales />
          <RecentBlogPosts />
          <RecentUsers />
        </div>
      </div>
    </>
  )
}
