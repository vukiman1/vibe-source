"use client";

import { TrendingUp, Sparkles, Globe, Smartphone } from "lucide-react";
import { HeroBanner } from "@/components/banner";
import { ProductSection } from "@/components/product/ProductSection";
import type { Product } from "@/types";

// TODO: Fetch from API - mock data for different sections
const popularProducts: Product[] = [
  {
    id: "1",
    title: "Portfolio Starter Kit For All Use Who Want",
    description: "Professional portfolio template for developers...",
    price: 0,

    thumbnail: "/assets/placeholder.jpg",
    languages: ["HTML", "JS", "Nodejs"],
    isFavorite: true,
    categories: ["Landing Page", "Portfolio", "Responsive"],
    features: ["Landing Page", "Portfolio"],
    rating: 4.8,
    reviewCount: 120,
    badge: "FREE",
    pricingType: "free",
  },
  {
    id: "2",
    title: "SaaS Dashboard Kit",
    description: "Complete SaaS dashboard with analytics...",
    price: 299000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["React", "TypeScript"],
    features: ["Dashboard", "Analytics"],
    rating: 4.9,
    reviewCount: 85,
    pricingType: "cash",
  },
  {
    id: "3",
    title: "E-commerce Starter",
    description: "Full-featured e-commerce template...",
    price: 499000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["Next.js", "Nodejs"],
    features: ["Shop", "Cart"],
    rating: 4.7,
    reviewCount: 64,
    pricingType: "token",
  },
  {
    id: "token-demo",
    title: "Premium AI Assets",
    description: "Exclusive AI generated assets and components...",
    price: 500,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["AI", "Premium"],
    features: ["Icons", "Illustrations"],
    rating: 5.0,
    reviewCount: 120,
    pricingType: "token",
  },
  {
    id: "4",
    title: "Admin Panel Pro",
    description: "Modern admin dashboard template...",
    price: 399000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["Vue", "Tailwind"],
    features: ["Admin", "Charts"],
    rating: 4.8,
    reviewCount: 92,
  },
];

const recommendedProducts: Product[] = [
  {
    id: "5",
    title: "AI Chat Widget",
    description: "Integrate AI chat into your app...",
    price: 199000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["React", "python"],
    features: ["Chat", "AI"],
    rating: 4.9,
    reviewCount: 45,
    badge: "HOT",
  },
  {
    id: "6",
    title: "Landing Page Builder",
    description: "Drag & drop landing page builder...",
    price: 0,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["TypeScript"],
    features: ["Builder", "No-code"],
    rating: 4.6,
    reviewCount: 33,
    badge: "FREE",
  },
];

const webProducts: Product[] = [
  {
    id: "7",
    title: "Blog Template",
    description: "Modern blog with MDX support...",
    price: 149000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["Next.js", "MDX"],
    features: ["Blog", "SEO"],
    rating: 4.5,
    reviewCount: 28,
  },
  {
    id: "8",
    title: "Portfolio V2",
    description: "Creative portfolio with animations...",
    price: 0,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["React", "GSAP"],
    features: ["Portfolio", "Animation"],
    rating: 4.7,
    reviewCount: 51,
    badge: "FREE",
  },
];

const appProducts: Product[] = [
  {
    id: "9",
    title: "Fitness Tracker App",
    description: "React Native fitness tracking app...",
    price: 599000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["React Native"],
    features: ["Mobile", "Health"],
    rating: 4.8,
    reviewCount: 37,
  },
  {
    id: "10",
    title: "Food Delivery UI",
    description: "Beautiful food delivery app UI...",
    price: 399000,
    thumbnail: "/assets/placeholder.jpg",
    languages: ["Flutter"],
    features: ["Mobile", "E-commerce"],
    rating: 4.6,
    reviewCount: 29,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Banner with Slider */}
      <HeroBanner />

      {/* Product Sections */}
      <ProductSection
        title="Phổ biến"
        icon={TrendingUp}
        products={popularProducts}
        viewAllHref="/category/popular"
        maxItems={4}
      />

      <ProductSection
        title="Đề xuất cho bạn"
        icon={Sparkles}
        products={recommendedProducts}
        viewAllHref="/category/recommended"
        maxItems={4}
      />

      <ProductSection
        title="Web Templates"
        icon={Globe}
        products={webProducts}
        viewAllHref="/category/web"
        maxItems={4}
      />

      <ProductSection
        title="Mobile Apps"
        icon={Smartphone}
        products={appProducts}
        viewAllHref="/category/app"
        maxItems={4}
      />
    </>
  );
}
