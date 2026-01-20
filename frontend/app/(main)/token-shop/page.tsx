import { Coins, Gift, Zap, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tokenPackages = [
  {
    id: "1",
    name: "Starter Pack",
    tokens: 100,
    price: 99000,
    bonus: 0,
    icon: Coins,
  },
  {
    id: "2",
    name: "Popular Pack",
    tokens: 500,
    price: 449000,
    bonus: 50,
    icon: Zap,
    popular: true,
  },
  {
    id: "3",
    name: "Pro Pack",
    tokens: 1000,
    price: 799000,
    bonus: 150,
    icon: Gift,
  },
  {
    id: "4",
    name: "Ultimate Pack",
    tokens: 5000,
    price: 3499000,
    bonus: 1000,
    icon: Crown,
  },
];

export default function TokenShopPage() {
  return (
    <>
      <nav className="mb-4 text-sm text-muted-foreground">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">Token Shop</span>
      </nav>

      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">Token Shop</h1>
        <Badge className="bg-green-500">NEW</Badge>
      </div>

      <p className="mb-8 text-muted-foreground">
        Mua token để tải source code và mở khóa các tính năng premium
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tokenPackages.map((pkg) => (
          <Card 
            key={pkg.id} 
            className={`relative ${pkg.popular ? "border-primary ring-2 ring-primary" : ""}`}
          >
            {pkg.popular && (
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
                Phổ biến nhất
              </Badge>
            )}
            <CardHeader className="text-center">
              <pkg.icon className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-2">{pkg.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-2 text-4xl font-bold">{pkg.tokens.toLocaleString()}</div>
              <div className="mb-1 text-sm text-muted-foreground">tokens</div>
              {pkg.bonus > 0 && (
                <Badge variant="secondary" className="mb-4">
                  +{pkg.bonus} bonus
                </Badge>
              )}
              <div className="mb-4 text-2xl font-semibold">
                {pkg.price.toLocaleString()}đ
              </div>
              <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                Mua ngay
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
