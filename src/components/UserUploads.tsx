import React, { useState } from 'react';
import { Image, Layers, Eye, ThumbsUp, MessageCircle } from 'lucide-react';

interface Content {
  id: number;
  type: 'single' | 'board';
  title: string;
  imageUrl: string;
  views: number;
  likes: number;
  comments: number;
  itemCount?: number;
}

const UserUploads: React.FC = () => {
  const [uploads, setUploads] = useState<Content[]>([
    {
      id: 1,
      type: 'single',
      title: 'Summer Fashion Trend',
      imageUrl: 'https://source.unsplash.com/random/400x400?summer,fashion',
      views: 1200,
      likes: 89,
      comments: 15
    },
    {
      id: 2,
      type: 'board',
      title: 'Autumn Collection',
      imageUrl: 'https://source.unsplash.com/random/400x400?autumn,fashion',
      views: 3500,
      likes: 245,
      comments: 42,
      itemCount: 12
    },
    {
      id: 3,
      type: 'single',
      title: 'Streetwear Look',
      imageUrl: 'https://source.unsplash.com/random/400x400?streetwear',
      views: 800,
      likes: 56,
      comments: 8
    },
    {
      id: 4,
      type: 'board',
      title: 'Accessories Collection',
      imageUrl: 'https://source.unsplash.com/random/400x400?accessories',
      views: 2100,
      likes: 178,
      comments: 23,
      itemCount: 8
    }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Uploads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uploads.map((content) => (
          <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={content.imageUrl} alt={content.title} className="w-full h-48 object-cover" />
              {content.type === 'board' && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <Layers size={20} className="text-indigo-600" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
              {content.type === 'board' && (
                <p className="text-sm text-gray-500 mb-2">{content.itemCount} items</p>
              )}
              <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center"><Eye size={16} className="mr-1" /> {content.views}</span>
                <span className="flex items-center"><ThumbsUp size={16} className="mr-1" /> {content.likes}</span>
                <span className="flex items-center"><MessageCircle size={16} className="mr-1" /> {content.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserUploads;