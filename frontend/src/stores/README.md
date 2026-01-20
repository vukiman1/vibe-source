# Zustand Stores - Vibe Source

## 📦 Stores đã tạo

### 1. **useCartStore** - Quản lý giỏ hàng
Quản lý sản phẩm trong giỏ hàng, số lượng, tổng giá.

### 2. **useUserStore** - Quản lý người dùng
Quản lý thông tin user, authentication, tokens.

### 3. **useWishlistStore** - Quản lý danh sách yêu thích
Quản lý sản phẩm yêu thích của user.

---

## 🚀 Cách sử dụng

### Import stores

```tsx
import { useCartStore, useUserStore, useWishlistStore } from '@/stores';
```

### 1. Cart Store

```tsx
function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);
  const getItemQuantity = useCartStore((state) => state.getItemQuantity);
  const quantity = getItemQuantity(product.id);

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.price} tokens</p>
      {quantity > 0 && <span>Trong giỏ: {quantity}</span>}
      <button onClick={() => addItem(product)}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

function Cart() {
  const { items, totalItems, totalPrice } = useCartStore();
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div>
      <h2>Giỏ hàng ({totalItems})</h2>
      <p>Tổng: {totalPrice} tokens</p>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeItem(item.id)}>Xóa</button>
        </div>
      ))}
    </div>
  );
}
```

### 2. User Store

```tsx
function Header() {
  const { user, isAuthenticated } = useUserStore();
  const logout = useUserStore((state) => state.logout);

  if (!isAuthenticated) {
    return <a href="/login">Đăng nhập</a>;
  }

  return (
    <div>
      <span>Xin chào, {user?.name}</span>
      <span>{user?.tokens} tokens</span>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}

function LoginPage() {
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = async (email: string, password: string) => {
    // Call API login
    const userData = await loginAPI(email, password);
    
    // Set user to store
    setUser(userData);
  };

  return <LoginForm onSubmit={handleLogin} />;
}
```

### 3. Wishlist Store

```tsx
function ProductCard({ product }) {
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const toggleItem = useWishlistStore((state) => state.toggleItem);

  return (
    <div>
      <h3>{product.title}</h3>
      <button onClick={() => toggleItem(product)}>
        {isInWishlist ? '❤️ Đã thích' : '🤍 Yêu thích'}
      </button>
    </div>
  );
}

function WishlistPage() {
  const { items, totalItems } = useWishlistStore();
  const removeItem = useWishlistStore((state) => state.removeItem);

  return (
    <div>
      <h1>Danh sách yêu thích ({totalItems})</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price} tokens</p>
          <button onClick={() => removeItem(item.id)}>Xóa</button>
        </div>
      ))}
    </div>
  );
}
```

---

## 🎯 Best Practices

### 1. **Selector Pattern** (Tối ưu re-render)

```tsx
// ❌ BAD - Component re-render khi bất kỳ state nào thay đổi
const store = useCartStore();

// ✅ GOOD - Chỉ re-render khi totalItems thay đổi
const totalItems = useCartStore((state) => state.totalItems);
```

### 2. **Multiple Selectors**

```tsx
// ✅ Lấy nhiều giá trị cùng lúc
const { items, totalPrice, addItem } = useCartStore((state) => ({
  items: state.items,
  totalPrice: state.totalPrice,
  addItem: state.addItem,
}));
```

### 3. **Actions bên ngoài Component**

```tsx
// Có thể gọi actions bên ngoài React component
import { useCartStore } from '@/stores';

export function addToCart(product) {
  useCartStore.getState().addItem(product);
}
```

---

## 🔧 Features

- ✅ **TypeScript** - Type-safe
- ✅ **Persist** - Tự động lưu vào localStorage
- ✅ **Devtools** - Có thể dùng với Redux DevTools
- ✅ **SSR-friendly** - Hoạt động tốt với Next.js
- ✅ **Lightweight** - Chỉ ~1KB gzipped

---

## 📚 Tài liệu

- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

