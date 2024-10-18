import React, { createContext, useState, useContext, ReactNode } from 'react';

type HeaderStyle = 'none' | 'hide' | 'show';

interface HeaderStyleContextType {
  headerStyle: HeaderStyle;
  setHeaderStyle: (style: HeaderStyle) => void;
}

const HeaderStyleContext = createContext<HeaderStyleContextType | undefined>(undefined);

export const HeaderStyleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>('show');

  return (
    <HeaderStyleContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderStyleContext.Provider>
  );
};

export const useHeaderStyle = () => {
  const context = useContext(HeaderStyleContext);
  if (context === undefined) {
    throw new Error('useHeaderStyle must be used within a HeaderStyleProvider');
  }
  return context;
};