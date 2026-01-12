"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Seller {
  id: string;
  name: string;
  avatar: string;
  followers: string;
  href: string;
  isOnline?: boolean;
}

const topSellers: Seller[] = [
  {
    id: "1",
    name: "CodeMasters",
    avatar: "/assets/images/avatars/u1.jpg",
    followers: "12.5k",
    href: "/u/codemasters",
    isOnline: true,
  },
  {
    id: "2",
    name: "Pixel Perfect",
    avatar: "/assets/images/avatars/u2.jpg",
    followers: "8.2k",
    href: "/u/pixelperfect",
    isOnline: true,
  },
  {
    id: "3",
    name: "UX Studio",
    avatar: "/assets/images/avatars/u3.jpg",
    followers: "5.9k",
    href: "/u/uxstudio",
    isOnline: false,
  },
];

export function TopSellers() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm">
          TOP SELLERS
        </h3>
        <Link
          href="/sellers"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {topSellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </div>
  );
}

function SellerCard({ seller }: { seller: Seller }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Avatar className="h-11 w-11 border-2 border-white shadow-sm cursor-pointer">
          <AvatarImage src={seller.avatar} alt={seller.name} />
          <AvatarFallback className="bg-slate-100 font-bold text-slate-500">
            {seller.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {seller.isOnline !== undefined && (
          <span
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
              seller.isOnline ? "bg-green-500" : "bg-slate-300"
            }`}
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <Link
          href={seller.href}
          className="block text-sm font-bold text-slate-800 hover:text-blue-600 truncate"
        >
          {seller.name}
        </Link>
        <p className="text-xs font-medium text-slate-500">
          {seller.followers} followers
        </p>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="h-8 rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-4 font-semibold"
      >
        Follow
      </Button>
    </div>
  );
}
