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
      prefetch={false}
      className="
        group relative flex-1 overflow-hidden rounded-2xl
        min-h-[120px] lg:min-h-0
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 z-10 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center p-4 sm:p-6">
        <div className="text-white">
          <h3 className="text-lg font-bold sm:text-xl">{banner.title}</h3>
          {banner.subtitle && (
            <p className="bg-background m-0 text-center text-[#144a4f] dark:text-cyan-300 mt-1 font-bold  text-xs opacity-90 sm:text-sm">
              {banner.subtitle}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
