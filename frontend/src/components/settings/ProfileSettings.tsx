"use client";

import { useState } from "react";
import { Camera, Check, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import type { UserProfile } from "@/types/settings.types";

interface ProfileSettingsProps {
  user: UserProfile;
}

export function ProfileSettings({ user }: ProfileSettingsProps) {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio || "");

  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="border-b p-6">
        <h2 className="text-lg font-bold">Thông tin hồ sơ</h2>
        <p className="text-sm text-muted-foreground">
          Thông tin này sẽ hiển thị công khai trên chợ ứng dụng.
        </p>
      </div>

      <div className="space-y-8 p-6">
        {/* Avatar Upload */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="group relative cursor-pointer">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-muted">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Camera className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-medium">Ảnh đại diện</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              JPG, GIF hoặc PNG. Kích thước tối đa 800K.
            </p>
            <div className="flex gap-3">
              <Button variant="outline">Tải ảnh mới</Button>
              <Button variant="ghost" className="text-destructive">
                Xóa
              </Button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <label className="mb-2 block text-sm font-medium">
              Tên hiển thị
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-muted/50"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <Input
                type="email"
                value={user.email}
                disabled
                className="cursor-not-allowed bg-muted pl-10"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Check className="h-4 w-4 text-green-500" />
              </span>
            </div>
          </div>

          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Giới thiệu (Bio)
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Viết một chút về bản thân bạn..."
              rows={4}
              maxLength={200}
              className="block w-full rounded-lg border border-input bg-muted/50 px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <p className="mt-1 text-right text-xs text-muted-foreground">
              {bio.length}/200 ký tự
            </p>
          </div>

          {/* Verified Badge Section */}
          <div className="col-span-2">
            <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/30 dark:bg-blue-900/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900/30">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Xác minh danh tính</p>
                  <p className="text-xs text-muted-foreground">
                    Tài khoản của bạn đã được xác minh là nhà phát triển uy tín.
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                Đã xác minh
              </span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <Button className="px-6 font-bold shadow-sm">Lưu thay đổi</Button>
        </div>
      </div>
    </Card>
  );
}

// Import ShieldCheck
import { ShieldCheck } from "lucide-react";
