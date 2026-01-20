# 📱 Responsive Left Sidebar Implementation

## ✅ Đã hoàn thành

### 1. **Tạo Sidebar Store** (`src/stores/useSidebarStore.ts`)
Store quản lý trạng thái mở/đóng của left và right sidebar.

```typescript
import { useSidebarStore } from '@/stores';

// Sử dụng trong component
const { isLeftSidebarOpen, toggleLeftSidebar, closeLeftSidebar } = useSidebarStore();
```

### 2. **Cập nhật Left Sidebar** (`src/components/sidebar/left/LeftSidebar.tsx`)

**Features:**
- ✅ **Desktop (≥ lg)**: Sidebar luôn hiển thị, fixed bên trái
- ✅ **Mobile (< lg)**: Sidebar ẩn mặc định, slide in từ trái khi mở
- ✅ **Overlay**: Hiển thị backdrop khi sidebar mở trên mobile
- ✅ **Close button**: Nút đóng (X) chỉ hiện trên mobile
- ✅ **Auto close**: Tự động đóng khi resize lên desktop
- ✅ **Prevent scroll**: Khóa scroll body khi sidebar mở trên mobile
- ✅ **Smooth animation**: Transition mượt mà 300ms

**Responsive Classes:**
```tsx
// Sidebar
className={cn(
  "fixed left-0 top-16 z-50 h-[calc(100vh-64px)] w-64",
  "transition-transform duration-300 ease-in-out",
  "lg:translate-x-0 lg:z-30", // Desktop: always visible
  isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0" // Mobile: slide
)}

// Overlay
className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
```

### 3. **Cập nhật Header** (`src/components/layout/header/Header.tsx`)

**Changes:**
- ✅ Thêm hamburger menu button (icon 3 gạch) bên trái
- ✅ Button chỉ hiện trên mobile (`lg:hidden`)
- ✅ Click vào button sẽ toggle sidebar
- ✅ Logo text ẩn trên mobile nhỏ (`hidden sm:inline`)

```tsx
{/* Mobile Menu Button */}
<Button
  variant="ghost"
  size="icon"
  onClick={toggleLeftSidebar}
  className="lg:hidden shrink-0"
>
  <Menu className="h-5 w-5" />
</Button>
```

### 4. **Cập nhật Layout** (`app/(main)/layout.tsx`)

**Responsive Margins:**
```tsx
// Before: ml-64 mr-72 (fixed margins)
// After: lg:ml-64 lg:mr-72 (responsive margins)
<main className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:ml-64 lg:mr-72">
```

### 5. **Cập nhật Right Sidebar** (`src/components/sidebar/right/RightSidebar.tsx`)

**Changes:**
- ✅ Ẩn hoàn toàn trên mobile (`hidden lg:block`)
- ✅ Chỉ hiển thị từ màn hình lg trở lên

---

## 🎯 Cách hoạt động

### Desktop (≥ 1024px)
```
┌─────────────────────────────────────────────────────────┐
│                       HEADER                             │
├──────────┬──────────────────────────┬──────────────────┤
│          │                          │                   │
│  LEFT    │      MAIN CONTENT        │      RIGHT        │
│ SIDEBAR  │                          │     SIDEBAR       │
│ (visible)│                          │    (visible)      │
│          │                          │                   │
└──────────┴──────────────────────────┴──────────────────┘
```

### Mobile (< 1024px) - Sidebar Closed
```
┌─────────────────────────────────────────────────────────┐
│  [☰]              HEADER                                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│                  MAIN CONTENT                            │
│                  (full width)                            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Mobile (< 1024px) - Sidebar Open
```
┌─────────────────────────────────────────────────────────┐
│  [☰]              HEADER                                 │
├──────────┬──────────────────────────────────────────────┤
│          │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│  LEFT    │░░░░░░░░░░ OVERLAY (backdrop) ░░░░░░░░░░░░░░│
│ SIDEBAR  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│  [X]     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│          │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└──────────┴──────────────────────────────────────────────┘
```

---

## 🧪 Testing

### Test Cases:

1. **Desktop View (≥ 1024px)**
   - [ ] Left sidebar luôn hiển thị
   - [ ] Right sidebar luôn hiển thị
   - [ ] Hamburger menu button ẩn
   - [ ] Main content có margin left và right

2. **Mobile View (< 1024px)**
   - [ ] Left sidebar ẩn mặc định
   - [ ] Right sidebar ẩn hoàn toàn
   - [ ] Hamburger menu button hiển thị
   - [ ] Main content full width

3. **Mobile - Open Sidebar**
   - [ ] Click hamburger → sidebar slide in từ trái
   - [ ] Overlay (backdrop) hiển thị
   - [ ] Body scroll bị khóa
   - [ ] Nút close (X) hiển thị trong sidebar

4. **Mobile - Close Sidebar**
   - [ ] Click overlay → sidebar đóng
   - [ ] Click nút X → sidebar đóng
   - [ ] Body scroll được mở lại
   - [ ] Sidebar slide out về trái

5. **Resize Behavior**
   - [ ] Resize từ mobile → desktop: sidebar tự đóng nếu đang mở
   - [ ] Resize từ desktop → mobile: sidebar ẩn

---

## 🎨 Animations

- **Slide transition**: `transition-transform duration-300 ease-in-out`
- **Overlay fade**: `bg-black/50 backdrop-blur-sm`
- **Z-index layers**:
  - Overlay: `z-40`
  - Sidebar (mobile): `z-50`
  - Sidebar (desktop): `z-30`
  - Header: `z-50`

---

## 📱 Breakpoints

```css
/* Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices - SIDEBAR BREAKPOINT */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

**Sidebar breakpoint**: `lg` (1024px)
- `< lg`: Mobile mode (sidebar hidden, hamburger visible)
- `≥ lg`: Desktop mode (sidebar visible, hamburger hidden)

---

## 🚀 Usage Examples

### Toggle sidebar từ bất kỳ đâu

```tsx
import { useSidebarStore } from '@/stores';

function MyComponent() {
  const toggleLeftSidebar = useSidebarStore((state) => state.toggleLeftSidebar);
  
  return (
    <button onClick={toggleLeftSidebar}>
      Toggle Menu
    </button>
  );
}
```

### Check sidebar state

```tsx
const isOpen = useSidebarStore((state) => state.isLeftSidebarOpen);

if (isOpen) {
  console.log('Sidebar is open');
}
```

### Close sidebar programmatically

```tsx
const closeLeftSidebar = useSidebarStore((state) => state.closeLeftSidebar);

// Close after navigation
const handleNavigation = () => {
  router.push('/some-page');
  closeLeftSidebar();
};
```

---

## 🔧 Customization

### Thay đổi sidebar width

```tsx
// LeftSidebar.tsx
className="w-64" // Change to w-72, w-80, etc.

// layout.tsx
className="lg:ml-64" // Update margin to match
```

### Thay đổi animation speed

```tsx
className="transition-transform duration-300" // Change to duration-200, duration-500, etc.
```

### Thay đổi overlay opacity

```tsx
className="bg-black/50" // Change to bg-black/30, bg-black/70, etc.
```

---

## ✨ Features Summary

- ✅ Responsive design (mobile & desktop)
- ✅ Smooth slide animations
- ✅ Backdrop overlay on mobile
- ✅ Prevent body scroll when open
- ✅ Auto-close on resize
- ✅ Accessible (keyboard & screen readers)
- ✅ TypeScript type-safe
- ✅ Zustand state management
- ✅ Clean & maintainable code

