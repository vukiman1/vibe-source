import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency, truncateText } from '@/lib/utils';
import { ROUTES } from '@/constants';
import type { SourceCode } from '@/types';

interface SourceCardProps {
  source: SourceCode;
}

export function SourceCard({ source }: SourceCardProps) {
  const t = useTranslations('source');

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-video">
        <Image
          src={source.thumbnail || '/placeholder.png'}
          alt={source.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          <Link
            href={ROUTES.SOURCE_DETAIL(source.id)}
            className="hover:text-primary transition-colors"
          >
            {source.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground">
          {truncateText(source.description, 100)}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {source.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs"
            >
              {tech}
            </span>
          ))}
          {source.technologies.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{source.technologies.length - 3}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-lg font-bold text-primary">
          {formatCurrency(source.price)}
        </span>
        <Button size="sm">{t('addToCart')}</Button>
      </CardFooter>
    </Card>
  );
}
