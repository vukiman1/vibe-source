"use client";

import { Card } from "@/components/ui/card";

export default function SettingsNotificationsPage() {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="border-b p-6">
        <h2 className="text-lg font-bold">Cài đặt thông báo</h2>
        <p className="text-sm text-muted-foreground">
          Quản lý thông báo email và push notifications.
        </p>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground">
          Trang này đang được phát triển...
        </p>
      </div>
    </Card>
  );
}
