# AGENTS.md - Vibe Source Project Context

> **Purpose**: This file provides AI agents with comprehensive context about the Vibe Source project.

---

## 🎯 Project Overview

**Vibe Source** is a **digital marketplace** for buying and selling source code, UI kits, templates, and development tools. Similar to platforms like ThemeForest or Gumroad but focused on Vietnamese developers.

### Core Concept

- **Sellers** upload source code products with demos
- **Buyers** browse, purchase, and download source code
- Token-based economy for purchases
- Flash sales and promotional features

---

## 🛠 Tech Stack

| Category        | Technology                    |
| --------------- | ----------------------------- |
| Framework       | **Next.js 16** (App Router)   |
| Language        | TypeScript                    |
| UI Library      | React 19                      |
| Styling         | **Tailwind CSS 4**            |
| UI Components   | Radix UI (shadcn/ui pattern)  |
| Icons           | Lucide React                  |
| i18n            | next-intl                     |
| Theming         | next-themes (dark/light mode) |
| Package Manager | pnpm                          |

---

## 📁 Project Structure

```
vibe-source/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth routes (login, register)
│   ├── (main)/                   # Main app routes with sidebar layout
│   │   ├── layout.tsx            # 3-column layout (sidebar-content-sidebar)
│   │   ├── page.tsx              # Home/Marketplace page
│   │   ├── marketplace/          # Marketplace browsing
│   │   ├── product/[id]/         # Product detail page
│   │   ├── token-shop/           # Buy tokens
│   │   ├── wishlist/             # User wishlist
│   │   └── purchases/            # Purchase history
│   ├── checkout/                 # Checkout flow
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles + Tailwind
│
├── src/
│   ├── components/
│   │   ├── common/               # Shared components (Logo, etc.)
│   │   ├── layout/               # Header, Footer, Navigation
│   │   ├── product/              # Product-related components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductFilters.tsx
│   │   ├── sidebar/
│   │   │   ├── left/             # Left sidebar (navigation, categories)
│   │   │   │   ├── LeftSidebar.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── Categories.tsx
│   │   │   │   └── UpgradeBanner.tsx
│   │   │   ├── right/            # Right sidebar (flash sale, top sellers)
│   │   │   │   ├── RightSidebar.tsx
│   │   │   │   ├── FlashSale.tsx
│   │   │   │   └── TopSellers.tsx
│   │   │   ├── admin/            # Admin sidebar (future)
│   │   │   └── seller/           # Seller dashboard sidebar (future)
│   │   └── ui/                   # shadcn/ui components
│   │
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions
│   ├── services/                 # API service layer
│   │   ├── auth.service.ts
│   │   ├── source.service.ts
│   │   └── order.service.ts
│   ├── types/                    # TypeScript types
│   ├── constants/                # App constants
│   ├── providers/                # React context providers
│   └── i18n/                     # Internationalization
│
├── public/                       # Static assets
└── middleware.ts                 # Next.js middleware (auth, i18n)
```

---

## 🎨 UI/Layout Architecture

### Main Layout (3-Column)

```
┌──────────────────────────────────────────────────────────────┐
│                         HEADER                                │
├────────────┬────────────────────────────┬───────────────────┤
│            │                            │                    │
│   LEFT     │        MAIN CONTENT        │      RIGHT         │
│  SIDEBAR   │        (Products)          │     SIDEBAR        │
│   (240px)  │                            │      (280px)       │
│            │                            │                    │
│  - Nav     │  - Breadcrumb              │  - Flash Sale      │
│  - Cats    │  - Title                   │  - Top Sellers     │
│  - Upgrade │  - Filters                 │  - Ads             │
│            │  - Product Grid            │                    │
│            │                            │                    │
│  (sticky)  │     (scrollable)           │     (sticky)       │
└────────────┴────────────────────────────┴───────────────────┘
```

### CSS Classes (Tailwind)

- Left sidebar: `w-64` (256px), `fixed`, `left-0`
- Right sidebar: `w-72` (288px), `fixed`, `right-0`
- Main content: `ml-64 mr-72` to offset sidebars

---

## 📦 Key Data Types

```typescript
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  tags?: string[];
  features?: string[];
  rating: number;
  reviewCount: number;
  badge?: string; // "FREE", "BESTSELLER", etc.
  category?: string;
}

interface Seller {
  id: string;
  name: string;
  avatar: string;
  followers: string;
  href: string;
}

interface FlashSaleItem {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  href: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}
```

---

## 🔧 Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

---

## 📋 Coding Conventions

### Component Structure

- Use functional components with TypeScript
- Props interface above component definition
- Export named exports (not default) for reusability
- Barrel exports via `index.ts` files

### Styling

- Tailwind CSS utility classes
- Dark mode support via `dark:` prefix
- Custom colors defined in `globals.css`

### File Naming

- Components: `PascalCase.tsx`
- Hooks: `use[Name].ts`
- Utils: `camelCase.ts`
- Types: `camelCase.ts` or grouped in `types/index.ts`

### Import Aliases

- `@/` maps to `src/`
- Example: `import { Button } from "@/components/ui/button"`

---

## 🚧 Current Status & TODOs

### Implemented ✅

- [x] Project setup with Next.js 16 + Tailwind 4
- [x] Basic layout structure (Header, Sidebars)
- [x] Theme toggle (dark/light mode)
- [x] Component scaffolding

### In Progress 🔄

- [ ] Product listing with filters
- [ ] Product detail page
- [ ] Left sidebar navigation
- [ ] Right sidebar (Flash Sale, Top Sellers)

### Planned 📅

- [ ] Authentication (login/register)
- [ ] User dashboard
- [ ] Seller dashboard
- [ ] Token purchase flow
- [ ] Checkout flow
- [ ] Admin panel

---

## 🔗 Related Files for Quick Access

| Feature       | Files                                    |
| ------------- | ---------------------------------------- |
| Main Layout   | `app/(main)/layout.tsx`                  |
| Homepage      | `app/(main)/page.tsx`                    |
| Product Card  | `src/components/product/ProductCard.tsx` |
| Left Sidebar  | `src/components/sidebar/left/`           |
| Right Sidebar | `src/components/sidebar/right/`          |
| Types         | `src/types/index.ts`                     |
| API Services  | `src/services/`                          |
| Theme         | `src/components/ui/theme-toggle.tsx`     |

---

## 💡 AI Assistant Guidelines

1. **Use Tailwind CSS** for styling (v4 syntax)
2. **Follow component patterns** in existing code
3. **Use TypeScript** with proper typing
4. **Import from `@/`** alias
5. **Keep components small** and focused
6. **Add dark mode support** with `dark:` variants
7. **Use Radix UI** for complex interactions
8. **Vietnamese UI text** for user-facing content
