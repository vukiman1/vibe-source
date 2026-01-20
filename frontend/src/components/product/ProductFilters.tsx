"use client";

import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface ProductFiltersProps {
  onFilterClick?: () => void;
  sortBy?: string;
  onSortChange?: (value: string) => void;
}

const sortOptions = [
  { value: "popular", label: "Phổ biến nhất" },
  { value: "newest", label: "Mới Nhất" },
  { value: "price-low", label: "Giá thấp" },
  { value: "price-high", label: "Giá cao" },
];

export function ProductFilters({
  onFilterClick,
  sortBy = "popular",
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <Button variant="outline" size="sm" onClick={onFilterClick}>
        <SlidersHorizontal className="mr-2 h-4 w-4" />
        Bộ lọc Nâng cao
      </Button>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sắp xếp theo:</span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="rounded-md border bg-background px-3 py-1.5 text-sm"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
        Mới Nhất
      </Button>
    </div>
  );
}
