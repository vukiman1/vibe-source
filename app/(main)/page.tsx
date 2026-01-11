import Link from "next/link";
import { ArrowRight, Code, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "Quality Code",
    description: "All source codes are reviewed and tested for quality",
  },
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Easy to integrate with detailed documentation",
  },
  {
    icon: Shield,
    title: "Secure & Licensed",
    description: "Full commercial license with lifetime updates",
  },
  {
    icon: Sparkles,
    title: "Premium Support",
    description: "Get help from our expert developers anytime",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          Chào mừng đến với{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Vibe Coding
          </span>
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Marketplace source code chất lượng cao dành cho developers
        </p>
        <div className="flex gap-4">
          <Link href="/marketplace">
            <Button size="lg">
              Khám phá ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/token-shop">
            <Button size="lg" variant="outline">
              Mua Token
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Tại sao chọn chúng tôi?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <feature.icon className="mb-3 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
