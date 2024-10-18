import React from 'react';
import TrendSeedFeed from '../components/TrendSeedFeed';
import { useMainPadding } from '../contexts/MainPaddingContext';

const HomePage: React.FC = () => {
  const { mainPadding } = useMainPadding();

  const getTitleClass = () => {
    switch (mainPadding) {
      case 'mobile':
      case 'tablet':
        return 'text-2xl';
      default:
        return 'text-3xl';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`${getTitleClass()} font-bold mb-6`}>Fashion Trend Feed</h1>
      <TrendSeedFeed />
    </div>
  );
};

export default HomePage;