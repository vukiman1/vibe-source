"use client";

import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { mockSecuritySessions } from "@/lib/settings.mock";

export default function SettingsSecurityPage() {
  return <SecuritySettings sessions={mockSecuritySessions} />;
}
