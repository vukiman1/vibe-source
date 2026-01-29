"use client";

import { Card } from "@/components/ui/card";

export default function SettingsConnectionsPage() {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="border-b p-6">
        <h2 className="text-lg font-bold">Liên kết tài khoản</h2>
        <p className="text-sm text-muted-foreground">
          Kết nối với các dịch vụ và nền tảng khác.
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
