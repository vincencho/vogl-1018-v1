import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

interface TrendSeed {
  id: number;
  type: 'image' | 'video';
  content: string;
  source: string;
  likes: number;
  comments: number;
  description: string;
  saved: boolean;
}

const TrendSeedContent: React.FC = () => {
  const [seeds, setSeeds] = useState<TrendSeed[]>([
    { 
      id: 1, 
      type: 'image', 
      content: 'https://source.unsplash.com/random/800x600?handbag', 
      source: 'Gucci', 
      likes: 543, 
      comments: 32,
      description: 'New season handbag featuring sustainable materials and classic design.',
      saved: false
    },
    { 
      id: 2, 
      type: 'video', 
      content: 'https://example.com/runway-video.mp4', 
      source: 'Milan Fashion Week', 
      likes: 1205, 
      comments: 87,
      description: 'Highlights from the latest runway show featuring upcoming trends.',
      saved: false
    },
    { 
      id: 3, 
      type: 'image', 
      content: 'https://source.unsplash.com/random/800x600?shoes', 
      source: 'Trendsetter Magazine', 
      likes: 892, 
      comments: 56,
      description: 'Street style snapshot: Bold colored shoes are making a comeback this season.',
      saved: false
    },
  ]);

  const handleLike = (id: number) => {
    setSeeds(seeds.map(seed => 
      seed.id === id ? { ...seed, likes: seed.likes + 1 } : seed
    ));
  };

  const handleSave = (id: number) => {
    setSeeds(seeds.map(seed => 
      seed.id === id ? { ...seed, saved: !seed.saved } : seed
    ));
  };

  return (
    <div className="space-y-8">
      {seeds.map((seed) => (
        <div key={seed.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {seed.type === 'image' ? (
            <img src={seed.content} alt="Trend Seed" className="w-full h-96 object-cover" />
          ) : (
            <video src={seed.content} className="w-full h-96 object-cover" controls />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{seed.source}</h3>
            <p className="text-gray-600 mb-4">{seed.description}</p>
            <div className="flex justify-between items-center">
              <button onClick={() => handleLike(seed.id)} className="flex items-center text-gray-600 hover:text-red-500">
                <Heart size={20} className="mr-1" />
                <span>{seed.likes}</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <MessageCircle size={20} className="mr-1" />
                <span>{seed.comments}</span>
              </button>
              <button onClick={() => handleSave(seed.id)} className={`flex items-center ${seed.saved ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'}`}>
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendSeedContent;