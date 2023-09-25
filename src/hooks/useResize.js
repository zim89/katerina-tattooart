import { useState, useEffect } from 'react';

const SCREEN_SM = 375;
const SCREEN_MD = 767;
const SCREEN_XL = 1279;

const useResize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width <= SCREEN_MD,
    isScreenTablet: width > SCREEN_MD,
    isScreenDesktop: width > SCREEN_XL,
  };
};

export default useResize;
