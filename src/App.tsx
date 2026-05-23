import React from 'react';
import { useRouter } from './hooks/use-router';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Customizer from './components/Customizer/Customizer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmation from './components/Order/OrderConfirmation';
import About from './components/About/About';

function App() {
  const { route, navigate } = useRouter();

  let page: React.ReactNode;
  const [first, second] = route.segments;

  if (!first || first === '') {
    page = <Home navigate={navigate} />;
  } else if (first === 'customize') {
    page = <Customizer productId={second ?? 'hoodie'} navigate={navigate} />;
  } else if (first === 'cart') {
    page = <Cart navigate={navigate} />;
  } else if (first === 'checkout') {
    page = <Checkout navigate={navigate} />;
  } else if (first === 'order') {
    page = <OrderConfirmation orderId={second ?? ''} navigate={navigate} />;
  } else if (first === 'about') {
    page = <About navigate={navigate} />;
  } else {
    page = (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-semibold text-stone-900">Page not found</h1>
        <p className="mt-2 text-stone-500">The page you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Back home
        </button>
      </div>
    );
  }

  const hideFooterOn = first === 'customize';

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
      <Header currentPath={route.path} navigate={navigate} />
      <main className="flex-1">{page}</main>
      {!hideFooterOn && <Footer />}
    </div>
  );
}

export default App;
