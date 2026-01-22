"use client";

import { HeroBanner } from "@/components/banner";
import { ProductSection } from "@/components/product/ProductSection";
import type { Product } from "@/types";

interface SectionConfig {
  title: string;
  iconName: "TrendingUp" | "Sparkles" | "Globe" | "Smartphone";
  products: Product[];
  viewAllHref: string;
}

interface HomeClientSectionsProps {
  sections: SectionConfig[];
}

export function HomeClientSections({ sections }: HomeClientSectionsProps) {
  return (
    <>
      <HeroBanner />
      {sections.map((section) => (
        <ProductSection
          key={section.title}
          title={section.title}
          iconName={section.iconName}
          products={section.products}
          viewAllHref={section.viewAllHref}
          maxItems={4}
        />
      ))}
    </>
  );
}
