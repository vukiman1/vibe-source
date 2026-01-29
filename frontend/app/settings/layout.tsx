"use client";

import { Header } from "@/components/layout";
import { SettingsSidebar } from "@/components/settings/SettingsSidebar";
import { mockUserProfile, mockSettingsMenuItems } from "@/lib/settings.mock";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleLogout = () => {
    console.log("Logout clicked");
    // TODO: Implement logout logic
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Cài đặt tài khoản
          </h1>
          <p className="mt-2 text-muted-foreground">
            Quản lý thông tin cá nhân, bảo mật và các kết nối của bạn.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <SettingsSidebar
            user={mockUserProfile}
            menuItems={mockSettingsMenuItems}
            onLogout={handleLogout}
          />

          {/* Main Content - rendered by nested routes */}
          {children}
        </div>
      </div>
    </>
  );
}
