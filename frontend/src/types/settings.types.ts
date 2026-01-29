export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  bio?: string;
  isVerified: boolean;
}

export interface SecuritySession {
  id: string;
  device: string;
  deviceType: "desktop" | "mobile" | "tablet";
  location: string;
  ipAddress: string;
  lastActive: string;
  isCurrent: boolean;
}

export interface SettingsMenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: number;
  isActive?: boolean;
}
