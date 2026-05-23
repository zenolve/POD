import React, { createContext, useState, useEffect, useContext, useMemo, ReactNode, useCallback } from 'react';
import { ProductId, ProductSize, ProductView } from '../data/products';

export interface CartItem {
  id: string;
  productId: ProductId;
  productName: string;
  colorId: string;
  colorHex: string;
  colorName: string;
  size: ProductSize;
  views: ProductView[];
  quantity: number;
  unitPrice: number;
  previewFront?: string;
  previewBack?: string;
}

interface PromoCode {
  code: string;
  description: string;
  percentOff: number;
}

const PROMO_CODES: PromoCode[] = [
  { code: 'WELCOME10', description: '10% off your first order', percentOff: 10 },
  { code: 'POD20', description: '20% off everything', percentOff: 20 },
  { code: 'FREESHIP', description: 'Free standard shipping', percentOff: 0 },
];

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  promoCode: string | null;
  applyPromo: (code: string) => { ok: boolean; message: string };
  removePromo: () => void;
}

const STORAGE_KEY = 'pod-cart-v1';
const PROMO_KEY = 'pod-promo-v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

const SHIPPING_FREE_THRESHOLD = 75;
const SHIPPING_FEE = 6;
const TAX_RATE = 0.08;

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  const [promoCode, setPromoCode] = useState<string | null>(() => {
    try {
      return localStorage.getItem(PROMO_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* noop */
    }
  }, [items]);

  useEffect(() => {
    try {
      if (promoCode) localStorage.setItem(PROMO_KEY, promoCode);
      else localStorage.removeItem(PROMO_KEY);
    } catch {
      /* noop */
    }
  }, [promoCode]);

  const addItem = useCallback((item: Omit<CartItem, 'id'>) => {
    const id = `cart_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    setItems(prev => [...prev, { ...item, id }]);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity: Math.max(1, Math.min(99, qty)) } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const applyPromo = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    const match = PROMO_CODES.find(p => p.code === normalized);
    if (!match) {
      return { ok: false, message: 'Invalid promo code' };
    }
    setPromoCode(normalized);
    return { ok: true, message: `${match.description} applied` };
  }, []);

  const removePromo = useCallback(() => setPromoCode(null), []);

  const { itemCount, subtotal, discount, shipping, tax, total } = useMemo(() => {
    const itemCount = items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    const promo = promoCode ? PROMO_CODES.find(p => p.code === promoCode) : null;
    const discount = promo ? (subtotal * promo.percentOff) / 100 : 0;
    const freeShip = promoCode === 'FREESHIP' || subtotal - discount >= SHIPPING_FREE_THRESHOLD;
    const shipping = items.length === 0 ? 0 : freeShip ? 0 : SHIPPING_FEE;
    const tax = Math.max(0, (subtotal - discount) * TAX_RATE);
    const total = Math.max(0, subtotal - discount + shipping + tax);
    return { itemCount, subtotal, discount, shipping, tax, total };
  }, [items, promoCode]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        discount,
        shipping,
        tax,
        total,
        promoCode,
        applyPromo,
        removePromo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
