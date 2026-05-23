import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink = (path: string, label: string) => {
    const active = currentPath === path || (path === '/' && currentPath === '/');
    return (
      <button
        onClick={() => {
          setMobileOpen(false);
          navigate(path);
        }}
        className={`text-sm font-medium tracking-wide transition-colors ${
          active ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-stone-900"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
            <path d="M6 10 L16 4 L26 10 L26 24 L16 28 L6 24 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M11 13 L16 16 L21 13 M16 16 V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">FORMA</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-stone-400 sm:inline">studio</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLink('/', 'Shop')}
          {navLink('/customize/hoodie', 'Customize')}
          {navLink('/about', 'About')}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/cart')}
            className="relative flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            aria-label="Open cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {itemCount > 0 && (
              <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1.5 text-xs font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="rounded-full border border-stone-200 p-2 md:hidden"
            aria-label="Open menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLink('/', 'Shop')}
            {navLink('/customize/hoodie', 'Customize')}
            {navLink('/about', 'About')}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
