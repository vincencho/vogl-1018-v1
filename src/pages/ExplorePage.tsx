import React, { useState } from 'react';
import TrendSeedChannels from '../components/TrendSeedChannels';
import TrendSeedContent from '../components/TrendSeedContent';
import { Search } from 'lucide-react';

const ExplorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 검색 로직을 구현합니다.
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Trend Seeds</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for trends, brands, or styles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <TrendSeedChannels />
        </div>
        <div className="md:col-span-2">
          <TrendSeedContent />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;