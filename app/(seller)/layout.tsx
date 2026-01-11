import { Header } from "@/components/layout/Header";
import { SellerSidebar } from "@/components/sidebar/seller";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        <SellerSidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </>
  );
}
