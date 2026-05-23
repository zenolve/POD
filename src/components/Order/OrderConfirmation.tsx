import React from 'react';
import { useApp } from '../../context/AppContext';

interface OrderConfirmationProps {
  orderId: string;
  navigate: (path: string) => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderId, navigate }) => {
  const { lastOrder } = useApp();
  const id = lastOrder?.id ?? orderId;
  const total = lastOrder?.total;
  const itemCount = lastOrder?.itemCount;

  const eta = new Date();
  eta.setDate(eta.getDate() + 7);
  const etaStr = eta.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900">Thank you for your order</h1>
        <p className="mt-2 text-sm text-stone-600">
          Order <span className="font-mono font-semibold text-stone-900">{id}</span> is confirmed.
          A receipt is on its way to your inbox.
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">Production</div>
            <div className="mt-2 text-sm font-medium text-stone-900">Starts in ~2 hours</div>
            <div className="text-xs text-stone-500">Each piece printed to order at our partner facility.</div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">Estimated delivery</div>
            <div className="mt-2 text-sm font-medium text-stone-900">{etaStr}</div>
            <div className="text-xs text-stone-500">Standard tracked shipping</div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">Total charged</div>
            <div className="mt-2 text-sm font-medium text-stone-900">
              {typeof total === 'number' ? `$${total.toFixed(2)}` : '—'}
            </div>
            <div className="text-xs text-stone-500">{itemCount ?? 0} item{itemCount === 1 ? '' : 's'}</div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => navigate('/')} className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
            Continue shopping
          </button>
          <button onClick={() => navigate('/customize/hoodie')} className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900">
            Design another
          </button>
        </div>

        <p className="mt-8 text-xs text-stone-400">
          Questions? Reach us at hello@forma.studio — we usually reply within a few hours.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
