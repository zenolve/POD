import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';

test('renders shop catalog', () => {
  render(
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>,
  );
  expect(screen.getByText(/FORMA/i)).toBeInTheDocument();
});
