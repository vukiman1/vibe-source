import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/product/ProductFilters";
import type { Product } from "@/types";

// TODO: Fetch from API
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Portfolio Starter Kit",
    description: "Professional, high-conversion portfolio template designed for developers...",
    price: 0,
    thumbnail: "/placeholder.jpg",
    tags: ["HTML", "CSS"],
    features: ["Landing Page", "Portfolio", "Responsive"],
    rating: 4.8,
    reviewCount: 12,
    badge: "COMMUNITY",
  },
  {
    id: "2",
    title: "SaaS Dashboard Kit",
    description: "Complete SaaS dashboard with analytics, user management and billing...",
    price: 299000,
    thumbnail: "/placeholder.jpg",
    tags: ["React", "TypeScript"],
    features: ["Dashboard", "Analytics", "Billing"],
    rating: 4.9,
    reviewCount: 28,
  },
  {
    id: "3",
    title: "E-commerce Starter",
    description: "Full-featured e-commerce template with cart, checkout and payment...",
    price: 499000,
    thumbnail: "/placeholder.jpg",
    tags: ["Next.js", "Stripe"],
    features: ["Shop", "Cart", "Payment"],
    rating: 4.7,
    reviewCount: 45,
  },
];

export default function MarketplacePage() {
  return (
    <>
      <nav className="mb-4 text-sm text-muted-foreground">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">Marketplace</span>
      </nav>

      <h1 className="mb-6 text-3xl font-bold">Khám phá Gian Hàng</h1>

      <ProductFilters />

      <ProductGrid products={mockProducts} />

      <div className="mt-8 flex justify-center">
        <button className="rounded-full border px-6 py-2 text-sm hover:bg-accent">
          Show More Booths ↓
        </button>
      </div>
    </>
  );
}
