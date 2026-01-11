import { useTranslations } from 'next-intl';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const t = useTranslations('home');

  const features = [
    {
      icon: Code,
      title: 'Quality Code',
      description: 'All source codes are reviewed and tested for quality',
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Easy to integrate with detailed documentation',
    },
    {
      icon: Shield,
      title: 'Secure & Licensed',
      description: 'Full commercial license with lifetime updates',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">{t('featured.title')}</h2>
          <Button variant="outline">
            {t('featured.viewAll')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* SourceCard components will be rendered here */}
          <Card className="flex h-64 items-center justify-center border-dashed">
            <p className="text-muted-foreground">Source cards will appear here</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
