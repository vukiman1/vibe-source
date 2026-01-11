"use client";

import Link from "next/link";
import { BannerCard } from "./BannerCard";
import { BannerSlider } from "./BannerSlider";

interface Keyword {
  id: string;
  label: string;
  href: string;
  color: string;
}

// Mock data - TODO: fetch from API
const featuredKeywords: Keyword[] = [
  { id: "k1", label: "Làm việc", href: "/category/work", color: "bg-teal-500 hover:bg-teal-600" },
  { id: "k2", label: "Giải trí", href: "/category/entertainment", color: "bg-cyan-600 hover:bg-cyan-700" },
  { id: "k3", label: "Học tập", href: "/category/education", color: "bg-indigo-500 hover:bg-indigo-600" },
  { id: "k4", label: "AI", href: "/category/ai", color: "bg-slate-600 hover:bg-slate-700" },
  { id: "k5", label: "Wallet", href: "/category/wallet", color: "bg-slate-700 hover:bg-slate-800" },
  { id: "k6", label: "Youtube", href: "/category/youtube", color: "bg-red-500 hover:bg-red-600" },
];

interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  gradient?: string;
}

// Mock data - TODO: fetch from API
const mainBanners: Banner[] = [
  {
    id: "1",
    title: "Flash Sale Cuối Năm",
    subtitle: "Giảm đến 50% tất cả templates",
    image: "/banners/sale.jpg",
    href: "/sale",
    gradient: "from-blue-500 via-cyan-400 to-teal-300",
  },
  {
    id: "2",
    title: "Bộ Sưu Tập AI Tools",
    subtitle: "Công cụ AI mới nhất 2024",
    image: "/banners/ai.jpg",
    href: "/collections/ai",
    gradient: "from-purple-500 via-pink-400 to-rose-300",
  },
  {
    id: "3",
    title: "Premium Templates",
    subtitle: "Thiết kế chuyên nghiệp",
    image: "/banners/premium.jpg",
    href: "/premium",
    gradient: "from-amber-500 via-orange-400 to-yellow-300",
  },
];

const sideBanners: Banner[] = [
  {
    id: "s1",
    title: "Ứng dụng VPN",
    subtitle: "Tốc độ - Bảo mật",
    image: "/banners/vpn.jpg",
    href: "/vpn",
    gradient: "from-red-500 to-rose-400",
  },
  {
    id: "s2",
    title: "Khám phá Thế giới AI",
    subtitle: "Siêu tối ưu",
    image: "/banners/ai-world.jpg",
    href: "/ai",
    gradient: "from-sky-400 to-blue-500",
  },
];

/**
 * Hero banner section with main slider and side banners
 * Layout: [Main Slider (2/3)] [Side Banners (1/3)]
 */
export function HeroBanner() {
  return (
    <div className="mb-8 space-y-6">
      {/* Banner Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Main Slider - takes 2/3 width */}
        <div className="lg:col-span-2">
          <BannerSlider banners={mainBanners} />
        </div>

        {/* Side Banners - takes 1/3 width */}
        <div className="flex flex-col gap-4">
          {sideBanners.map((banner) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
      </div>

      {/* Featured Keywords */}
      <div className="rounded-lg bg-card p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          Từ khóa nổi bật
        </h3>
        <div className="flex flex-wrap gap-3">
          {featuredKeywords.map((keyword) => (
            <Link
              key={keyword.id}
              href={keyword.href}
              className={`rounded-lg px-6 py-3 text-sm font-medium text-white transition-all ${keyword.color}`}
            >
              {keyword.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
