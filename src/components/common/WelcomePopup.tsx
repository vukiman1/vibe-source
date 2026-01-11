"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import Image from "next/image";

const SHOP_IMAGE = "/assets/images/welcome/popup/shop.png";
const STORE_IMAGE = "/assets/images/welcome/popup/store.png";

const POPUP_STORAGE_KEY = "vibe-source-welcome-shown";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown
    const hasShown = localStorage.getItem(POPUP_STORAGE_KEY);
    if (!hasShown) {
      // Delay a bit for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Hide body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(POPUP_STORAGE_KEY, "true");
  };

  const handleCardClick = () => {
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-3xl px-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-4 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Chào mừng đến với{" "}
              <span className="text-cyan-400">Vibe Source</span>
            </h2>
          </div>
          <p className="mt-2 text-center text-white/70">
            Nền tảng mua bán source code hàng đầu Việt Nam
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Buy Source Card */}
          <Link href="/" onClick={handleCardClick}>
            <div className="glass-card glass-card-cyan group h-full transition-all duration-300 hover:-translate-y-1">
              {/* Gradient Container with Image + Content */}
              <div className="flex flex-col items-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-cyan-600/20 p-6">
                {/* Image */}
                <div
                  className="mb-4 w-full overflow-hidden rounded-2xl bg-cyan-900/30 border border-cyan-400/40 shadow-2xl"
                  style={{ height: "180px" }}
                >
                  <Image
                    src={SHOP_IMAGE}
                    alt="Shop"
                    width={306}
                    height={180}
                    className="h-full w-full object-cover drop-shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    MUA SOURCE
                  </h3>
                  <p className="mb-4 h-10 text-sm text-white/70">
                    Khám phá hàng ngàn source code chất lượng cao
                  </p>
                  <Button className="border-2 border-cyan-400/50 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 px-10 py-2 font-medium text-slate-800 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]">
                    Xem ngay
                  </Button>
                </div>
              </div>
            </div>
          </Link>

          {/* Sell Source Card */}
          <Link href="/seller/dashboard" onClick={handleCardClick}>
            <div className="glass-card glass-card-purple group h-full transition-all duration-300 hover:-translate-y-1">
              {/* Gradient Container with Image + Content */}
              <div className="flex flex-col items-center rounded-2xl border border-purple-400/40 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-purple-600/20 p-6">
                {/* Image */}
                <div
                  className="mb-4 w-full overflow-hidden rounded-2xl bg-purple-900/30 border border-purple-400/40 shadow-2xl"
                  style={{ height: "180px" }}
                >
                  <Image
                    src={STORE_IMAGE}
                    alt="Store"
                    width={306}
                    height={180}
                    className="h-full w-full object-cover drop-shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    BÁN SOURCE
                  </h3>
                  <p className="mb-4 h-10 text-sm text-white/70">
                    Kiếm thu nhập ngay từ source code của bạn dễ dàng
                  </p>
                  <Button className="border-2 border-purple-400/50 rounded-full bg-linear-to-r from-purple-500 via-purple-300 to-purple-500 px-10 py-2 font-medium text-slate-800 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]">
                    Đăng ký ngay
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Skip Link */}
        <div className="mt-6 text-center">
          <button
            onClick={handleClose}
            className="text-sm text-white/50 transition-colors hover:text-white/80"
          >
            Bỏ qua và khám phá sau
          </button>
        </div>
      </div>
    </div>
  );
}
