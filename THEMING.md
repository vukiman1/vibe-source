# 🎨 Hệ Thống Theme - Vibe Source

## 📋 Tổng Quan

Dự án sử dụng **Tailwind CSS v4** với hệ thống **CSS Variables** để quản lý theme. Điều này giúp:

✅ **Tự động responsive** với dark/light mode  
✅ **Không cần viết `dark:` cho mỗi class**  
✅ **Dễ maintain và scale**  
✅ **Consistent design system**

---

## 🎯 Cách Hoạt Động

### 1. CSS Variables (globals.css)

Tất cả màu sắc được định nghĩa trong `app/globals.css`:

```css
:root {
  /* Light mode colors */
  --text-primary: 15 23 42;      /* slate-900 */
  --text-secondary: 100 116 139;  /* slate-500 */
  --brand-primary: 37 99 235;     /* blue-600 */
  /* ... */
}

.dark {
  /* Dark mode colors */
  --text-primary: 241 245 249;    /* slate-100 */
  --text-secondary: 148 163 184;  /* slate-400 */
  --brand-primary: 59 130 246;    /* blue-500 */
  /* ... */
}
```

### 2. Sử dụng trong Components

**❌ Cách CŨ (không tối ưu):**
```tsx
<div className="text-slate-900 dark:text-slate-100">
  <p className="text-slate-500 dark:text-slate-400">...</p>
</div>
```

**✅ Cách MỚI (tối ưu):**
```tsx
<div className="text-(--text-primary)">
  <p className="text-(--text-secondary)">...</p>
</div>
```

---

## 🎨 Semantic Color Tokens

### Text Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--text-primary` | slate-900 | slate-100 | Headings, primary text |
| `--text-secondary` | slate-500 | slate-400 | Body text, descriptions |
| `--text-tertiary` | slate-400 | slate-500 | Muted text, placeholders |

**Example:**
```tsx
<h1 className="text-(--text-primary)">Heading</h1>
<p className="text-(--text-secondary)">Body text</p>
<span className="text-(--text-tertiary)">Muted</span>
```

### Brand Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--brand-primary` | blue-600 | blue-500 | Primary buttons, links |
| `--brand-primary-hover` | blue-700 | blue-600 | Hover states |
| `--brand-accent` | blue-500 | blue-400 | Accents, icons |

**Example:**
```tsx
<button className="bg-(--brand-primary) hover:bg-(--brand-primary-hover)">
  Click me
</button>
<Icon className="text-(--brand-accent)" />
```

### Surface Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--surface-primary` | white | slate-800 | Cards, containers |
| `--surface-secondary` | slate-50 | slate-700 | Secondary surfaces |
| `--surface-border` | slate-100 | slate-700 | Borders, dividers |

**Example:**
```tsx
<div className="bg-(--surface-primary) border border-(--surface-border)">
  <div className="bg-(--surface-secondary)">...</div>
</div>
```

### Glass Effect

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--glass-bg` | white/40% | slate-900/40% | Glass backgrounds |
| `--glass-border` | white/40% | slate-800/40% | Glass borders |

**Example:**
```tsx
<div className="bg-(--glass-bg) backdrop-blur-xl border border-(--glass-border)">
  Glass effect card
</div>
```

### Status Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--status-success` | emerald-500 | emerald-400 | Success indicators |
| `--status-success-bg` | emerald-50 | emerald-900/20 | Success backgrounds |
| `--status-success-border` | emerald-100 | emerald-800 | Success borders |
| `--status-success-text` | emerald-700 | emerald-400 | Success text |

**Example:**
```tsx
<div className="bg-(--status-success-bg) border border-(--status-success-border)">
  <span className="text-(--status-success-text)">Success!</span>
</div>
```

---

## 📝 Best Practices

### ✅ DO

1. **Sử dụng semantic tokens** thay vì hardcode màu:
   ```tsx
   ✅ className="text-(--text-primary)"
   ❌ className="text-slate-900 dark:text-slate-100"
   ```

2. **Thêm token mới** khi cần màu mới:
   ```css
   /* globals.css */
   :root {
     --status-warning: 251 146 60; /* orange-400 */
   }
   .dark {
     --status-warning: 251 191 36; /* yellow-400 */
   }
   ```

3. **Nhóm màu theo chức năng**:
   - Text colors: `--text-*`
   - Brand colors: `--brand-*`
   - Surface colors: `--surface-*`
   - Status colors: `--status-*`

### ❌ DON'T

1. **Không hardcode màu** trong component:
   ```tsx
   ❌ className="text-blue-600 dark:text-blue-400"
   ```

2. **Không mix cả 2 cách**:
   ```tsx
   ❌ className="text-(--text-primary) bg-white dark:bg-slate-900"
   ✅ className="text-(--text-primary) bg-(--surface-primary)"
   ```

---

## 🚀 Thêm Token Mới

### Bước 1: Thêm vào globals.css

```css
:root {
  --new-token: 123 45 67; /* HSL values */
}

.dark {
  --new-token: 234 56 78; /* HSL values for dark mode */
}
```

### Bước 2: Sử dụng trong component

```tsx
<div className="text-(--new-token)">
  Content
</div>
```

---

## 🔍 Debugging

Nếu màu không hiển thị đúng:

1. **Kiểm tra CSS variable** đã được định nghĩa chưa
2. **Kiểm tra syntax** Tailwind v4: `text-(--variable)` không phải `text-[var(--variable)]`
3. **Kiểm tra ThemeProvider** đã wrap app chưa
4. **Inspect element** xem CSS variable có giá trị không

---

## 📚 Tài Liệu Tham Khảo

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

