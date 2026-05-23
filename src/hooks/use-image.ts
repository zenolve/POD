import { useState, useEffect } from 'react';

const useImage = (url: string): [HTMLImageElement | null, 'loading' | 'loaded' | 'error'] => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    if (!url) {
      setImage(null);
      setStatus('loading');
      return;
    }

    setStatus('loading');
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    const handleLoad = () => {
      setImage(img);
      setStatus('loaded');
    };

    const handleError = () => {
      setImage(null);
      setStatus('error');
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    img.src = url;

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [url]);

  return [image, status];
};

export default useImage;
