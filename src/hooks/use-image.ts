import { useState, useEffect } from 'react';

const useImage = (url: string) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Handle CORS for images from other domains
    img.src = url;

    const handleLoad = () => {
      setImage(img);
    };

    const handleError = () => {
      setError(`Failed to load image from ${url}`);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [url]);

  return [image, error];
};

export default useImage;
