import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/constants';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  
  const locale: Locale = SUPPORTED_LOCALES.includes(localeCookie as Locale)
    ? (localeCookie as Locale)
    : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
