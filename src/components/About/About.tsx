import React from 'react';

interface AboutProps {
  navigate: (path: string) => void;
}

const About: React.FC<AboutProps> = ({ navigate }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-xs font-medium uppercase tracking-wider text-stone-500">About</div>
      <h1 className="mt-1 text-4xl font-semibold tracking-tight text-stone-900">
        Apparel, designed by you.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-stone-600">
        Forma is a print-on-demand studio for one-off and small-batch apparel. We pair
        generative AI with a curated catalog of garments we'd actually wear ourselves. Each piece
        is printed only when ordered — no waste, no warehouses full of unsold tees.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <div className="text-3xl">🌱</div>
          <div className="mt-3 font-semibold text-stone-900">Made on demand</div>
          <p className="mt-1 text-sm text-stone-600">Zero overproduction. We print only what's ordered.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <div className="text-3xl">🎨</div>
          <div className="mt-3 font-semibold text-stone-900">Designed by you</div>
          <p className="mt-1 text-sm text-stone-600">Generate art with AI or bring your own. Full creative control.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <div className="text-3xl">✈️</div>
          <div className="mt-3 font-semibold text-stone-900">Shipped worldwide</div>
          <p className="mt-1 text-sm text-stone-600">Tracked delivery to 120+ countries.</p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <button
          onClick={() => navigate('/')}
          className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-700"
        >
          Browse catalog
        </button>
        <button
          onClick={() => navigate('/customize/hoodie')}
          className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 hover:border-stone-900 hover:text-stone-900"
        >
          Start designing
        </button>
      </div>
    </div>
  );
};

export default About;
