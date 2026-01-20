'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { SUPPORTED_LOCALES, type Locale } from '@/constants';

export function useLocaleSwitch() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  const toggleLocale = () => {
    const currentIndex = SUPPORTED_LOCALES.indexOf(locale as Locale);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LOCALES.length;
    switchLocale(SUPPORTED_LOCALES[nextIndex]);
  };

  return {
    locale,
    switchLocale,
    toggleLocale,
    locales: SUPPORTED_LOCALES,
  };
}
