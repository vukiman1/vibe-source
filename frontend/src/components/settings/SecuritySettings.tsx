"use client";

import { useState } from "react";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import type { SecuritySession } from "@/types/settings.types";

interface SecuritySettingsProps {
  sessions: SecuritySession[];
}

export function SecuritySettings({ sessions }: SecuritySettingsProps) {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const getDeviceIcon = (deviceType: SecuritySession["deviceType"]) => {
    switch (deviceType) {
      case "desktop":
        return Laptop;
      case "mobile":
        return Smartphone;
      case "tablet":
        return Tablet;
      default:
        return Laptop;
    }
  };

  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="border-b p-6">
        <h2 className="text-lg font-bold">Bảo mật & Đăng nhập</h2>
      </div>

      <div className="space-y-8 divide-y p-6">
        {/* Change Password */}
        <div className="grid gap-6 pt-2 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium">Đổi mật khẩu</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Đảm bảo mật khẩu của bạn dài ít nhất 15 ký tự hoặc ít nhất 8 ký tự
              bao gồm cả số và chữ cái.
            </p>
          </div>
          <div className="space-y-4 md:col-span-2">
            <Input
              type="password"
              name="current-password-settings"
              placeholder="Mật khẩu hiện tại"
              autoComplete="chrome-off"
              data-lpignore="true"
              data-form-type="other"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="password"
                name="new-password-settings"
                placeholder="Mật khẩu mới"
                autoComplete="chrome-off"
                data-lpignore="true"
                data-form-type="other"
              />
              <Input
                type="password"
                name="confirm-password-settings"
                placeholder="Xác nhận mật khẩu mới"
                autoComplete="chrome-off"
                data-lpignore="true"
                data-form-type="other"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="ghost" size="sm">
                Cập nhật mật khẩu
              </Button>
            </div>
          </div>
        </div>

        {/* 2FA */}
        <div className="grid gap-6 pt-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium">Xác thực 2 bước (2FA)</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Thêm một lớp bảo mật bổ sung cho tài khoản của bạn.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-blue-900/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Ứng dụng xác thực</p>
                  <p className="text-xs text-muted-foreground">
                    Sử dụng ứng dụng như Google Authenticator hoặc Authy để tạo
                    mã xác thực.
                  </p>
                  <Button
                    variant="link"
                    className="mt-3 h-auto p-0 text-sm"
                    size="sm"
                  >
                    Thiết lập ngay
                  </Button>
                </div>
              </div>
              <button
                onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  is2FAEnabled ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    is2FAEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="grid gap-6 pt-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium">Phiên đăng nhập</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Quản lý và đăng xuất khỏi các phiên hoạt động trên các thiết bị
              khác.
            </p>
          </div>
          <div className="space-y-4 md:col-span-2">
            {sessions.map((session) => {
              const DeviceIcon = getDeviceIcon(session.deviceType);
              return (
                <div
                  key={session.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <DeviceIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {session.device}
                        {session.isCurrent && (
                          <span className="ml-2 rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            HIỆN TẠI
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {session.location} • {session.ipAddress}
                        {!session.isCurrent && ` • ${session.lastActive}`}
                      </p>
                    </div>
                  </div>
                  {!session.isCurrent && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-destructive hover:text-destructive"
                    >
                      Đăng xuất
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
