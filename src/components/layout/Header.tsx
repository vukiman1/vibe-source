'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { ROUTES, APP_NAME } from '@/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const t = useTranslations('nav');

  const navLinks = [
    { href: ROUTES.HOME, label: t('home') },
    { href: ROUTES.SOURCES, label: t('sources') },
    { href: '#categories', label: t('categories') },
    { href: '#pricing', label: t('pricing') },
    { href: '#about', label: t('about') },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <span className="text-xl font-bold">{APP_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href={ROUTES.LOGIN}
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
