"use client";

import { Star, Download, Eye, Heart, Share2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CurrencyDisplay } from "@/components/common/CurrencyDisplay";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  tags: string[];
  features: string[];
  rating: number;
  reviewCount: number;
  downloads: number;
  views: number;
  badge?: string;
  seller: {
    name: string;
    avatar: string;
    followers: string;
  };
  screenshots: string[];
  includes: string[];
}

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  return (
    <div className="space-y-6">
      <nav className="text-sm text-muted-foreground">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span>Marketplace</span>
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">{product.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Preview Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Preview Image
            </div>
          </div>

          {/* Screenshots */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.screenshots.map((_, index) => (
              <div
                key={index}
                className="h-20 w-32 shrink-0 rounded bg-muted"
              />
            ))}
          </div>

          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Mô tả</h2>
              <p className="text-muted-foreground">{product.description}</p>

              <h3 className="mb-3 mt-6 font-semibold">Bao gồm:</h3>
              <ul className="space-y-2">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Product Info */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="mb-2 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="mb-2 text-2xl font-bold">{product.title}</h1>

              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {product.rating} ({product.reviewCount})
                </span>
                <span className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  {product.downloads}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {product.views}
                </span>
              </div>

              <Separator className="my-4" />

              <div className="mb-4">
                {product.price === 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-green-500">
                      FREE
                    </span>
                    {product.badge && (
                      <Badge variant="outline">{product.badge}</Badge>
                    )}
                  </div>
                ) : (
                  <CurrencyDisplay
                    amountInVND={product.price}
                    className="text-3xl font-bold"
                    compact={false}
                    interactive={false}
                  />
                )}
              </div>

              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Tải xuống ngay
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Yêu thích
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seller Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold">Người bán</h3>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={product.seller.avatar} />
                  <AvatarFallback>
                    {product.seller.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">{product.seller.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {product.seller.followers} followers
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
