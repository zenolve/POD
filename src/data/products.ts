export type ProductId = 'hoodie' | 'tee' | 'sweatshirt' | 'tote';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL';

export type ProductView = 'front' | 'back';

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  textHex: string;
}

export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  basePrice: number;
  description: string;
  features: string[];
  colors: ColorOption[];
  sizes: ProductSize[];
  views: ProductView[];
  printArea: { x: number; y: number; width: number; height: number };
  defaultColor: string;
}

export const SIZE_UPCHARGE: Record<ProductSize, number> = {
  S: 0,
  M: 0,
  L: 0,
  XL: 0,
  '2XL': 2,
  '3XL': 4,
};

export const BOTH_SIDES_UPCHARGE = 5;

export const COLOR_PALETTE: ColorOption[] = [
  { id: 'black', name: 'Black', hex: '#1a1a1a', textHex: '#ffffff' },
  { id: 'charcoal', name: 'Charcoal', hex: '#3a3a3a', textHex: '#ffffff' },
  { id: 'navy', name: 'Navy', hex: '#1f2a44', textHex: '#ffffff' },
  { id: 'forest', name: 'Forest', hex: '#2f4a3a', textHex: '#ffffff' },
  { id: 'burgundy', name: 'Burgundy', hex: '#6b1f2a', textHex: '#ffffff' },
  { id: 'stone', name: 'Stone', hex: '#c9c2b6', textHex: '#1a1a1a' },
  { id: 'sand', name: 'Sand', hex: '#d9c6a4', textHex: '#1a1a1a' },
  { id: 'cream', name: 'Cream', hex: '#f1ebdc', textHex: '#1a1a1a' },
  { id: 'white', name: 'White', hex: '#f7f7f5', textHex: '#1a1a1a' },
  { id: 'sage', name: 'Sage', hex: '#a8baa1', textHex: '#1a1a1a' },
  { id: 'sky', name: 'Sky', hex: '#a8c3d6', textHex: '#1a1a1a' },
  { id: 'rust', name: 'Rust', hex: '#b56a3b', textHex: '#ffffff' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hoodie',
    name: 'Heavyweight Pullover Hoodie',
    tagline: '450 gsm fleece · brushed inside',
    basePrice: 54,
    description:
      'Premium 100% ringspun cotton fleece, double-lined hood with matching drawstrings, kangaroo pocket and ribbed cuffs. Cut for an unisex relaxed fit.',
    features: ['100% ringspun cotton', '450 gsm heavyweight fleece', 'Brushed soft inside', 'Unisex relaxed fit'],
    colors: COLOR_PALETTE,
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    views: ['front', 'back'],
    printArea: { x: 220, y: 250, width: 180, height: 220 },
    defaultColor: 'charcoal',
  },
  {
    id: 'tee',
    name: 'Essential Heavy Tee',
    tagline: '240 gsm · garment-washed',
    basePrice: 28,
    description:
      'A wardrobe staple: heavyweight 240 gsm cotton jersey, ribbed crew neck, reinforced shoulders. Pre-washed for a lived-in feel.',
    features: ['100% combed cotton', '240 gsm midweight', 'Garment washed', 'Boxy modern fit'],
    colors: COLOR_PALETTE,
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    views: ['front', 'back'],
    printArea: { x: 220, y: 200, width: 180, height: 230 },
    defaultColor: 'white',
  },
  {
    id: 'sweatshirt',
    name: 'Classic Crewneck Sweatshirt',
    tagline: '380 gsm · loopback terry',
    basePrice: 46,
    description:
      'Loopback terry crewneck with a relaxed drop-shoulder. Ribbed neck, cuffs and hem hold their shape wash after wash.',
    features: ['80% cotton / 20% poly', '380 gsm loopback terry', 'Drop shoulder fit', 'Ribbed cuffs & hem'],
    colors: COLOR_PALETTE,
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    views: ['front', 'back'],
    printArea: { x: 220, y: 220, width: 180, height: 220 },
    defaultColor: 'cream',
  },
  {
    id: 'tote',
    name: 'Heavy Canvas Tote',
    tagline: '14oz natural canvas',
    basePrice: 22,
    description:
      'Built-to-last 14oz natural cotton canvas tote with reinforced webbing handles and a roomy 18L capacity.',
    features: ['14oz heavy canvas', 'Reinforced webbing handles', '18L capacity', 'Boxed bottom'],
    colors: COLOR_PALETTE.filter(c => ['cream', 'sand', 'stone', 'black', 'navy', 'forest'].includes(c.id)),
    sizes: ['M'],
    views: ['front'],
    printArea: { x: 200, y: 220, width: 200, height: 240 },
    defaultColor: 'cream',
  },
];

export const getProduct = (id: string): Product | undefined =>
  PRODUCTS.find(p => p.id === id);

export const getColor = (product: Product, colorId: string): ColorOption =>
  product.colors.find(c => c.id === colorId) ?? product.colors[0];

export const calcUnitPrice = (
  product: Product,
  size: ProductSize,
  bothSides: boolean,
): number => {
  return product.basePrice + SIZE_UPCHARGE[size] + (bothSides ? BOTH_SIDES_UPCHARGE : 0);
};
