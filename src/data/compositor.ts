import { ProductId, ProductView } from './products';
import { renderMockupSvg, svgToDataUrl, MOCKUP_CANVAS } from './mockups';

export type DesignLayer =
  | {
      type: 'image';
      id: string;
      src: string;
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
      opacity: number;
    }
  | {
      type: 'text';
      id: string;
      text: string;
      x: number;
      y: number;
      fontSize: number;
      fontFamily: string;
      fontWeight: number;
      fill: string;
      rotation: number;
      opacity: number;
      letterSpacing: number;
    };

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src.slice(0, 80)}`));
    img.src = src;
  });

export const compositeMockup = async (
  productId: ProductId,
  view: ProductView,
  colorHex: string,
  printArea: { x: number; y: number; width: number; height: number },
  layers: DesignLayer[],
  size = MOCKUP_CANVAS,
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('No 2d context');

  const scale = size / MOCKUP_CANVAS;

  const mockupSvg = renderMockupSvg(productId, view, colorHex);
  try {
    const mockup = await loadImage(svgToDataUrl(mockupSvg));
    ctx.drawImage(mockup, 0, 0, size, size);
  } catch {
    ctx.fillStyle = colorHex;
    ctx.fillRect(0, 0, size, size);
  }

  if (layers.length > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(
      printArea.x * scale,
      printArea.y * scale,
      printArea.width * scale,
      printArea.height * scale,
    );
    ctx.clip();

    for (const layer of layers) {
      ctx.save();
      ctx.globalAlpha = layer.opacity;
      ctx.translate(layer.x * scale, layer.y * scale);
      ctx.rotate((layer.rotation * Math.PI) / 180);
      if (layer.type === 'image') {
        try {
          const img = await loadImage(layer.src);
          ctx.drawImage(
            img,
            (-layer.width / 2) * scale,
            (-layer.height / 2) * scale,
            layer.width * scale,
            layer.height * scale,
          );
        } catch {
          /* skip broken */
        }
      } else {
        ctx.fillStyle = layer.fill;
        ctx.font = `${layer.fontWeight} ${layer.fontSize * scale}px ${layer.fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(layer.text, 0, 0);
      }
      ctx.restore();
    }
    ctx.restore();
  }

  return canvas.toDataURL('image/png');
};
