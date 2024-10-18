import React from 'react';
import { Bookmark, Grid, List } from 'lucide-react';

const SavedContent: React.FC = () => {
  const savedItems = [
    { id: 1, type: 'image', content: 'https://source.unsplash.com/random/300x300?fashion' },
    { id: 2, type: 'image', content: 'https://source.unsplash.com/random/300x300?shoes' },
    { id: 3, type: 'image', content: 'https://source.unsplash.com/random/300x300?handbag' },
    { id: 4, type: 'image', content: 'https://source.unsplash.com/random/300x300?dress' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Saved Content</h2>
        <div className="flex space-x-2">
          <button className="text-gray-600 hover:text-indigo-600">
            <Grid size={24} />
          </button>
          <button className="text-gray-600 hover:text-indigo-600">
            <List size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {savedItems.map((item) => (
          <div key={item.id} className="relative group">
            <img src={item.content} alt={`Saved item ${item.id}`} className="w-full h-40 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Bookmark className="text-white" size={24} />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
        View All Saved Items
      </button>
    </div>
  );
};

export default SavedContent;