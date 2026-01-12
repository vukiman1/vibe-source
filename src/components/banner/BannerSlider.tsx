"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  gradient?: string;
}

interface BannerSliderProps {
  banners: Banner[];
  autoPlay?: boolean;
  interval?: number;
}

/**
 * Image slider with auto-play and navigation
 */
export function BannerSlider({
  banners,
  autoPlay = true,
  interval = 5000,
}: BannerSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return (
    <div className="group relative h-[200px] overflow-hidden rounded-2xl sm:h-[240px] lg:h-[280px]">
      {/* Slides */}
      {banners.map((banner, index) => (
        <Link
          key={banner.id}
          href={banner.href}
          className={`
            group absolute inset-0 transition-all duration-500 ease-out
            ${
              index === current
                ? "opacity-100 translate-x-0"
                : index < current
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }
          `}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index === 0}
            />
          </div>

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 z-10 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

          {/* Content */}
          <div className="relative z-20 flex h-full items-center px-8 sm:px-12">
            <div className="max-w-md text-white">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                {banner.title}
              </h2>
              {banner.subtitle && (
                <p className="mt-2 text-sm opacity-90 sm:text-base">
                  {banner.subtitle}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm
          flex items-center justify-center
          opacity-0 transition-opacity group-hover:opacity-100
          hover:bg-white/30
        "
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={next}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm
          flex items-center justify-center
          opacity-0 transition-opacity group-hover:opacity-100
          hover:bg-white/30
        "
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                index === current
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
