import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

type ViewportSize = 'mobile' | 'tablet' | 'desktop';
type HeaderStyle = 'none' | 'floating' | 'fixed' | 'hide' | 'show';
type FooterStyle = 'none' | 'fixed';

interface LayoutContextType {
  viewportSize: ViewportSize;
  headerStyle: HeaderStyle;
  footerStyle: FooterStyle;
  setHeaderStyle: (style: HeaderStyle) => void;
  setFooterStyle: (style: FooterStyle) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>('mobile');
  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>('fixed');
  const [footerStyle, setFooterStyle] = useState<FooterStyle>('fixed');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportSize('mobile');
      } else if (width < 1024) {
        setViewportSize('tablet');
      } else {
        setViewportSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportSize === 'desktop') {
      setHeaderStyle('fixed');
      setFooterStyle('none');
    } else {
      setHeaderStyle('show');
      setFooterStyle('fixed');
    }
  }, [viewportSize]);

  return (
    <LayoutContext.Provider
      value={{
        viewportSize,
        headerStyle,
        footerStyle,
        setHeaderStyle,
        setFooterStyle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
