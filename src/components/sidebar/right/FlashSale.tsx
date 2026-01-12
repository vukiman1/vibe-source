"use client";

import Image from "next/image";
import Link from "next/link";

interface FlashSaleItem {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  tokenPrice?: string;
  href: string;
}

const flashSaleItems: FlashSaleItem[] = [
  {
    id: "1",
    title: "DarkViz Components Vue.js Pro Kit",
    image: "/assets/images/products/p1.png",
    price: "375k",
    originalPrice: "725.000",
    tokenPrice: "150 VIBE",
    href: "/products/1",
  },
  {
    id: "2",
    title: "3D Portfolio Three.js Template",
    image: "/assets/images/products/p2.png",
    price: "800k",
    originalPrice: "1.600.000",
    tokenPrice: "320 VIBE",
    href: "/products/2",
  },
];

export function FlashSale() {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm">
          🔥 FLASH SALE
        </h3>
        <div className="flex items-center gap-1 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm shadow-red-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
              clipRule="evenodd"
            />
          </svg>
          02:14:59
        </div>
      </div>
      <div className="space-y-4">
        {flashSaleItems.map((item) => (
          <FlashSaleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function FlashSaleCard({ item }: { item: FlashSaleItem }) {
  return (
    <Link href={item.href} className="group flex gap-3 transition-colors">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-100 shadow-sm">
        {/* Placeholder for image if not exists */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-200 to-slate-300" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
        <h4 className="line-clamp-2 text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>

        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-red-500">
              {item.price}đ
            </span>
            {item.originalPrice && (
              <span className="text-xs text-muted-foreground line-through decoration-slate-400">
                {item.originalPrice}đ
              </span>
            )}
          </div>

          <div className="mt-1 flex">
            <span className="inline-flex items-center rounded-sm bg-purple-100 px-1.5 py-0.5 text-[10px] font-bold text-purple-600">
              {item.tokenPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
