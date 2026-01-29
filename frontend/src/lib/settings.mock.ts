import type {
  UserProfile,
  SecuritySession,
  SettingsMenuItem,
} from "@/types/settings.types";

export const mockUserProfile: UserProfile = {
  id: "1",
  name: "Nguyễn Văn A",
  email: "nguyen.van.a@example.com",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Okosj3AJGr7Mxb06NcIGAlMgT_nL4SFvbriKOheZyur1fe3lrhHlLYNmRhMVuJ1LJ7J32lju5a7UnhhipbRVz1SXGL9xJQVVqqYEcQWH6RegXTkrzs9zhJ071MVUixDvzVmn_t8s9bzj73rjPNcOG_-F5MB8mA4UHquEwZOMDw0xuKa3Q9i_mxyhHs3TSodQuGVqfIrL3x_78jjPiVfqwWNWkoSWwXilIB68opunkIXPdrP89TjzioxL8FA6Sooix-UV_y9d3_bv",
  role: "Developer",
  bio: "",
  isVerified: true,
};

export const mockSecuritySessions: SecuritySession[] = [
  {
    id: "1",
    device: 'Macbook Pro 16"',
    deviceType: "desktop",
    location: "Hồ Chí Minh, VN",
    ipAddress: "14.161.22.19",
    lastActive: "Hiện tại",
    isCurrent: true,
  },
  {
    id: "2",
    device: "iPhone 14 Pro",
    deviceType: "mobile",
    location: "Hà Nội, VN",
    ipAddress: "14.162.33.20",
    lastActive: "Hoạt động 2 giờ trước",
    isCurrent: false,
  },
];

export const mockSettingsMenuItems: SettingsMenuItem[] = [
  {
    id: "profile",
    label: "Hồ sơ công khai",
    icon: "User",
    href: "/settings",
    isActive: true,
  },
  {
    id: "security",
    label: "Bảo mật",
    icon: "Lock",
    href: "/settings/security",
    isActive: false,
  },
  {
    id: "notifications",
    label: "Thông báo",
    icon: "Bell",
    href: "/settings/notifications",
    badge: 2,
    isActive: false,
  },
  {
    id: "connections",
    label: "Liên kết tài khoản",
    icon: "Link",
    href: "/settings/connections",
    isActive: false,
  },
];
