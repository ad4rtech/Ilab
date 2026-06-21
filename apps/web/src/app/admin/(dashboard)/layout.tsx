import { AdminSidebar } from "@/components/admin/AdminSidebar"

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-amber-50/40">
      <AdminSidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
