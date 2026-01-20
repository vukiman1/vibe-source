import { ShoppingBag, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Purchase {
  id: string;
  title: string;
  thumbnail: string;
  purchaseDate: string;
  price: number;
  downloadUrl: string;
}

// TODO: Fetch from API - user's purchases
const purchases: Purchase[] = [];

export default function PurchasesPage() {
  return (
    <>
      <nav className="mb-4 text-sm text-muted-foreground">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">Purchases</span>
      </nav>

      <h1 className="mb-6 text-3xl font-bold">Sản phẩm đã mua</h1>

      {purchases.length > 0 ? (
        <div className="space-y-4">
          {purchases.map((purchase) => (
            <Card key={purchase.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="h-20 w-32 rounded bg-muted" />
                <div className="flex-1">
                  <h3 className="font-semibold">{purchase.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Mua ngày: {purchase.purchaseDate}
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {purchase.price.toLocaleString()}đ
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Xem demo
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Tải xuống
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 text-xl font-semibold">Chưa có sản phẩm nào</h2>
          <p className="text-muted-foreground">
            Khám phá marketplace và mua sản phẩm đầu tiên của bạn
          </p>
        </div>
      )}
    </>
  );
}
