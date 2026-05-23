import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer, Rect, Text as KonvaText, Group } from 'react-konva';
import Konva from 'konva';
import useImage from '../../hooks/use-image';
import {
  ProductSize,
  ProductView,
  getProduct,
  getColor,
  calcUnitPrice,
} from '../../data/products';
import { renderMockupSvg, svgToDataUrl, MOCKUP_CANVAS } from '../../data/mockups';
import { compositeMockup, DesignLayer } from '../../data/compositor';
import { useCart } from '../../context/CartContext';
import AIPanel from './AIPanel';

interface CustomizerProps {
  productId: string;
  navigate: (path: string) => void;
}

type ImageLayerType = Extract<DesignLayer, { type: 'image' }>;
type TextLayerType = Extract<DesignLayer, { type: 'text' }>;

type LayersByView = Record<ProductView, DesignLayer[]>;

const CANVAS = MOCKUP_CANVAS;
const STAGE_BG = '#f5f5f4';

const FONT_FAMILIES = [
  'Inter, Helvetica, Arial, sans-serif',
  'Georgia, "Times New Roman", serif',
  'Impact, Haettenschweiler, sans-serif-condensed, sans-serif',
  '"Courier New", Courier, monospace',
  '"Comic Sans MS", "Marker Felt", cursive',
];

const FONT_LABELS = ['Sans', 'Serif', 'Impact', 'Mono', 'Marker'];

const newId = (prefix: string) => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

const KonvaImageLayer: React.FC<{
  layer: ImageLayerType;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (updates: Partial<ImageLayerType>) => void;
  registerRef: (id: string, node: Konva.Node | null) => void;
}> = ({ layer, isSelected, onSelect, onChange, registerRef }) => {
  const [image] = useImage(layer.src);
  const ref = useRef<Konva.Image>(null);

  useEffect(() => {
    registerRef(layer.id, ref.current);
    return () => registerRef(layer.id, null);
  }, [layer.id, image, registerRef]);

  if (!image) return null;

  return (
    <KonvaImage
      ref={ref}
      image={image}
      x={layer.x}
      y={layer.y}
      width={layer.width}
      height={layer.height}
      offsetX={layer.width / 2}
      offsetY={layer.height / 2}
      rotation={layer.rotation}
      opacity={layer.opacity}
      draggable
      onMouseDown={onSelect}
      onTouchStart={onSelect}
      onDragEnd={e => onChange({ x: e.target.x(), y: e.target.y() })}
      onTransformEnd={() => {
        const node = ref.current;
        if (!node) return;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
        onChange({
          x: node.x(),
          y: node.y(),
          width: Math.max(20, node.width() * scaleX),
          height: Math.max(20, node.height() * scaleY),
          rotation: node.rotation(),
        });
        node.scaleX(1);
        node.scaleY(1);
      }}
    />
  );
};

const KonvaTextLayer: React.FC<{
  layer: TextLayerType;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (updates: Partial<TextLayerType>) => void;
  registerRef: (id: string, node: Konva.Node | null) => void;
}> = ({ layer, onSelect, onChange, registerRef }) => {
  const ref = useRef<Konva.Text>(null);

  useEffect(() => {
    registerRef(layer.id, ref.current);
    return () => registerRef(layer.id, null);
  }, [layer.id, registerRef]);

  return (
    <KonvaText
      ref={ref}
      text={layer.text}
      x={layer.x}
      y={layer.y}
      fontSize={layer.fontSize}
      fontFamily={layer.fontFamily}
      fontStyle={layer.fontWeight >= 700 ? 'bold' : 'normal'}
      fill={layer.fill}
      align="center"
      letterSpacing={layer.letterSpacing}
      rotation={layer.rotation}
      opacity={layer.opacity}
      draggable
      offsetX={0}
      offsetY={0}
      onMouseDown={onSelect}
      onTouchStart={onSelect}
      onDragEnd={e => onChange({ x: e.target.x(), y: e.target.y() })}
      onTransformEnd={() => {
        const node = ref.current;
        if (!node) return;
        const scaleX = node.scaleX();
        onChange({
          x: node.x(),
          y: node.y(),
          fontSize: Math.max(8, layer.fontSize * scaleX),
          rotation: node.rotation(),
        });
        node.scaleX(1);
        node.scaleY(1);
      }}
    />
  );
};

const Customizer: React.FC<CustomizerProps> = ({ productId, navigate }) => {
  const product = useMemo(() => getProduct(productId), [productId]);
  const { addItem } = useCart();

  const [colorId, setColorId] = useState<string>(product?.defaultColor ?? 'black');
  const [size, setSize] = useState<ProductSize>('M');
  const [view, setView] = useState<ProductView>('front');
  const [layersByView, setLayersByView] = useState<LayersByView>({ front: [], back: [] });
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [stageScale, setStageScale] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const nodeRefs = useRef<Record<string, Konva.Node | null>>({});
  const stageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!product) return;
    setColorId(product.defaultColor);
  }, [product]);

  useEffect(() => {
    const measure = () => {
      const el = stageContainerRef.current;
      if (!el) return;
      const w = el.clientWidth;
      setStageScale(Math.min(1, w / CANVAS));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const color = product ? getColor(product, colorId) : null;

  const mockupSvgUrl = useMemo(() => {
    if (!product || !color) return '';
    return svgToDataUrl(renderMockupSvg(product.id, view, color.hex));
  }, [product, color, view]);

  const [mockupImage] = useImage(mockupSvgUrl);

  const layers = layersByView[view];

  const registerRef = useCallback((id: string, node: Konva.Node | null) => {
    nodeRefs.current[id] = node;
  }, []);

  useEffect(() => {
    if (!transformerRef.current) return;
    const tr = transformerRef.current;
    if (selectedLayerId && nodeRefs.current[selectedLayerId]) {
      tr.nodes([nodeRefs.current[selectedLayerId]!]);
    } else {
      tr.nodes([]);
    }
    tr.getLayer()?.batchDraw();
  }, [selectedLayerId, layers]);

  useEffect(() => {
    setSelectedLayerId(null);
  }, [view]);

  const updateLayer = useCallback(
    (id: string, updates: Partial<DesignLayer>) => {
      setLayersByView(prev => ({
        ...prev,
        [view]: prev[view].map(l => (l.id === id ? ({ ...l, ...updates } as DesignLayer) : l)),
      }));
    },
    [view],
  );

  const deleteLayer = useCallback(
    (id: string) => {
      setLayersByView(prev => ({
        ...prev,
        [view]: prev[view].filter(l => l.id !== id),
      }));
      setSelectedLayerId(s => (s === id ? null : s));
      delete nodeRefs.current[id];
    },
    [view],
  );

  const duplicateLayer = useCallback(
    (id: string) => {
      setLayersByView(prev => {
        const layer = prev[view].find(l => l.id === id);
        if (!layer) return prev;
        const cloned: DesignLayer = { ...layer, id: newId(layer.type), x: layer.x + 20, y: layer.y + 20 };
        return { ...prev, [view]: [...prev[view], cloned] };
      });
    },
    [view],
  );

  const moveLayer = useCallback(
    (id: string, dir: 'up' | 'down') => {
      setLayersByView(prev => {
        const arr = [...prev[view]];
        const idx = arr.findIndex(l => l.id === id);
        if (idx < 0) return prev;
        const next = dir === 'up' ? idx + 1 : idx - 1;
        if (next < 0 || next >= arr.length) return prev;
        [arr[idx], arr[next]] = [arr[next], arr[idx]];
        return { ...prev, [view]: arr };
      });
    },
    [view],
  );

  const addImageLayer = useCallback(
    (src: string) => {
      if (!product) return;
      const { x, y, width, height } = product.printArea;
      const layer: ImageLayerType = {
        type: 'image',
        id: newId('img'),
        src,
        x: x + width / 2,
        y: y + height / 2,
        width: Math.min(width, 200),
        height: Math.min(height, 200),
        rotation: 0,
        opacity: 1,
      };
      setLayersByView(prev => ({ ...prev, [view]: [...prev[view], layer] }));
      setSelectedLayerId(layer.id);
    },
    [product, view],
  );

  const addTextLayer = useCallback(() => {
    if (!product) return;
    const { x, y, width, height } = product.printArea;
    const layer: TextLayerType = {
      type: 'text',
      id: newId('txt'),
      text: 'YOUR TEXT',
      x: x + width / 2,
      y: y + height / 2,
      fontSize: 36,
      fontFamily: FONT_FAMILIES[0],
      fontWeight: 700,
      fill: color?.textHex ?? '#ffffff',
      rotation: 0,
      opacity: 1,
      letterSpacing: 1,
    };
    setLayersByView(prev => ({ ...prev, [view]: [...prev[view], layer] }));
    setSelectedLayerId(layer.id);
  }, [product, view, color]);

  const centerLayer = useCallback(
    (id: string, axis: 'h' | 'v' | 'both') => {
      if (!product) return;
      const { x, y, width, height } = product.printArea;
      const cx = x + width / 2;
      const cy = y + height / 2;
      const updates: Partial<DesignLayer> = {};
      if (axis === 'h' || axis === 'both') (updates as any).x = cx;
      if (axis === 'v' || axis === 'both') (updates as any).y = cy;
      updateLayer(id, updates);
    },
    [product, updateLayer],
  );

  const hasAnyDesign = layersByView.front.length > 0 || layersByView.back.length > 0;
  const bothSides = layersByView.front.length > 0 && layersByView.back.length > 0;
  const unitPrice = product ? calcUnitPrice(product, size, bothSides) : 0;

  const handleAddToCart = async () => {
    if (!product || !color || !hasAnyDesign || addingToCart) return;
    setAddingToCart(true);
    setSelectedLayerId(null);
    try {
      const previewFront = layersByView.front.length > 0
        ? await compositeMockup(product.id, 'front', color.hex, product.printArea, layersByView.front, 400)
        : undefined;
      const previewBack = layersByView.back.length > 0
        ? await compositeMockup(product.id, 'back', color.hex, product.printArea, layersByView.back, 400)
        : undefined;

      const views: ProductView[] = [];
      if (layersByView.front.length > 0) views.push('front');
      if (layersByView.back.length > 0) views.push('back');

      addItem({
        productId: product.id,
        productName: product.name,
        colorId: color.id,
        colorHex: color.hex,
        colorName: color.name,
        size,
        views,
        quantity: 1,
        unitPrice,
        previewFront,
        previewBack,
      });

      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1800);
    } finally {
      setAddingToCart(false);
    }
  };

  const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    if (e.target === e.target.getStage() || e.target.name() === 'background') {
      setSelectedLayerId(null);
    }
  };

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-stone-500">
        <p>Product not found.</p>
        <button onClick={() => navigate('/')} className="mt-3 text-stone-900 underline">
          Back to shop
        </button>
      </div>
    );
  }

  const selectedLayer = layers.find(l => l.id === selectedLayerId) ?? null;
  const printArea = product.printArea;

  return (
    <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-6">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-stone-500">
        <button onClick={() => navigate('/')} className="hover:text-stone-900">Shop</button>
        <span>/</span>
        <span className="text-stone-900">{product.name}</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
        <aside className="rounded-2xl border border-stone-200 bg-white">
          <div className="border-b border-stone-200 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">Product</div>
            <div className="mt-1 text-base font-semibold text-stone-900">{product.name}</div>
            <div className="text-xs text-stone-500">{product.tagline}</div>
            <div className="mt-2 text-lg font-semibold text-stone-900">${product.basePrice}</div>
          </div>

          <div className="space-y-4 px-4 py-4">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-600">Color</div>
                <div className="text-xs text-stone-500">{color?.name}</div>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {product.colors.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setColorId(c.id)}
                    className={`h-7 w-7 rounded-full border transition ${
                      colorId === c.id
                        ? 'ring-2 ring-stone-900 ring-offset-1'
                        : 'border-stone-300 hover:border-stone-500'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-600">Size</div>
              <div className="grid grid-cols-3 gap-1.5">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-lg border py-2 text-xs font-semibold transition ${
                      size === s
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {product.views.length > 1 && (
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-600">View</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {product.views.map(v => {
                    const has = layersByView[v].length > 0;
                    return (
                      <button
                        key={v}
                        onClick={() => setView(v)}
                        className={`relative rounded-lg border py-2 text-xs font-semibold capitalize transition ${
                          view === v
                            ? 'border-stone-900 bg-stone-900 text-white'
                            : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {v}
                        {has && (
                          <span className={`absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full ${view === v ? 'bg-white' : 'bg-emerald-500'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-xs text-stone-600">
              <div className="font-semibold text-stone-900">About this fit</div>
              <ul className="mt-2 space-y-1">
                {product.features.map(f => (
                  <li key={f} className="flex gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <section className="flex flex-col gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-3 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-stone-100 px-2 py-0.5 font-medium text-stone-700 capitalize">
                  {view} view
                </span>
                <span className="text-stone-400">·</span>
                <span className="text-stone-500">Drag, scale and rotate inside the dashed area</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={addTextLayer}
                  className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
                >
                  + Text
                </button>
              </div>
            </div>

            <div
              ref={stageContainerRef}
              className="relative mx-auto w-full overflow-hidden rounded-xl"
              style={{ maxWidth: CANVAS, aspectRatio: '1 / 1', background: STAGE_BG }}
            >
              <Stage
                width={CANVAS * stageScale}
                height={CANVAS * stageScale}
                scaleX={stageScale}
                scaleY={stageScale}
                ref={stageRef}
                onMouseDown={handleStageClick}
                onTouchStart={handleStageClick}
              >
                <Layer listening={false}>
                  {mockupImage && (
                    <KonvaImage image={mockupImage} width={CANVAS} height={CANVAS} name="background" />
                  )}
                </Layer>

                <Layer
                  clipFunc={ctx => {
                    ctx.rect(printArea.x, printArea.y, printArea.width, printArea.height);
                  }}
                >
                  {layers.map(l =>
                    l.type === 'image' ? (
                      <KonvaImageLayer
                        key={l.id}
                        layer={l}
                        isSelected={selectedLayerId === l.id}
                        onSelect={() => setSelectedLayerId(l.id)}
                        onChange={updates => updateLayer(l.id, updates)}
                        registerRef={registerRef}
                      />
                    ) : (
                      <KonvaTextLayer
                        key={l.id}
                        layer={l}
                        isSelected={selectedLayerId === l.id}
                        onSelect={() => setSelectedLayerId(l.id)}
                        onChange={updates => updateLayer(l.id, updates)}
                        registerRef={registerRef}
                      />
                    ),
                  )}
                </Layer>

                <Layer listening={selectedLayerId !== null}>
                  <Group listening={false}>
                    <Rect
                      x={printArea.x}
                      y={printArea.y}
                      width={printArea.width}
                      height={printArea.height}
                      stroke="rgba(0,0,0,0.45)"
                      strokeWidth={1}
                      dash={[6, 4]}
                      listening={false}
                    />
                  </Group>
                  <Transformer
                    ref={transformerRef}
                    rotateEnabled
                    anchorSize={9}
                    anchorCornerRadius={9}
                    borderStroke="#0a0a0a"
                    anchorStroke="#0a0a0a"
                    anchorFill="#ffffff"
                    boundBoxFunc={(oldBox, newBox) => {
                      if (newBox.width < 20 || newBox.height < 20) return oldBox;
                      return newBox;
                    }}
                  />
                </Layer>
              </Stage>

              {layers.length === 0 && (
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
                  <div className="rounded-full bg-stone-900/80 px-4 py-1.5 text-xs font-medium text-white shadow">
                    Generate or upload artwork on the right →
                  </div>
                </div>
              )}
            </div>

            {selectedLayer && (
              <div className="mt-3 rounded-xl border border-stone-200 bg-stone-50 p-3">
                {selectedLayer.type === 'text' ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Text</label>
                      <input
                        value={selectedLayer.text}
                        onChange={e => updateLayer(selectedLayer.id, { text: e.target.value })}
                        className="w-full rounded-md border border-stone-200 bg-white px-2 py-1.5 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Font</label>
                      <div className="flex gap-1">
                        {FONT_FAMILIES.map((f, i) => (
                          <button
                            key={f}
                            onClick={() => updateLayer(selectedLayer.id, { fontFamily: f })}
                            className={`rounded-md border px-2 py-1 text-[11px] ${selectedLayer.fontFamily === f ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
                            style={{ fontFamily: f }}
                          >
                            {FONT_LABELS[i]}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Color</label>
                      <input
                        type="color"
                        value={selectedLayer.fill}
                        onChange={e => updateLayer(selectedLayer.id, { fill: e.target.value })}
                        className="h-8 w-full cursor-pointer rounded-md border border-stone-200 bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Size {Math.round(selectedLayer.fontSize)}</label>
                      <input
                        type="range"
                        min={10}
                        max={140}
                        value={selectedLayer.fontSize}
                        onChange={e => updateLayer(selectedLayer.id, { fontSize: Number(e.target.value) })}
                        className="w-full accent-stone-900"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Weight</label>
                      <div className="flex gap-1">
                        <button
                          onClick={() => updateLayer(selectedLayer.id, { fontWeight: 400 })}
                          className={`flex-1 rounded-md border py-1 text-[11px] ${selectedLayer.fontWeight === 400 ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
                        >
                          Regular
                        </button>
                        <button
                          onClick={() => updateLayer(selectedLayer.id, { fontWeight: 700 })}
                          className={`flex-1 rounded-md border py-1 text-[11px] ${selectedLayer.fontWeight === 700 ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
                        >
                          Bold
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Opacity {Math.round(selectedLayer.opacity * 100)}%</label>
                      <input
                        type="range"
                        min={10}
                        max={100}
                        value={selectedLayer.opacity * 100}
                        onChange={e => updateLayer(selectedLayer.id, { opacity: Number(e.target.value) / 100 })}
                        className="w-full accent-stone-900"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-stone-500">Rotation {Math.round(selectedLayer.rotation)}°</label>
                      <input
                        type="range"
                        min={-180}
                        max={180}
                        value={selectedLayer.rotation}
                        onChange={e => updateLayer(selectedLayer.id, { rotation: Number(e.target.value) })}
                        className="w-full accent-stone-900"
                      />
                    </div>
                  </div>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-1">
                  <button onClick={() => centerLayer(selectedLayer.id, 'h')} className="rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 hover:border-stone-900">Center H</button>
                  <button onClick={() => centerLayer(selectedLayer.id, 'v')} className="rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 hover:border-stone-900">Center V</button>
                  <button onClick={() => duplicateLayer(selectedLayer.id)} className="rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 hover:border-stone-900">Duplicate</button>
                  <button onClick={() => moveLayer(selectedLayer.id, 'down')} className="rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 hover:border-stone-900">↓</button>
                  <button onClick={() => moveLayer(selectedLayer.id, 'up')} className="rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 hover:border-stone-900">↑</button>
                  <div className="flex-1" />
                  <button onClick={() => deleteLayer(selectedLayer.id)} className="rounded-md border border-red-200 bg-white px-2 py-1 text-[11px] font-medium text-red-600 hover:border-red-500">Delete</button>
                </div>
              </div>
            )}

            {layers.length > 0 && (
              <div className="mt-3 rounded-xl border border-stone-200 bg-white">
                <div className="border-b border-stone-200 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                  Layers · {view}
                </div>
                <ul className="divide-y divide-stone-100">
                  {[...layers].reverse().map(l => (
                    <li key={l.id}>
                      <button
                        onClick={() => setSelectedLayerId(l.id)}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition ${selectedLayerId === l.id ? 'bg-stone-100' : 'hover:bg-stone-50'}`}
                      >
                        <div className="h-7 w-7 flex-shrink-0 overflow-hidden rounded border border-stone-200 bg-stone-50">
                          {l.type === 'image' ? (
                            <img src={l.src} alt="" className="h-full w-full object-cover" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-[10px] font-bold" style={{ color: l.fill }}>T</div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-medium text-stone-900">
                            {l.type === 'text' ? l.text || 'Text' : 'Image'}
                          </div>
                          <div className="text-[10px] text-stone-500">
                            {l.type === 'text' ? `${Math.round(l.fontSize)}px` : `${Math.round(l.width)}×${Math.round(l.height)}`}
                          </div>
                        </div>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            deleteLayer(l.id);
                          }}
                          className="text-stone-400 hover:text-red-500"
                          aria-label="Delete layer"
                        >
                          ×
                        </button>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-stone-500">Your build</div>
                <div className="mt-0.5 text-2xl font-semibold text-stone-900">${unitPrice.toFixed(2)}</div>
                <div className="text-xs text-stone-500">
                  Size {size} · {color?.name}
                  {bothSides && ' · front + back'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/cart')}
                  className="rounded-full border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
                >
                  View cart
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={!hasAnyDesign || addingToCart}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold text-white transition ${
                    justAdded ? 'bg-emerald-600' : 'bg-stone-900 hover:bg-stone-700'
                  } disabled:cursor-not-allowed disabled:bg-stone-300`}
                >
                  {addingToCart
                    ? 'Preparing…'
                    : justAdded
                      ? '✓ Added!'
                      : hasAnyDesign
                        ? 'Add to cart'
                        : 'Add a design'}
                </button>
              </div>
            </div>
            {!hasAnyDesign && (
              <p className="mt-2 text-xs text-stone-500">
                Generate or upload a design on the right, then drag it onto the print area.
              </p>
            )}
          </div>
        </section>

        <aside className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <div style={{ minHeight: 560 }} className="h-[calc(100vh-180px)] min-h-[560px]">
            <AIPanel onUseImage={addImageLayer} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Customizer;
