import { ProductId, ProductView } from './products';

const CANVAS = 600;

const shade = (hex: string, amount: number): string => {
  const h = hex.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(h.substring(0, 2), 16) + amount));
  const g = Math.max(0, Math.min(255, parseInt(h.substring(2, 4), 16) + amount));
  const b = Math.max(0, Math.min(255, parseInt(h.substring(4, 6), 16) + amount));
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
};

const isLight = (hex: string): boolean => {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 160;
};

const shadows = (hex: string) => {
  const light = isLight(hex);
  return {
    deep: light ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.35)',
    mid: light ? 'rgba(0,0,0,0.10)' : 'rgba(0,0,0,0.22)',
    soft: light ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.13)',
    highlight: light ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.10)',
    stitch: light ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.25)',
    string: light ? '#bdb7a8' : '#e8e3d3',
  };
};

const hoodieFront = (color: string): string => {
  const s = shadows(color);
  const dark = shade(color, -20);
  return `
    <ellipse cx="300" cy="640" rx="220" ry="14" fill="rgba(0,0,0,0.18)" />
    <path d="M 120 230 Q 88 350 100 470 Q 105 520 140 528 L 200 510 L 200 250 Z" fill="${color}" />
    <path d="M 480 230 Q 512 350 500 470 Q 495 520 460 528 L 400 510 L 400 250 Z" fill="${color}" />
    <path d="M 100 470 Q 105 520 140 528 L 200 510 L 200 460 Z" fill="${s.mid}" />
    <path d="M 500 470 Q 495 520 460 528 L 400 510 L 400 460 Z" fill="${s.mid}" />
    <path d="M 200 230 L 200 600 Q 200 632 240 636 L 360 636 Q 400 632 400 600 L 400 230 Q 350 252 300 252 Q 250 252 200 230 Z" fill="${color}" />
    <path d="M 200 230 L 200 600 Q 200 632 240 636 L 270 636 L 270 240 Q 230 240 200 230 Z" fill="${s.soft}" />
    <path d="M 400 230 L 400 600 Q 400 632 360 636 L 330 636 L 330 240 Q 370 240 400 230 Z" fill="${s.soft}" />
    <path d="M 196 230 Q 196 130 300 130 Q 404 130 404 230 L 425 252 Q 360 280 300 280 Q 240 280 175 252 Z" fill="${color}" />
    <path d="M 196 230 Q 196 130 300 130 L 300 156 Q 222 156 222 230 Z" fill="${s.soft}" />
    <path d="M 404 230 Q 404 130 300 130 L 300 156 Q 378 156 378 230 Z" fill="${s.soft}" />
    <path d="M 236 210 Q 236 156 300 156 Q 364 156 364 210 Q 364 252 300 256 Q 236 252 236 210 Z" fill="${dark}" />
    <path d="M 246 200 Q 246 168 300 168 Q 354 168 354 200 Q 354 240 300 244 Q 246 240 246 200 Z" fill="${s.deep}" />
    <line x1="285" y1="240" x2="282" y2="320" stroke="${s.string}" stroke-width="3" stroke-linecap="round" />
    <line x1="315" y1="240" x2="318" y2="320" stroke="${s.string}" stroke-width="3" stroke-linecap="round" />
    <circle cx="282" cy="324" r="5" fill="${s.string}" />
    <circle cx="318" cy="324" r="5" fill="${s.string}" />
    <path d="M 220 440 L 270 420 L 330 420 L 380 440 L 370 510 L 230 510 Z" fill="none" stroke="${s.mid}" stroke-width="1.5" />
    <line x1="220" y1="440" x2="270" y2="420" stroke="${s.stitch}" stroke-width="1" stroke-dasharray="3 3" />
    <line x1="380" y1="440" x2="330" y2="420" stroke="${s.stitch}" stroke-width="1" stroke-dasharray="3 3" />
    <path d="M 200 600 Q 200 632 240 636 L 360 636 Q 400 632 400 600 L 400 614 Q 400 642 360 646 L 240 646 Q 200 642 200 614 Z" fill="${s.mid}" />
    <path d="M 140 510 Q 105 520 100 470 Q 110 510 145 518 Z" fill="${s.mid}" opacity="0.6" />
    <line x1="200" y1="252" x2="200" y2="600" stroke="${s.stitch}" stroke-width="0.8" />
    <line x1="400" y1="252" x2="400" y2="600" stroke="${s.stitch}" stroke-width="0.8" />
  `;
};

const hoodieBack = (color: string): string => {
  const s = shadows(color);
  return `
    <ellipse cx="300" cy="640" rx="220" ry="14" fill="rgba(0,0,0,0.18)" />
    <path d="M 120 230 Q 88 350 100 470 Q 105 520 140 528 L 200 510 L 200 250 Z" fill="${color}" />
    <path d="M 480 230 Q 512 350 500 470 Q 495 520 460 528 L 400 510 L 400 250 Z" fill="${color}" />
    <path d="M 200 230 L 200 600 Q 200 632 240 636 L 360 636 Q 400 632 400 600 L 400 230 Z" fill="${color}" />
    <path d="M 200 230 L 200 600 Q 200 632 240 636 L 270 636 L 270 240 Z" fill="${s.soft}" />
    <path d="M 400 230 L 400 600 Q 400 632 360 636 L 330 636 L 330 240 Z" fill="${s.soft}" />
    <path d="M 220 156 Q 220 122 300 122 Q 380 122 380 156 L 396 200 Q 360 220 300 220 Q 240 220 204 200 Z" fill="${color}" />
    <path d="M 220 156 Q 220 122 300 122 L 300 144 Q 244 144 244 168 Z" fill="${s.soft}" />
    <path d="M 380 156 Q 380 122 300 122 L 300 144 Q 356 144 356 168 Z" fill="${s.soft}" />
    <path d="M 204 200 Q 240 220 300 220 Q 360 220 396 200 L 405 232 Q 360 248 300 248 Q 240 248 195 232 Z" fill="${s.mid}" />
    <line x1="200" y1="252" x2="200" y2="600" stroke="${s.stitch}" stroke-width="0.8" />
    <line x1="400" y1="252" x2="400" y2="600" stroke="${s.stitch}" stroke-width="0.8" />
    <path d="M 200 600 Q 200 632 240 636 L 360 636 Q 400 632 400 600 L 400 614 Q 400 642 360 646 L 240 646 Q 200 642 200 614 Z" fill="${s.mid}" />
  `;
};

const teeFront = (color: string): string => {
  const s = shadows(color);
  return `
    <ellipse cx="300" cy="630" rx="200" ry="12" fill="rgba(0,0,0,0.16)" />
    <path d="M 240 130 L 175 165 L 110 210 Q 95 320 105 420 Q 110 450 150 455 L 200 440 L 200 200 Z" fill="${color}" />
    <path d="M 360 130 L 425 165 L 490 210 Q 505 320 495 420 Q 490 450 450 455 L 400 440 L 400 200 Z" fill="${color}" />
    <path d="M 200 200 L 200 590 Q 200 620 240 624 L 360 624 Q 400 620 400 590 L 400 200 L 360 130 Q 330 178 300 178 Q 270 178 240 130 Z" fill="${color}" />
    <path d="M 200 200 L 200 590 Q 200 632 240 624 L 270 624 L 270 200 Z" fill="${s.soft}" />
    <path d="M 400 200 L 400 590 Q 400 632 360 624 L 330 624 L 330 200 Z" fill="${s.soft}" />
    <path d="M 240 130 Q 270 174 300 174 Q 330 174 360 130 L 360 142 Q 332 188 300 188 Q 268 188 240 142 Z" fill="${s.deep}" />
    <path d="M 246 138 Q 270 168 300 168 Q 330 168 354 138 Q 330 158 300 158 Q 270 158 246 138 Z" fill="${s.highlight}" opacity="0.4" />
    <path d="M 110 210 Q 95 320 105 420 Q 110 450 150 455 L 200 440 L 200 430 Q 152 440 122 420 Q 110 320 122 220 Z" fill="${s.mid}" />
    <path d="M 490 210 Q 505 320 495 420 Q 490 450 450 455 L 400 440 L 400 430 Q 448 440 478 420 Q 490 320 478 220 Z" fill="${s.mid}" />
    <line x1="200" y1="200" x2="200" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
    <line x1="400" y1="200" x2="400" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
    <path d="M 200 590 Q 200 620 240 624 L 360 624 Q 400 620 400 590 L 400 600 Q 400 630 360 634 L 240 634 Q 200 630 200 600 Z" fill="${s.mid}" />
  `;
};

const teeBack = (color: string): string => {
  const s = shadows(color);
  return `
    <ellipse cx="300" cy="630" rx="200" ry="12" fill="rgba(0,0,0,0.16)" />
    <path d="M 240 130 L 175 165 L 110 210 Q 95 320 105 420 Q 110 450 150 455 L 200 440 L 200 200 Z" fill="${color}" />
    <path d="M 360 130 L 425 165 L 490 210 Q 505 320 495 420 Q 490 450 450 455 L 400 440 L 400 200 Z" fill="${color}" />
    <path d="M 200 200 L 200 590 Q 200 620 240 624 L 360 624 Q 400 620 400 590 L 400 200 L 360 130 Q 332 154 300 154 Q 268 154 240 130 Z" fill="${color}" />
    <path d="M 200 200 L 200 590 L 270 590 L 270 200 Z" fill="${s.soft}" />
    <path d="M 400 200 L 400 590 L 330 590 L 330 200 Z" fill="${s.soft}" />
    <path d="M 240 130 Q 268 154 300 154 Q 332 154 360 130 L 360 138 Q 330 162 300 162 Q 270 162 240 138 Z" fill="${s.deep}" />
    <line x1="200" y1="200" x2="200" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
    <line x1="400" y1="200" x2="400" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
  `;
};

const sweatshirtFront = (color: string): string => {
  const s = shadows(color);
  return `
    <ellipse cx="300" cy="630" rx="220" ry="14" fill="rgba(0,0,0,0.18)" />
    <path d="M 120 220 Q 90 340 100 460 Q 105 510 140 518 L 200 502 L 200 240 Z" fill="${color}" />
    <path d="M 480 220 Q 510 340 500 460 Q 495 510 460 518 L 400 502 L 400 240 Z" fill="${color}" />
    <path d="M 200 220 L 200 590 Q 200 620 240 624 L 360 624 Q 400 620 400 590 L 400 220 Q 350 244 300 244 Q 250 244 200 220 Z" fill="${color}" />
    <path d="M 200 220 L 200 590 Q 200 620 240 624 L 270 624 L 270 232 Z" fill="${s.soft}" />
    <path d="M 400 220 L 400 590 Q 400 620 360 624 L 330 624 L 330 232 Z" fill="${s.soft}" />
    <path d="M 234 162 Q 234 138 300 138 Q 366 138 366 162 L 380 218 Q 350 244 300 244 Q 250 244 220 218 Z" fill="${color}" />
    <path d="M 244 174 Q 244 156 300 156 Q 356 156 356 174 Q 356 200 300 204 Q 244 200 244 174 Z" fill="${s.deep}" />
    <path d="M 252 174 Q 252 162 300 162 Q 348 162 348 174 Q 348 192 300 194 Q 252 192 252 174 Z" fill="${shade(color, -35)}" />
    <line x1="200" y1="240" x2="200" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
    <line x1="400" y1="240" x2="400" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
    <path d="M 100 460 Q 105 510 140 518 L 200 502 L 200 490 Q 152 502 120 488 Q 110 460 116 380 Z" fill="${s.mid}" />
    <path d="M 500 460 Q 495 510 460 518 L 400 502 L 400 490 Q 448 502 480 488 Q 490 460 484 380 Z" fill="${s.mid}" />
    <path d="M 200 590 Q 200 620 240 624 L 360 624 Q 400 620 400 590 L 400 604 Q 400 634 360 638 L 240 638 Q 200 634 200 604 Z" fill="${s.mid}" />
  `;
};

const sweatshirtBack = (color: string): string => {
  const s = shadows(color);
  return `
    <ellipse cx="300" cy="630" rx="220" ry="14" fill="rgba(0,0,0,0.18)" />
    <path d="M 120 220 Q 90 340 100 460 Q 105 510 140 518 L 200 502 L 200 240 Z" fill="${color}" />
    <path d="M 480 220 Q 510 340 500 460 Q 495 510 460 518 L 400 502 L 400 240 Z" fill="${color}" />
    <path d="M 200 220 L 200 590 Q 200 620 240 624 L 360 624 Q 400 620 400 590 L 400 220 Z" fill="${color}" />
    <path d="M 200 220 L 200 590 L 270 590 L 270 232 Z" fill="${s.soft}" />
    <path d="M 400 220 L 400 590 L 330 590 L 330 232 Z" fill="${s.soft}" />
    <path d="M 240 156 Q 240 138 300 138 Q 360 138 360 156 L 372 200 Q 340 212 300 212 Q 260 212 228 200 Z" fill="${color}" />
    <path d="M 228 200 Q 260 212 300 212 Q 340 212 372 200 L 380 222 Q 340 232 300 232 Q 260 232 220 222 Z" fill="${s.mid}" />
    <line x1="200" y1="240" x2="200" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
    <line x1="400" y1="240" x2="400" y2="590" stroke="${s.stitch}" stroke-width="0.8" />
  `;
};

const toteFront = (color: string): string => {
  const s = shadows(color);
  return `
    <ellipse cx="300" cy="640" rx="180" ry="10" fill="rgba(0,0,0,0.16)" />
    <path d="M 220 80 Q 220 50 240 50 Q 260 50 260 80 L 260 160" fill="none" stroke="${shade(color, -30)}" stroke-width="14" stroke-linecap="round" />
    <path d="M 340 80 Q 340 50 360 50 Q 380 50 380 80 L 380 160" fill="none" stroke="${shade(color, -30)}" stroke-width="14" stroke-linecap="round" />
    <path d="M 220 80 Q 220 56 240 56 Q 260 56 260 80" fill="none" stroke="${s.highlight}" stroke-width="2" />
    <path d="M 340 80 Q 340 56 360 56 Q 380 56 380 80" fill="none" stroke="${s.highlight}" stroke-width="2" />
    <path d="M 150 160 L 450 160 L 470 620 L 130 620 Z" fill="${color}" />
    <path d="M 150 160 L 175 620 L 130 620 Z" fill="${s.soft}" />
    <path d="M 450 160 L 425 620 L 470 620 Z" fill="${s.soft}" />
    <path d="M 150 160 L 450 160 L 450 178 L 150 178 Z" fill="${s.mid}" />
    <line x1="150" y1="160" x2="450" y2="160" stroke="${s.stitch}" stroke-width="1" stroke-dasharray="4 3" />
    <line x1="150" y1="170" x2="450" y2="170" stroke="${s.stitch}" stroke-width="0.6" stroke-dasharray="3 3" />
    <line x1="130" y1="620" x2="470" y2="620" stroke="${s.stitch}" stroke-width="1" stroke-dasharray="4 3" />
    <line x1="252" y1="160" x2="248" y2="100" stroke="${s.stitch}" stroke-width="0.6" stroke-dasharray="3 3" />
    <line x1="348" y1="160" x2="352" y2="100" stroke="${s.stitch}" stroke-width="0.6" stroke-dasharray="3 3" />
    <path d="M 130 620 L 470 620 L 460 632 L 140 632 Z" fill="${s.mid}" />
  `;
};

export const renderMockupSvg = (
  productId: ProductId,
  view: ProductView,
  colorHex: string,
): string => {
  let body = '';
  switch (productId) {
    case 'hoodie':
      body = view === 'back' ? hoodieBack(colorHex) : hoodieFront(colorHex);
      break;
    case 'tee':
      body = view === 'back' ? teeBack(colorHex) : teeFront(colorHex);
      break;
    case 'sweatshirt':
      body = view === 'back' ? sweatshirtBack(colorHex) : sweatshirtFront(colorHex);
      break;
    case 'tote':
      body = toteFront(colorHex);
      break;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS} ${CANVAS}" width="${CANVAS}" height="${CANVAS}">${body}</svg>`;
};

export const svgToDataUrl = (svg: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const MOCKUP_CANVAS = CANVAS;
