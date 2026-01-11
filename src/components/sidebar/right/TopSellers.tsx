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
}

const topSellers: Seller[] = [
  // TODO: Replace with real data
];

export function TopSellers() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">TOP SELLERS</h3>
        <Link href="/sellers" className="text-sm text-primary hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-3">
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
      <Avatar className="h-10 w-10">
        <AvatarImage src={seller.avatar} alt={seller.name} />
        <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{seller.name}</h4>
        <p className="text-xs text-muted-foreground">{seller.followers} followers</p>
      </div>
      <Button variant="outline" size="sm">
        Follow
      </Button>
    </div>
  );
}
