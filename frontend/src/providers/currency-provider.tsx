"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { CurrencyCode } from "@/lib/currency";

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

interface CurrencyProviderProps {
  children: ReactNode;
}

const CURRENCY_STORAGE_KEY = "vibe-source-currency";

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("VND");

  // Load currency from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (stored && isValidCurrency(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrencyState(stored as CurrencyCode);
    }
  }, []);

  const setCurrency = (newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

function isValidCurrency(value: string): boolean {
  return ["VND", "USD", "EUR", "GBP", "JPY", "KRW", "CNY"].includes(value);
}
