import { AdminHeader } from "@/components/layout/AdminHeader";
import { AdminSidebar } from "@/components/sidebar/admin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader />
      <div className="flex h-[calc(100vh-64px)]">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </>
  );
}
