'use client';
import { createContext, useContext, useMemo, useState } from 'react';

const FeaturesContext = createContext('tab1');

export const useFeaturesContext = () => useContext(FeaturesContext);

export const FeaturesContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState('tab1');

  const contextValue = useMemo(
    () => ({
      currentIndex,
      setCurrentIndex,
    }),
    [currentIndex]
  );

  return (
    <FeaturesContext.Provider value={contextValue}>
      {children}
    </FeaturesContext.Provider>
  );
};
