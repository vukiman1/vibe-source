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
      <main className="ml-64 mr-72 min-h-[calc(100vh-64px)] p-6">
        {children}
        <Footer />
      </main>
      <WelcomePopup />
    </>
  );
}
