"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { CurrencyProvider } from "./currency-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <CurrencyProvider>{children}</CurrencyProvider>
    </ThemeProvider>
  );
}
