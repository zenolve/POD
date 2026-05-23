import React, { useState, useRef } from 'react';
import { DESIGN_STYLES, DesignStyle, QUICK_PROMPTS, generateDesignDataUrl } from '../../data/designGenerator';
import { useApp, GeneratedImage } from '../../context/AppContext';

interface AIPanelProps {
  onUseImage: (url: string) => void;
}

const AIPanel: React.FC<AIPanelProps> = ({ onUseImage }) => {
  const { gallery, addToGallery, removeFromGallery } = useApp();
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<DesignStyle>('vector');
  const [generating, setGenerating] = useState(false);
  const [latest, setLatest] = useState<GeneratedImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    const p = prompt.trim();
    if (!p || generating) return;
    setGenerating(true);
    setLatest([]);

    await new Promise(r => setTimeout(r, 700 + Math.random() * 600));

    const variations: GeneratedImage[] = [0, 1, 2, 3].map(i => ({
      id: `gen_${Date.now()}_${i}`,
      url: generateDesignDataUrl(p, style, i),
      prompt: p,
      style,
      createdAt: Date.now(),
    }));

    setLatest(variations);
    addToGallery(variations);
    setGenerating(false);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const img: GeneratedImage = {
          id: `upload_${Date.now()}`,
          url: reader.result,
          prompt: file.name,
          style: 'upload',
          createdAt: Date.now(),
        };
        addToGallery(img);
        onUseImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-stone-200 px-4 py-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">AI Studio</div>
        <div className="mt-1 text-sm font-medium text-stone-900">Generate or upload artwork</div>
      </div>

      <div className="space-y-4 border-b border-stone-200 px-4 py-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-stone-600">Prompt</label>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                handleGenerate();
              }
            }}
            placeholder="A vintage mountain expedition badge..."
            className="h-20 w-full resize-none rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
          />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.slice(0, 4).map(q => (
              <button
                key={q}
                onClick={() => setPrompt(q)}
                className="rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] text-stone-600 transition hover:border-stone-900 hover:text-stone-900"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-stone-600">Style</label>
          <div className="grid grid-cols-3 gap-1.5">
            {DESIGN_STYLES.map(s => (
              <button
                key={s.id}
                onClick={() => setStyle(s.id)}
                className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition ${
                  style === s.id
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={generating || !prompt.trim()}
          className="w-full rounded-lg bg-stone-900 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {generating ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Generating 4 variations…
            </span>
          ) : (
            'Generate ✨'
          )}
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-stone-200" />
          <div className="text-[10px] uppercase tracking-wider text-stone-400">or</div>
          <div className="h-px flex-1 bg-stone-200" />
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 py-2.5 text-sm font-medium text-stone-600 transition hover:border-stone-900 hover:text-stone-900"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload your own image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/svg+xml,image/webp"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {generating && (
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="aspect-square animate-pulse rounded-lg bg-stone-200" />
            ))}
          </div>
        )}

        {!generating && latest.length > 0 && (
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Latest results
            </div>
            <div className="grid grid-cols-2 gap-2">
              {latest.map(img => (
                <button
                  key={img.id}
                  onClick={() => onUseImage(img.url)}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-stone-200 bg-white transition hover:border-stone-900 hover:shadow-md"
                >
                  <img src={img.url} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-stone-900/0 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:bg-stone-900/85 group-hover:opacity-100">
                    Use design
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {!generating && gallery.length > 0 && (
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">Library</div>
              <span className="text-[10px] text-stone-400">{gallery.length} saved</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[...gallery].reverse().slice(0, 12).map(img => (
                <div key={img.id} className="group relative">
                  <button
                    onClick={() => onUseImage(img.url)}
                    className="aspect-square w-full overflow-hidden rounded-md border border-stone-200 bg-white transition hover:border-stone-900"
                  >
                    <img src={img.url} alt="" className="h-full w-full object-cover" />
                  </button>
                  <button
                    onClick={() => removeFromGallery(img.id)}
                    className="absolute right-1 top-1 hidden h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-[10px] text-white group-hover:flex"
                    aria-label="Remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {!generating && latest.length === 0 && gallery.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center text-xs text-stone-400">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <p className="mt-3 max-w-[180px]">
              Describe what you want printed and generate four variations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPanel;
