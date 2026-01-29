"use client";

import { ProfileSettings } from "./ProfileSettings";
import { SecuritySettings } from "./SecuritySettings";
import type { UserProfile, SecuritySession } from "@/types/settings.types";

interface SettingsContentProps {
  user: UserProfile;
  sessions: SecuritySession[];
}

export function SettingsContent({ user, sessions }: SettingsContentProps) {
  return (
    <main className="flex-1 space-y-6">
      <ProfileSettings user={user} />
      <SecuritySettings sessions={sessions} />
    </main>
  );
}
