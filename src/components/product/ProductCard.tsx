"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-video bg-muted">
          {product.thumbnail && (
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute left-2 top-2 flex gap-1">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="line-clamp-1 font-semibold hover:text-primary">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          {product.features?.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          {product.price === 0 ? (
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              FREE
            </Badge>
          ) : (
            <span className="font-bold">{product.price}đ</span>
          )}
          {product.badge && (
            <Badge variant="outline" className="ml-2 text-orange-500">
              {product.badge}
            </Badge>
          )}
        </div>
        <Button size="sm">Download Now →</Button>
      </CardFooter>
    </Card>
  );
}
