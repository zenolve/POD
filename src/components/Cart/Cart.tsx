import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { getProduct } from '../../data/products';
import MockupPreview from '../Mockup/MockupPreview';

interface CartProps {
  navigate: (path: string) => void;
}

const Cart: React.FC<CartProps> = ({ navigate }) => {
  const {
    items,
    updateQuantity,
    removeItem,
    subtotal,
    discount,
    shipping,
    tax,
    total,
    promoCode,
    applyPromo,
    removePromo,
  } = useCart();
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ ok: boolean; message: string } | null>(null);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-400">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-stone-900">Your cart is empty</h1>
        <p className="mt-2 text-sm text-stone-500">
          Looks like you haven't designed anything yet. Let's change that.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
        >
          Browse catalog
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-end justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">Cart</h1>
        <button onClick={() => navigate('/')} className="text-sm text-stone-500 hover:text-stone-900">
          ← Continue shopping
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
          {items.map(item => {
            const product = getProduct(item.productId);
            const previewSrc = item.previewFront ?? item.previewBack;
            return (
              <li key={item.id} className="flex gap-4 p-4 sm:p-6">
                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-stone-100 sm:h-32 sm:w-32">
                  {previewSrc ? (
                    <img src={previewSrc} alt="" className="h-full w-full object-contain" />
                  ) : product ? (
                    <MockupPreview
                      productId={product.id}
                      colorHex={item.colorHex}
                      printArea={product.printArea}
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold text-stone-900">{item.productName}</div>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-stone-500">
                        <span
                          className="inline-block h-3 w-3 rounded-full border border-stone-300"
                          style={{ backgroundColor: item.colorHex }}
                        />
                        <span>{item.colorName}</span>
                        <span>·</span>
                        <span>Size {item.size}</span>
                        <span>·</span>
                        <span className="capitalize">{item.views.join(' + ')}</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-stone-900">
                      ${(item.unitPrice * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {item.previewBack && item.previewFront && (
                    <div className="mt-3 flex gap-1">
                      <div className="h-10 w-10 overflow-hidden rounded border border-stone-200 bg-stone-50">
                        <img src={item.previewFront} alt="front" className="h-full w-full object-contain" />
                      </div>
                      <div className="h-10 w-10 overflow-hidden rounded border border-stone-200 bg-stone-50">
                        <img src={item.previewBack} alt="back" className="h-full w-full object-contain" />
                      </div>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center gap-0 rounded-full border border-stone-200">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-l-full text-sm text-stone-700 transition hover:bg-stone-100"
                        aria-label="decrease"
                      >−</button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-r-full text-sm text-stone-700 transition hover:bg-stone-100"
                        aria-label="increase"
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-stone-500 underline-offset-4 hover:text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6">
          <div className="text-sm font-semibold uppercase tracking-wider text-stone-500">Summary</div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-600">Subtotal</span>
              <span className="text-stone-900">${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Discount {promoCode && <span className="text-xs">({promoCode})</span>}</span>
                <span>−${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-stone-600">Shipping</span>
              <span className="text-stone-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Tax (est.)</span>
              <span className="text-stone-900">${tax.toFixed(2)}</span>
            </div>
            <div className="my-3 h-px bg-stone-200" />
            <div className="flex items-baseline justify-between">
              <span className="text-base font-semibold text-stone-900">Total</span>
              <span className="text-xl font-semibold text-stone-900">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5">
            {promoCode ? (
              <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs">
                <span className="font-medium text-emerald-800">{promoCode} applied</span>
                <button onClick={removePromo} className="text-emerald-700 underline">Remove</button>
              </div>
            ) : (
              <div>
                <label className="mb-1 block text-xs font-medium text-stone-600">Promo code</label>
                <div className="flex gap-2">
                  <input
                    value={promoInput}
                    onChange={e => setPromoInput(e.target.value)}
                    placeholder="WELCOME10"
                    className="flex-1 rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      const r = applyPromo(promoInput);
                      setPromoMessage(r);
                      if (r.ok) setPromoInput('');
                    }}
                    className="rounded-lg border border-stone-300 px-4 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`mt-1 text-xs ${promoMessage.ok ? 'text-emerald-600' : 'text-red-600'}`}>
                    {promoMessage.message}
                  </p>
                )}
                <p className="mt-1 text-[11px] text-stone-400">Try WELCOME10, POD20, or FREESHIP</p>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="mt-5 w-full rounded-full bg-stone-900 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Checkout · ${total.toFixed(2)}
          </button>

          <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-stone-400">
            <span>🔒 Secure checkout</span>
            <span>·</span>
            <span>30-day returns</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
