import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShoppingCart, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { truncateText } from "@/lib/utils";
import { CurrencyDisplay } from "@/components/common/CurrencyDisplay";
import { ROUTES } from "@/constants";
import type { SourceCode } from "@/types";

interface SourceCardProps {
  source: SourceCode;
}

export function SourceCard({ source }: SourceCardProps) {
  const t = useTranslations("source");

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={source.thumbnail || "/assets/placeholder.jpg"}
          alt={source.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center gap-2">
          {source.demoUrl && (
            <Button size="sm" variant="secondary" asChild>
              <Link href={source.demoUrl} target="_blank">
                <Eye className="mr-1 h-4 w-4" />
                {t("preview")}
              </Link>
            </Button>
          )}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1 text-lg">
            <Link
              href={ROUTES.SOURCE_DETAIL(source.id)}
              className="hover:text-primary transition-colors"
            >
              {source.title}
            </Link>
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {source.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {truncateText(source.description, 100)}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {source.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {source.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{source.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <CurrencyDisplay
          amountInVND={source.price}
          className="text-xl font-bold text-primary"
          compact={false}
          interactive={false}
        />
        <Button size="sm">
          <ShoppingCart className="mr-1 h-4 w-4" />
          {t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
}
