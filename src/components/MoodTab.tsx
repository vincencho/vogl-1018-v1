import React from 'react';

const MoodTab: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mood Similar</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {['우아한', '미니멀', '세련된', '여름', '파티', '데이트'].map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <img key={item} src={`https://source.unsplash.com/random/200x200?fashion-mood-${item}`} alt={`Mood ${item}`} className="w-full h-40 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default MoodTab;