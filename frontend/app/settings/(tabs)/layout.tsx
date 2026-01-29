import { ReactNode } from "react";

export default function SettingsTabsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main className="flex-1">{children}</main>;
}
