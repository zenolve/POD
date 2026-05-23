import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';

interface CheckoutProps {
  navigate: (path: string) => void;
}

type Step = 'contact' | 'shipping' | 'payment';

const Checkout: React.FC<CheckoutProps> = ({ navigate }) => {
  const { items, subtotal, discount, shipping, tax, total, clearCart } = useCart();
  const { setLastOrder } = useApp();

  const [step, setStep] = useState<Step>('contact');
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apt: '',
    city: '',
    region: '',
    zip: '',
    country: 'United States',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: keyof typeof form, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const validate = (target: Step): boolean => {
    const e: Record<string, string> = {};
    if (target === 'contact' || target === 'shipping' || target === 'payment') {
      if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    }
    if (target === 'shipping' || target === 'payment') {
      if (!form.firstName) e.firstName = 'Required';
      if (!form.lastName) e.lastName = 'Required';
      if (!form.address) e.address = 'Required';
      if (!form.city) e.city = 'Required';
      if (!form.region) e.region = 'Required';
      if (!form.zip || form.zip.length < 3) e.zip = 'Invalid';
    }
    if (target === 'payment') {
      if (!form.cardName) e.cardName = 'Required';
      const digits = form.cardNumber.replace(/\s/g, '');
      if (digits.length < 13 || digits.length > 19) e.cardNumber = 'Card number looks wrong';
      if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = 'Use MM/YY';
      if (!/^\d{3,4}$/.test(form.cvc)) e.cvc = '3–4 digits';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContinue = (next: Step) => {
    if (validate(step)) setStep(next);
  };

  const handlePlaceOrder = async () => {
    if (!validate('payment') || submitting) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1100));
    const orderId = `FORMA-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setLastOrder({ id: orderId, total, itemCount: items.reduce((s, i) => s + i.quantity, 0) });
    clearCart();
    setSubmitting(false);
    navigate(`/order/${orderId}`);
  };

  const formatCard = (v: string) =>
    v.replace(/\D/g, '').slice(0, 19).replace(/(\d{4})(?=\d)/g, '$1 ');
  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 4);
    if (d.length <= 2) return d;
    return `${d.slice(0, 2)}/${d.slice(2)}`;
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-xl font-semibold text-stone-900">Nothing to check out</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Back to shop
        </button>
      </div>
    );
  }

  const fieldClass = (k: string) =>
    `w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 ${
      errors[k] ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-stone-200 focus:border-stone-900 focus:ring-stone-900'
    }`;

  const stepOrder: Step[] = ['contact', 'shipping', 'payment'];
  const stepIdx = stepOrder.indexOf(step);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <button onClick={() => navigate('/cart')} className="mb-6 text-sm text-stone-500 hover:text-stone-900">
        ← Back to cart
      </button>

      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        <div>
          <div className="mb-8 flex items-center gap-2 text-xs">
            {stepOrder.map((s, i) => (
              <React.Fragment key={s}>
                <button
                  onClick={() => i < stepIdx && setStep(s)}
                  className={`flex items-center gap-2 ${i <= stepIdx ? 'text-stone-900' : 'text-stone-400'}`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${i < stepIdx ? 'bg-stone-900 text-white' : i === stepIdx ? 'border-2 border-stone-900 text-stone-900' : 'border border-stone-300 text-stone-400'}`}>
                    {i < stepIdx ? '✓' : i + 1}
                  </span>
                  <span className="capitalize">{s}</span>
                </button>
                {i < stepOrder.length - 1 && <span className="h-px w-8 bg-stone-300" />}
              </React.Fragment>
            ))}
          </div>

          {step === 'contact' && (
            <section className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">Contact</h2>
              <p className="mt-1 text-xs text-stone-500">We'll email your order confirmation and tracking here.</p>
              <div className="mt-5 space-y-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">Email</label>
                  <input
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    placeholder="you@example.com"
                    className={fieldClass('email')}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>
              <button
                onClick={() => handleContinue('shipping')}
                className="mt-6 w-full rounded-full bg-stone-900 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Continue to shipping
              </button>
            </section>
          )}

          {step === 'shipping' && (
            <section className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">Shipping address</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">First name</label>
                  <input value={form.firstName} onChange={e => update('firstName', e.target.value)} className={fieldClass('firstName')} />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">Last name</label>
                  <input value={form.lastName} onChange={e => update('lastName', e.target.value)} className={fieldClass('lastName')} />
                  {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-stone-600">Address</label>
                  <input value={form.address} onChange={e => update('address', e.target.value)} className={fieldClass('address')} />
                  {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-stone-600">Apt, suite (optional)</label>
                  <input value={form.apt} onChange={e => update('apt', e.target.value)} className={fieldClass('apt')} />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">City</label>
                  <input value={form.city} onChange={e => update('city', e.target.value)} className={fieldClass('city')} />
                  {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">State / Region</label>
                  <input value={form.region} onChange={e => update('region', e.target.value)} className={fieldClass('region')} />
                  {errors.region && <p className="mt-1 text-xs text-red-600">{errors.region}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">ZIP / Postal</label>
                  <input value={form.zip} onChange={e => update('zip', e.target.value)} className={fieldClass('zip')} />
                  {errors.zip && <p className="mt-1 text-xs text-red-600">{errors.zip}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">Country</label>
                  <select value={form.country} onChange={e => update('country', e.target.value)} className={fieldClass('country')}>
                    {['United States', 'Canada', 'United Kingdom', 'Germany', 'Australia', 'Japan'].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setStep('contact')} className="rounded-full border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-700 hover:border-stone-900">
                  Back
                </button>
                <button onClick={() => handleContinue('payment')} className="flex-1 rounded-full bg-stone-900 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700">
                  Continue to payment
                </button>
              </div>
            </section>
          )}

          {step === 'payment' && (
            <section className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">Payment</h2>
              <p className="mt-1 text-xs text-stone-500">
                Demo only — no real payment is processed. Try card <span className="font-mono">4242 4242 4242 4242</span>.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-stone-600">Name on card</label>
                  <input value={form.cardName} onChange={e => update('cardName', e.target.value)} className={fieldClass('cardName')} />
                  {errors.cardName && <p className="mt-1 text-xs text-red-600">{errors.cardName}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-stone-600">Card number</label>
                  <input
                    value={form.cardNumber}
                    onChange={e => update('cardNumber', formatCard(e.target.value))}
                    placeholder="4242 4242 4242 4242"
                    className={fieldClass('cardNumber')}
                    inputMode="numeric"
                  />
                  {errors.cardNumber && <p className="mt-1 text-xs text-red-600">{errors.cardNumber}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">Expiry</label>
                  <input
                    value={form.expiry}
                    onChange={e => update('expiry', formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    className={fieldClass('expiry')}
                    inputMode="numeric"
                  />
                  {errors.expiry && <p className="mt-1 text-xs text-red-600">{errors.expiry}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-stone-600">CVC</label>
                  <input
                    value={form.cvc}
                    onChange={e => update('cvc', e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="123"
                    className={fieldClass('cvc')}
                    inputMode="numeric"
                  />
                  {errors.cvc && <p className="mt-1 text-xs text-red-600">{errors.cvc}</p>}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setStep('shipping')} className="rounded-full border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-700 hover:border-stone-900" disabled={submitting}>
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  disabled={submitting}
                  className="flex-1 rounded-full bg-stone-900 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:bg-stone-400"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Processing…
                    </span>
                  ) : (
                    `Place order · $${total.toFixed(2)}`
                  )}
                </button>
              </div>
            </section>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">Your order</div>
          <ul className="mt-4 space-y-3">
            {items.map(item => (
              <li key={item.id} className="flex gap-3">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                  {item.previewFront || item.previewBack ? (
                    <img src={(item.previewFront ?? item.previewBack)!} alt="" className="h-full w-full object-contain" />
                  ) : (
                    <div className="h-full w-full" style={{ backgroundColor: item.colorHex }} />
                  )}
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1 text-[10px] font-semibold text-white">
                    {item.quantity}
                  </span>
                </div>
                <div className="min-w-0 flex-1 text-xs">
                  <div className="truncate font-medium text-stone-900">{item.productName}</div>
                  <div className="text-stone-500">
                    {item.colorName} · {item.size}
                  </div>
                </div>
                <div className="text-xs font-semibold text-stone-900">
                  ${(item.unitPrice * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="my-5 h-px bg-stone-200" />

          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-stone-600">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-700"><span>Discount</span><span>−${discount.toFixed(2)}</span></div>
            )}
            <div className="flex justify-between"><span className="text-stone-600">Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between"><span className="text-stone-600">Tax</span><span>${tax.toFixed(2)}</span></div>
            <div className="mt-3 flex items-baseline justify-between border-t border-stone-200 pt-3">
              <span className="text-base font-semibold text-stone-900">Total</span>
              <span className="text-lg font-semibold text-stone-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
