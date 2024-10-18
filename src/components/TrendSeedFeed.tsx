import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import SaveModal from './SaveModal';
import SaveNotification from './SaveNotification';
import { Link } from 'react-router-dom';
import SuggestedUsers from './SuggestedUsers';
import { useLayout } from '../contexts/LayoutContext';

interface TrendSeed {
  id: number;
  type: 'image' | 'video';
  content: string;
  source: string;
  likes: number;
  comments: number;
  saved: boolean;
}

const TrendSeedFeed: React.FC = () => {
  const [seeds, setSeeds] = useState<TrendSeed[]>([
    { id: 1, type: 'image', content: 'https://i.pinimg.com/564x/f0/f6/88/f0f68858fca3187ede74eac299d9f5f0.jpg', source: 'Instagram User', likes: 120, comments: 15, saved: false },
    { id: 2, type: 'image', content: 'https://i.pinimg.com/564x/40/1b/8b/401b8b540588fa8eb613b1d3b0432651.jpg', source: 'Fashion Blog', likes: 89, comments: 7, saved: false },
    { id: 3, type: 'image', content: 'https://i.pinimg.com/474x/10/85/fb/1085fbc7a071d3856794fd24e739fafb.jpg', source: 'Pinterest User', likes: 230, comments: 32, saved: false },
    { id: 4, type: 'image', content: 'https://i.pinimg.com/474x/97/94/0d/97940d3488cd063b20e2a457d59674d2.jpg', source: 'Fashion Magazine', likes: 180, comments: 25, saved: false },
    { id: 5, type: 'image', content: 'https://i.pinimg.com/474x/98/91/09/989109d6a833f02720f7a990fd15cd80.jpg', source: 'Style Blogger', likes: 150, comments: 20, saved: false },
    { id: 6, type: 'image', content: 'https://i.pinimg.com/474x/88/3a/bc/883abc6d6f5cf1df4be9990355a9be00.jpg', source: 'Fashion Designer', likes: 200, comments: 30, saved: false },
  ]);

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [selectedSeedId, setSelectedSeedId] = useState<number | null>(null);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [savedBoardName, setSavedBoardName] = useState('');

  const { setHeaderStyle } = useLayout();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { // Mobile view
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
      setHeaderStyle('show'); // Reset header style when component unmounts
    };
  }, [setHeaderStyle]);

  const handleLike = (id: number) => {
    setSeeds(seeds.map(seed => 
      seed.id === id ? { ...seed, likes: seed.likes + 1 } : seed
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {seeds.map((seed) => (
          <div key={seed.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/content/${seed.id}`}>
              <img src={seed.content} alt={`Trend Seed ${seed.id}`} className="w-full h-64 object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{seed.source}</h3>
              <div className="flex justify-between items-center">
                <button onClick={() => handleLike(seed.id)} className="flex items-center text-gray-600 hover:text-red-500">
                  <Heart size={20} className={seed.saved ? 'fill-current text-red-500' : ''} />
                  <span className="ml-1">{seed.likes}</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                  <MessageCircle size={20} />
                  <span className="ml-1">{seed.comments}</span>
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
