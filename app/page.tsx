import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <Button size="lg">{t('hero.cta')}</Button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t('featured.title')}</h2>
          <Button variant="outline">{t('featured.viewAll')}</Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* SourceCard components will be rendered here */}
          <div className="rounded-lg border p-6 text-center text-muted-foreground">
            Source cards will appear here
          </div>
        </div>
      </section>
    </div>
  );
}
