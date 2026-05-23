import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-stone-900">FORMA</div>
            <p className="mt-2 text-sm text-stone-500">
              Premium print-on-demand apparel. Designed by you, made on-demand, shipped worldwide.
            </p>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-900">Shop</div>
            <ul className="space-y-1 text-sm text-stone-500">
              <li>Hoodies</li>
              <li>T-Shirts</li>
              <li>Sweatshirts</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-900">Help</div>
            <ul className="space-y-1 text-sm text-stone-500">
              <li>Sizing guide</li>
              <li>Shipping & returns</li>
              <li>Print quality</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-900">Studio</div>
            <ul className="space-y-1 text-sm text-stone-500">
              <li>Our process</li>
              <li>Sustainability</li>
              <li>For brands</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Forma Studio. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
