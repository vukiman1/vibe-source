'use client';

import { useLocaleSwitch } from '@/hooks';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps {
  className?: string;
}

const localeNames: Record<string, string> = {
  en: 'EN',
  vi: 'VI',
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const { locale, switchLocale, locales } = useLocaleSwitch();

  return (
    <select
      value={locale}
      onChange={(e) => switchLocale(e.target.value as 'en' | 'vi')}
      className={cn(
        'h-9 rounded-md border bg-background px-3 text-sm transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring',
        className
      )}
      aria-label="Select language"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc] || loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
