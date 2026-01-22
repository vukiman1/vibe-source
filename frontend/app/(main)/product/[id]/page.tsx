import { Suspense } from "react";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

// TODO: Fetch from API
const mockProduct = {
  id: "1",
  title: "Portfolio Starter Kit",
  description:
    "Professional, high-conversion portfolio template designed for developers. Includes responsive layout, dark mode support, smooth animations, and SEO optimization. Perfect for showcasing your projects and skills.",
  price: 0,
  thumbnail: "/assets/placeholder.jpg",
  tags: ["HTML", "CSS", "JavaScript"],
  features: ["Landing Page", "Portfolio", "Responsive", "Dark Mode"],
  rating: 4.8,
  reviewCount: 124,
  downloads: 1250,
  views: 5420,
  badge: "COMMUNITY",
  seller: {
    name: "CodeMasters",
    avatar: "/avatar.jpg",
    followers: "12.5k",
  },
  screenshots: ["/screenshot1.jpg", "/screenshot2.jpg", "/screenshot3.jpg"],
  includes: [
    "Full source code",
    "Documentation",
    "Free updates",
    "6 months support",
  ],
};

function ProductDetailSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-5 w-64" />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Skeleton className="aspect-video w-full rounded-lg" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-20 w-32 rounded" />
            ))}
          </div>
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  // TODO: Replace with actual API call
  // const product = await fetchProduct(id);
  const product = { ...mockProduct, id };

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailClient product={product} />
    </Suspense>
  );
}
