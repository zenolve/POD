import React, { useState } from 'react';
import { PRODUCTS, getColor } from '../../data/products';
import MockupPreview from '../Mockup/MockupPreview';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const [hoveredColor, setHoveredColor] = useState<Record<string, string>>({});

  return (
    <div>
      <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-stone-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-stone-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live · AI design studio
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              Wear what you<br />
              <span className="italic text-stone-500">imagine.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-stone-600">
              Generate your design with AI, drop it onto premium garments, and we'll print and
              ship it on-demand. No minimums, no waste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/customize/hoodie')}
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Start designing →
              </button>
              <button
                onClick={() => {
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
              >
                Browse catalog
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-6 text-sm">
              <div>
                <div className="text-2xl font-semibold text-stone-900">24h</div>
                <div className="text-stone-500">avg. production</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-stone-900">120+</div>
                <div className="text-stone-500">countries shipped</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-stone-900">4.9★</div>
                <div className="text-stone-500">5,200+ reviews</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-100 via-stone-100 to-emerald-100 blur-2xl opacity-60" />
            <div className="relative grid grid-cols-2 gap-4">
              {PRODUCTS.slice(0, 4).map((p, i) => (
                <div
                  key={p.id}
                  className={`rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 ${
                    i % 2 === 1 ? 'translate-y-6' : ''
                  }`}
                >
                  <MockupPreview
                    productId={p.id}
                    colorHex={getColor(p, p.defaultColor).hex}
                    printArea={p.printArea}
                  />
                  <div className="mt-2 text-xs font-medium text-stone-700">{p.name.split(' ').slice(-2).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-stone-500">Catalog</div>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                Pick a blank, make it yours
              </h2>
            </div>
            <p className="max-w-sm text-sm text-stone-500">
              Every garment is sourced for its weight, hand-feel and printability. Built to outlast
              the trend cycle.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map(p => {
              const colorId = hoveredColor[p.id] ?? p.defaultColor;
              const color = getColor(p, colorId);
              return (
                <div
                  key={p.id}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 transition hover:shadow-lg"
                  onClick={() => navigate(`/customize/${p.id}`)}
                >
                  <div className="aspect-square overflow-hidden bg-stone-100">
                    <MockupPreview
                      productId={p.id}
                      colorHex={color.hex}
                      printArea={p.printArea}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-semibold text-stone-900">{p.name}</div>
                        <div className="text-xs text-stone-500">{p.tagline}</div>
                      </div>
                      <div className="shrink-0 text-sm font-semibold text-stone-900">${p.basePrice}</div>
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      {p.colors.slice(0, 8).map(c => (
                        <button
                          key={c.id}
                          onClick={e => {
                            e.stopPropagation();
                            setHoveredColor(prev => ({ ...prev, [p.id]: c.id }));
                          }}
                          onMouseEnter={() =>
                            setHoveredColor(prev => ({ ...prev, [p.id]: c.id }))
                          }
                          className={`h-4 w-4 rounded-full border transition ${
                            colorId === c.id ? 'ring-2 ring-stone-900 ring-offset-1' : 'border-stone-300'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          aria-label={c.name}
                        />
                      ))}
                      {p.colors.length > 8 && (
                        <span className="ml-1 text-xs text-stone-400">+{p.colors.length - 8}</span>
                      )}
                    </div>
                    <button className="mt-4 w-full rounded-full bg-stone-900 py-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                      Customize →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-stone-500">How it works</div>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight text-stone-900">
              Three steps from idea to doorstep
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Generate or upload',
                body: 'Describe what you want and our AI generates four variations. Or bring your own art.',
              },
              {
                n: '02',
                title: 'Place & preview',
                body: 'Drag, scale, rotate. Add text. Toggle between front and back. Live mockup updates as you go.',
              },
              {
                n: '03',
                title: 'We print & ship',
                body: 'Sent to our production partners within hours. Tracked delivery worldwide.',
              },
            ].map(step => (
              <div key={step.n} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="text-3xl font-semibold text-stone-300">{step.n}</div>
                <div className="mt-3 text-lg font-semibold text-stone-900">{step.title}</div>
                <div className="mt-2 text-sm text-stone-600">{step.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
