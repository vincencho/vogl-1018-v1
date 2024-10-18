import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

type MainPadding =
  | 'default'
  | 'no-padding'
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'image-detail-pc';

interface MainPaddingContextType {
  mainPadding: MainPadding;
  setMainPadding: (padding: MainPadding) => void;
}

const MainPaddingContext = createContext<MainPaddingContextType | undefined>(
  undefined
);

export const MainPaddingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mainPadding, setMainPadding] = useState<MainPadding>('default');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMainPadding('mobile');
      } else if (width >= 768 && width < 1024) {
        setMainPadding('tablet');
      } else {
        setMainPadding('desktop');
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainPaddingContext.Provider value={{ mainPadding, setMainPadding }}>
      {children}
    </MainPaddingContext.Provider>
  );
};

export const useMainPadding = () => {
  const context = useContext(MainPaddingContext);
  if (context === undefined) {
    throw new Error('useMainPadding must be used within a MainPaddingProvider');
  }
  return context;
};