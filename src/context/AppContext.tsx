import React, { createContext, useState, ReactNode, useContext, useCallback, useEffect } from 'react';

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  style: string;
  createdAt: number;
}

interface AppContextType {
  gallery: GeneratedImage[];
  addToGallery: (img: GeneratedImage | GeneratedImage[]) => void;
  removeFromGallery: (id: string) => void;
  clearGallery: () => void;
  lastOrder: { id: string; total: number; itemCount: number } | null;
  setLastOrder: (o: { id: string; total: number; itemCount: number } | null) => void;
}

const GALLERY_KEY = 'pod-gallery-v1';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gallery, setGallery] = useState<GeneratedImage[]>(() => {
    try {
      const raw = localStorage.getItem(GALLERY_KEY);
      return raw ? (JSON.parse(raw) as GeneratedImage[]) : [];
    } catch {
      return [];
    }
  });

  const [lastOrder, setLastOrder] = useState<AppContextType['lastOrder']>(null);

  useEffect(() => {
    try {
      const trimmed = gallery.slice(-40);
      localStorage.setItem(GALLERY_KEY, JSON.stringify(trimmed));
    } catch {
      /* noop */
    }
  }, [gallery]);

  const addToGallery = useCallback((img: GeneratedImage | GeneratedImage[]) => {
    setGallery(prev => [...prev, ...(Array.isArray(img) ? img : [img])]);
  }, []);

  const removeFromGallery = useCallback((id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  }, []);

  const clearGallery = useCallback(() => setGallery([]), []);

  return (
    <AppContext.Provider value={{ gallery, addToGallery, removeFromGallery, clearGallery, lastOrder, setLastOrder }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
