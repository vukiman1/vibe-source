import { Header, Footer } from "@/components/layout";
import { LeftSidebar } from "@/components/sidebar/left";
import { RightSidebar } from "@/components/sidebar/right";
import { WelcomePopup } from "@/components/common";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <main className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:ml-64 lg:mr-72">
        {children}
        <Footer />
      </main>
      <WelcomePopup />
    </>
  );
}
