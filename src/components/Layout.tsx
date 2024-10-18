import React from 'react';
import { useLayout } from '../contexts/LayoutContext';
import { useMainPadding } from '../contexts/MainPaddingContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { viewportSize, footerStyle } = useLayout();
  const { mainPadding } = useMainPadding();

  const getPaddingClass = () => {
    switch (mainPadding) {
      case 'mobile':
        return 'pt-20'; // Increase top padding for mobile
      case 'tablet':
        return 'pt-24'; // Increase top padding for tablet
      case 'desktop':
        return 'pt-20';
      case 'image-detail-pc':
        return 'pt-0';
      case 'no-padding':
        return 'pt-0';
      default:
        return 'pt-16';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${getPaddingClass()}`}>
        {children}
      </main>
      {footerStyle !== 'none' && <Footer style={footerStyle} />}
    </div>
  );
};

export default Layout;