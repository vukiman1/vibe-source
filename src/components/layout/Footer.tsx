import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { APP_NAME, ROUTES } from '@/constants';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const footerLinks = {
    product: [
      { href: ROUTES.SOURCES, label: tNav('sources') },
      { href: '#categories', label: tNav('categories') },
      { href: '#pricing', label: tNav('pricing') },
    ],
    company: [
      { href: '#about', label: tNav('about') },
      { href: '#contact', label: tNav('contact') },
    ],
    legal: [
      { href: '/privacy', label: t('privacy') },
      { href: '/terms', label: t('terms') },
    ],
  };

  return (
    <footer className={cn('border-t bg-background', className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href={ROUTES.HOME} className="text-xl font-bold">
              {APP_NAME}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium source code marketplace for developers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
