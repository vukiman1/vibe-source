"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { CurrencyProvider } from "./currency-provider";

import { ReactQueryProvider } from "./react-query-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <CurrencyProvider>{children}</CurrencyProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
