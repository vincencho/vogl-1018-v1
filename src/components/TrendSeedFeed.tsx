import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Bookmark, RefreshCw } from 'lucide-react';
import SaveModal from './SaveModal';
import SaveNotification from './SaveNotification';
import { Link } from 'react-router-dom';
import SuggestedUsers from './SuggestedUsers';
import { useLayout } from '../contexts/LayoutContext';
import { fetchTrendSeeds, TrendSeed } from '../api/trendSeedApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const TrendSeedFeed: React.FC = () => {
  const [seeds, setSeeds] = useState<TrendSeed[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [selectedSeedId, setSelectedSeedId] = useState<number | null>(null);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [savedBoardName, setSavedBoardName] = useState('');

  const { setHeaderStyle } = useLayout();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        if (window.scrollY > 50) {
          setHeaderStyle('hide');
        } else {
          setHeaderStyle('show');
        }
      } else {
        setHeaderStyle('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setHeaderStyle('show');
    };
  }, [setHeaderStyle]);

  const loadTrendSeeds = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTrendSeeds();
      setSeeds(data);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendSeeds();
  }, []);

  const handleLike = (id: number) => {
    setSeeds(seeds.map(seed => 
      seed.id === id ? { ...seed, likeCount: seed.likeCount + 1 } : seed
    ));
  };

  const handleSave = (id: number) => {
    setSelectedSeedId(id);
    setIsSaveModalOpen(true);
  };

  const handleSaveToBoard = (boardName: string) => {
    setSeeds(seeds.map(seed => 
      seed.id === selectedSeedId ? { ...seed, saved: true } : seed
    ));
    setIsSaveModalOpen(false);
    setSavedBoardName(boardName);
    setShowSaveNotification(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SuggestedUsers />
      {loading && <LoadingSpinner />}
      {error && (
        <div className="mb-4">
          <ErrorMessage message={error} />
          <button
            onClick={loadTrendSeeds}
            className="mt-2 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RefreshCw size={16} className="mr-2" />
            Retry
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {seeds.map((seed) => (
          <div key={seed.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/content/${seed.id}`}>
              <img src={seed.imageUrl} alt={`Trend Seed ${seed.id}`} className="w-full h-64 object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{seed.name}</h3>
              <div className="flex justify-between items-center">
                <button onClick={() => handleLike(seed.id)} className="flex items-center text-gray-600 hover:text-red-500">
                  <Heart size={20} className={seed.saved ? 'fill-current text-red-500' : ''} />
                  <span className="ml-1">{seed.likeCount}</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                  <MessageCircle size={20} />
                  <span className="ml-1">{seed.commentCount}</span>
                </button>
                <button onClick={() => handleSave(seed.id)} className={`flex items-center ${seed.saved ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'}`}>
                  <Bookmark size={20} className={seed.saved ? 'fill-current' : ''} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSaveToBoard}
      />
      <SaveNotification
        isVisible={showSaveNotification}
        boardName={savedBoardName}
        onClose={() => setShowSaveNotification(false)}
      />
    </div>
  );
};

export default TrendSeedFeed;