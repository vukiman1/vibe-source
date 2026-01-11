"use client";

import Image from "next/image";
import Link from "next/link";

interface FlashSaleItem {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  href: string;
}

const flashSaleItems: FlashSaleItem[] = [
  // TODO: Replace with real data
];

export function FlashSale() {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">FLASH SALE</h3>
        <span className="rounded bg-red-500 px-2 py-0.5 text-xs text-white">
          02:14:59
        </span>
      </div>
      <div className="space-y-3">
        {flashSaleItems.map((item) => (
          <FlashSaleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function FlashSaleCard({ item }: { item: FlashSaleItem }) {
  return (
    <Link
      href={item.href}
      className="flex gap-3 rounded-lg border p-2 transition-colors hover:bg-accent"
    >
      <div className="relative h-16 w-24 overflow-hidden rounded bg-muted">
        {/* <Image src={item.image} alt={item.title} fill className="object-cover" /> */}
      </div>
      <div className="flex-1">
        <h4 className="line-clamp-2 text-sm font-medium">{item.title}</h4>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-bold text-primary">{item.price}đ</span>
          {item.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {item.originalPrice}đ
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
