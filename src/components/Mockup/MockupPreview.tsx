import React, { useMemo } from 'react';
import { ProductId, ProductView } from '../../data/products';
import { renderMockupSvg, svgToDataUrl, MOCKUP_CANVAS } from '../../data/mockups';

interface MockupPreviewProps {
  productId: ProductId;
  view?: ProductView;
  colorHex: string;
  designUrl?: string | null;
  printArea: { x: number; y: number; width: number; height: number };
  className?: string;
  rounded?: boolean;
}

const MockupPreview: React.FC<MockupPreviewProps> = ({
  productId,
  view = 'front',
  colorHex,
  designUrl,
  printArea,
  className,
  rounded,
}) => {
  const bg = useMemo(
    () => svgToDataUrl(renderMockupSvg(productId, view, colorHex)),
    [productId, view, colorHex],
  );

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden ${rounded ? 'rounded-2xl' : ''} ${className ?? ''}`}
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {designUrl && (
        <img
          src={designUrl}
          alt=""
          className="pointer-events-none absolute object-contain"
          style={{
            left: `${(printArea.x / MOCKUP_CANVAS) * 100}%`,
            top: `${(printArea.y / MOCKUP_CANVAS) * 100}%`,
            width: `${(printArea.width / MOCKUP_CANVAS) * 100}%`,
            height: `${(printArea.height / MOCKUP_CANVAS) * 100}%`,
            mixBlendMode: 'multiply',
          }}
        />
      )}
    </div>
  );
};

export default MockupPreview;
