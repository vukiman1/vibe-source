import { Heart } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types";

// TODO: Fetch from API - user's wishlist
const wishlistProducts: Product[] = [];

export default function WishlistPage() {
  return (
    <>
      <nav className="mb-4 text-sm text-muted-foreground">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">Wishlist</span>
      </nav>

      <h1 className="mb-6 text-3xl font-bold">Danh sách yêu thích</h1>

      {wishlistProducts.length > 0 ? (
        <ProductGrid products={wishlistProducts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <Heart className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 text-xl font-semibold">Chưa có sản phẩm yêu thích</h2>
          <p className="text-muted-foreground">
            Hãy thêm sản phẩm vào danh sách yêu thích để xem lại sau
          </p>
        </div>
      )}
    </>
  );
}
