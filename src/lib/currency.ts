/**
 * Currency utilities for Vibe Source
 * Handles currency conversion and formatting
 */

export type CurrencyCode = 'VND' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'KRW' | 'CNY';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  locale: string;
  decimals: number;
}

// Supported currencies
export const CURRENCIES: Record<CurrencyCode, Currency> = {
  VND: {
    code: 'VND',
    symbol: '₫',
    name: 'Vietnamese Dong',
    locale: 'vi-VN',
    decimals: 0,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    locale: 'en-US',
    decimals: 2,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    locale: 'de-DE',
    decimals: 2,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    locale: 'en-GB',
    decimals: 2,
  },
  JPY: {
    code: 'JPY',
    symbol: '¥',
    name: 'Japanese Yen',
    locale: 'ja-JP',
    decimals: 0,
  },
  KRW: {
    code: 'KRW',
    symbol: '₩',
    name: 'Korean Won',
    locale: 'ko-KR',
    decimals: 0,
  },
  CNY: {
    code: 'CNY',
    symbol: '¥',
    name: 'Chinese Yuan',
    locale: 'zh-CN',
    decimals: 2,
  },
};

// Exchange rates (base: VND)
// Note: In production, these should be fetched from an API
export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  VND: 1,
  USD: 0.000040, // 1 VND = 0.00004 USD (approx 25,000 VND = 1 USD)
  EUR: 0.000037, // 1 VND = 0.000037 EUR
  GBP: 0.000032, // 1 VND = 0.000032 GBP
  JPY: 0.0059, // 1 VND = 0.0059 JPY
  KRW: 0.053, // 1 VND = 0.053 KRW
  CNY: 0.00029, // 1 VND = 0.00029 CNY
};

/**
 * Convert amount from VND to target currency
 */
export function convertFromVND(
  amountInVND: number,
  targetCurrency: CurrencyCode
): number {
  const rate = EXCHANGE_RATES[targetCurrency];
  return amountInVND * rate;
}

/**
 * Convert amount from source currency to VND
 */
export function convertToVND(
  amount: number,
  sourceCurrency: CurrencyCode
): number {
  const rate = EXCHANGE_RATES[sourceCurrency];
  return amount / rate;
}

/**
 * Convert amount between any two currencies
 */
export function convertCurrency(
  amount: number,
  fromCurrency: CurrencyCode,
  toCurrency: CurrencyCode
): number {
  if (fromCurrency === toCurrency) return amount;
  
  // Convert to VND first, then to target currency
  const amountInVND = fromCurrency === 'VND' ? amount : convertToVND(amount, fromCurrency);
  return toCurrency === 'VND' ? amountInVND : convertFromVND(amountInVND, toCurrency);
}

/**
 * Format currency amount with proper locale and symbol
 */
export function formatCurrency(
  amount: number,
  currency: CurrencyCode,
  options?: {
    showSymbol?: boolean;
    showCode?: boolean;
    compact?: boolean;
  }
): string {
  const {
    showSymbol = true,
    showCode = false,
    compact = false,
  } = options || {};

  const currencyInfo = CURRENCIES[currency];
  
  // Format number with locale
  let formatted: string;
  
  if (compact && amount >= 1_000_000_000) {
    // Format as billions (e.g., 1.2B)
    const billions = amount / 1_000_000_000;
    formatted = billions.toFixed(1) + (currency === 'VND' ? 'tỷ' : 'B');
  } else if (compact && amount >= 1_000_000) {
    // Format as millions (e.g., 1.2M)
    const millions = amount / 1_000_000;
    formatted = millions.toFixed(1) + (currency === 'VND' ? 'tr' : 'M');
  } else if (compact && amount >= 1_000) {
    // Format as thousands (e.g., 1.2K)
    const thousands = amount / 1_000;
    formatted = thousands.toFixed(1) + 'K';
  } else {
    formatted = new Intl.NumberFormat(currencyInfo.locale, {
      minimumFractionDigits: currencyInfo.decimals,
      maximumFractionDigits: currencyInfo.decimals,
    }).format(amount);
  }

  // Add symbol and/or code
  if (showSymbol && showCode) {
    return `${formatted}${currencyInfo.symbol} ${currencyInfo.code}`;
  } else if (showSymbol) {
    return currency === 'VND' ? `${formatted}${currencyInfo.symbol}` : `${currencyInfo.symbol}${formatted}`;
  } else if (showCode) {
    return `${formatted} ${currencyInfo.code}`;
  }
  
  return formatted;
}

