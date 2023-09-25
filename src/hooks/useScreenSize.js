import { useState, useLayoutEffect } from 'react';

const useScreenSize = () => {
  const getScreenSize = () => {
    if (
      typeof window !== 'undefined' &&
      window.innerWidth &&
      window.innerHeight
    ) {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: null, height: null };
  };
  const [screen, setScreen] = useState(getScreenSize());

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screen;
};

export default useScreenSize;
