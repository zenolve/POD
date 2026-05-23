export type DesignStyle = 'vector' | 'graphic' | 'minimal' | 'sketch' | 'retro' | 'abstract';

export const DESIGN_STYLES: { id: DesignStyle; label: string; description: string }[] = [
  { id: 'vector', label: 'Vector', description: 'Bold flat shapes' },
  { id: 'graphic', label: 'Graphic', description: 'Heavy type & marks' },
  { id: 'minimal', label: 'Minimal', description: 'Thin lines, lots of air' },
  { id: 'sketch', label: 'Sketch', description: 'Hand-drawn feel' },
  { id: 'retro', label: 'Retro', description: '70s sun-faded palette' },
  { id: 'abstract', label: 'Abstract', description: 'Generative blobs' },
];

const PALETTES: Record<DesignStyle, string[][]> = {
  vector: [
    ['#ff6b35', '#f7c948', '#1a1a1a', '#ffffff'],
    ['#2d6a4f', '#95d5b2', '#1a1a1a', '#fefae0'],
    ['#3a86ff', '#ffbe0b', '#ff006e', '#ffffff'],
    ['#06d6a0', '#118ab2', '#073b4c', '#ffd166'],
  ],
  graphic: [
    ['#000000', '#ffffff', '#ff3b30'],
    ['#1a1a1a', '#fefae0', '#bc6c25'],
    ['#0f172a', '#f4f4f5', '#facc15'],
  ],
  minimal: [
    ['#1a1a1a', '#ffffff'],
    ['#2d3748', '#f7fafc'],
    ['#3f3f46', '#fafaf9'],
  ],
  sketch: [
    ['#1a1a1a', '#fefae0'],
    ['#2d3142', '#f4f1de'],
  ],
  retro: [
    ['#bc6c25', '#dda15e', '#283618', '#fefae0'],
    ['#d62828', '#f77f00', '#fcbf49', '#003049'],
    ['#cb997e', '#ddbea9', '#6b705c', '#fefae0'],
  ],
  abstract: [
    ['#f72585', '#7209b7', '#3a0ca3', '#4cc9f0'],
    ['#264653', '#2a9d8f', '#e9c46a', '#f4a261'],
    ['#84a98c', '#cad2c5', '#52796f', '#354f52'],
  ],
};

const FONTS: Record<DesignStyle, string> = {
  vector: 'Impact, Haettenschweiler, sans-serif-condensed, sans-serif',
  graphic: 'Georgia, "Times New Roman", serif',
  minimal: 'Helvetica, Arial, sans-serif',
  sketch: '"Comic Sans MS", "Marker Felt", cursive',
  retro: '"Courier New", Courier, monospace',
  abstract: 'Verdana, Geneva, sans-serif',
};

const mulberry32 = (a: number) => {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const seedFromString = (s: string): number => {
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
};

const escapeXml = (s: string): string =>
  s.replace(/[<>&'"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]!));

const wrapText = (text: string, maxLen: number): string[] => {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxLen) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 4);
};

const pick = <T,>(arr: T[], rand: () => number): T => arr[Math.floor(rand() * arr.length)];

const renderVector = (prompt: string, palette: string[], rand: () => number): string => {
  const [c1, c2, c3, c4 = c1] = palette;
  const lines = wrapText(prompt.toUpperCase() || 'YOUR DESIGN', 12);
  const fontSize = lines.length > 2 ? 60 : 90;
  const startY = 256 - ((lines.length - 1) * fontSize) / 2;
  const shapes: string[] = [];
  const shapeCount = 3 + Math.floor(rand() * 4);
  for (let i = 0; i < shapeCount; i++) {
    const cx = 60 + rand() * 392;
    const cy = 60 + rand() * 392;
    const r = 20 + rand() * 70;
    const fill = [c1, c3, c4][Math.floor(rand() * 3)];
    if (rand() > 0.5) {
      shapes.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="0.85" />`);
    } else {
      shapes.push(`<rect x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" fill="${fill}" opacity="0.85" transform="rotate(${rand() * 45} ${cx} ${cy})" />`);
    }
  }
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <rect width="512" height="512" fill="${c2}" />
      ${shapes.join('')}
      <g font-family="${FONTS.vector}" font-weight="900" text-anchor="middle" fill="${c1}">
        ${lines.map((l, i) => `<text x="256" y="${startY + i * fontSize}" font-size="${fontSize}" letter-spacing="2">${escapeXml(l)}</text>`).join('')}
      </g>
    </svg>
  `;
};

const renderGraphic = (prompt: string, palette: string[], rand: () => number): string => {
  const [c1, c2, c3 = c1] = palette;
  const lines = wrapText(prompt || 'Your Idea', 14);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <rect width="512" height="512" fill="${c2}" />
      <circle cx="256" cy="256" r="${140 + rand() * 40}" fill="${c1}" />
      <circle cx="256" cy="256" r="${100 + rand() * 30}" fill="${c2}" />
      <g font-family="${FONTS.graphic}" font-style="italic" text-anchor="middle" fill="${c1}">
        ${lines.map((l, i) => `<text x="256" y="${260 + (i - (lines.length - 1) / 2) * 56}" font-size="48">${escapeXml(l)}</text>`).join('')}
      </g>
      <text x="256" y="${460}" font-family="${FONTS.graphic}" font-size="14" letter-spacing="8" text-anchor="middle" fill="${c3}">EST. ${1970 + Math.floor(rand() * 55)}</text>
    </svg>
  `;
};

const renderMinimal = (prompt: string, palette: string[], rand: () => number): string => {
  const [fg, bg] = palette;
  const lines = wrapText(prompt || 'less is more', 22);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <rect width="512" height="512" fill="${bg}" />
      <line x1="80" y1="200" x2="432" y2="200" stroke="${fg}" stroke-width="1.5" />
      <line x1="80" y1="320" x2="432" y2="320" stroke="${fg}" stroke-width="1.5" />
      <circle cx="${120 + rand() * 270}" cy="260" r="6" fill="${fg}" />
      <g font-family="${FONTS.minimal}" font-weight="300" text-anchor="middle" fill="${fg}">
        ${lines.map((l, i) => `<text x="256" y="${240 + i * 36}" font-size="${lines.length > 2 ? 22 : 30}" letter-spacing="${lines.length > 2 ? 2 : 6}">${escapeXml(l.toLowerCase())}</text>`).join('')}
      </g>
      <text x="256" y="470" font-family="${FONTS.minimal}" font-size="10" letter-spacing="4" text-anchor="middle" fill="${fg}" opacity="0.5">— FORMA STUDIO —</text>
    </svg>
  `;
};

const renderSketch = (prompt: string, palette: string[], rand: () => number): string => {
  const [fg, bg] = palette;
  const lines = wrapText(prompt || 'hand drawn', 16);
  const scribbles: string[] = [];
  for (let i = 0; i < 6; i++) {
    const x = 60 + rand() * 392;
    const y = 60 + rand() * 392;
    const path: string[] = [`M ${x} ${y}`];
    for (let j = 0; j < 8; j++) {
      path.push(`L ${x + (rand() - 0.5) * 40} ${y + (rand() - 0.5) * 40}`);
    }
    scribbles.push(`<path d="${path.join(' ')}" fill="none" stroke="${fg}" stroke-width="1.5" opacity="0.5" stroke-linecap="round" />`);
  }
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <rect width="512" height="512" fill="${bg}" />
      ${scribbles.join('')}
      <circle cx="256" cy="240" r="120" fill="none" stroke="${fg}" stroke-width="3" stroke-dasharray="4 3" />
      <g font-family="${FONTS.sketch}" text-anchor="middle" fill="${fg}">
        ${lines.map((l, i) => `<text x="256" y="${256 + (i - (lines.length - 1) / 2) * 40}" font-size="32" transform="rotate(${(rand() - 0.5) * 6} 256 ${256 + i * 40})">${escapeXml(l)}</text>`).join('')}
      </g>
    </svg>
  `;
};

const renderRetro = (prompt: string, palette: string[], rand: () => number): string => {
  const [c1, c2, c3, c4 = c1] = palette;
  const lines = wrapText((prompt || 'sunset cruise').toUpperCase(), 12);
  const stripes: string[] = [];
  for (let i = 0; i < 8; i++) {
    stripes.push(
      `<rect x="64" y="${340 + i * 14}" width="384" height="6" fill="${i % 2 === 0 ? c1 : c2}" opacity="${1 - i * 0.1}" />`,
    );
  }
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <defs>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${c2}" />
          <stop offset="100%" stop-color="${c1}" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="${c4}" />
      <circle cx="256" cy="280" r="130" fill="url(#sun)" />
      ${stripes.join('')}
      <g font-family="${FONTS.retro}" font-weight="bold" text-anchor="middle" fill="${c3 ?? c1}">
        ${lines.map((l, i) => `<text x="256" y="${130 + i * 48}" font-size="44" letter-spacing="6">${escapeXml(l)}</text>`).join('')}
      </g>
    </svg>
  `;
};

const renderAbstract = (prompt: string, palette: string[], rand: () => number): string => {
  const blobs: string[] = [];
  for (let i = 0; i < 5; i++) {
    const cx = 80 + rand() * 352;
    const cy = 80 + rand() * 352;
    const points: string[] = [];
    const sides = 6 + Math.floor(rand() * 4);
    for (let s = 0; s < sides; s++) {
      const a = (s / sides) * Math.PI * 2;
      const r = 80 + rand() * 90;
      points.push(`${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`);
    }
    blobs.push(`<polygon points="${points.join(' ')}" fill="${palette[i % palette.length]}" opacity="0.7" />`);
  }
  const lines = wrapText(prompt || '', 18);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <rect width="512" height="512" fill="${palette[palette.length - 1]}" />
      <g filter="url(#blur)">${blobs.join('')}</g>
      <defs><filter id="blur"><feGaussianBlur stdDeviation="14" /></filter></defs>
      <g font-family="Verdana, sans-serif" font-weight="700" text-anchor="middle" fill="#ffffff" style="mix-blend-mode:overlay">
        ${lines.map((l, i) => `<text x="256" y="${260 + (i - (lines.length - 1) / 2) * 40}" font-size="34" letter-spacing="3">${escapeXml(l.toUpperCase())}</text>`).join('')}
      </g>
    </svg>
  `;
};

export const generateDesignSvg = (prompt: string, style: DesignStyle, variation: number): string => {
  const seed = seedFromString(`${prompt}::${style}::${variation}`);
  const rand = mulberry32(seed);
  const palette = pick(PALETTES[style], rand);
  switch (style) {
    case 'vector':
      return renderVector(prompt, palette, rand);
    case 'graphic':
      return renderGraphic(prompt, palette, rand);
    case 'minimal':
      return renderMinimal(prompt, palette, rand);
    case 'sketch':
      return renderSketch(prompt, palette, rand);
    case 'retro':
      return renderRetro(prompt, palette, rand);
    case 'abstract':
      return renderAbstract(prompt, palette, rand);
  }
};

export const generateDesignDataUrl = (prompt: string, style: DesignStyle, variation: number): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(generateDesignSvg(prompt, style, variation))}`;

export const QUICK_PROMPTS: string[] = [
  'mountain expedition club',
  'sunrise over kyoto',
  'late night radio',
  'cosmic surf co.',
  'wildflower society',
  'analog dreams',
  'desert highway 1985',
  'liberty park runners',
];
