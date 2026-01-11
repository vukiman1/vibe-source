import Link from "next/link";

interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  gradient?: string;
}

interface BannerCardProps {
  banner: Banner;
}

/**
 * Side banner card with gradient background
 */
export function BannerCard({ banner }: BannerCardProps) {
  return (
    <Link
      href={banner.href}
      className="
        relative flex-1 overflow-hidden rounded-2xl
        min-h-[120px] lg:min-h-0
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Gradient Background */}
      <div 
        className={`
          absolute inset-0 bg-linear-to-r ${banner.gradient || "from-gray-500 to-gray-400"}
        `}
      />

      {/* Content */}
      <div className="relative flex h-full items-center p-4 sm:p-6">
        <div className="text-white">
          <h3 className="text-lg font-bold sm:text-xl">
            {banner.title}
          </h3>
          {banner.subtitle && (
            <p className="mt-1 text-xs opacity-90 sm:text-sm">
              {banner.subtitle}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
