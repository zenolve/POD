import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  selectedImage: string | null;
  setSelectedImage: (url: string | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </AppContext.Provider>
  );
};
