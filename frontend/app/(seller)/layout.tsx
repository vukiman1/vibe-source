import { Header, Footer } from "@/components/layout";
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
        <main className="flex-1 p-6">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
