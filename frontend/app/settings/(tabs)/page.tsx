"use client";

import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { mockUserProfile } from "@/lib/settings.mock";

export default function SettingsProfilePage() {
  return <ProfileSettings user={mockUserProfile} />;
}
