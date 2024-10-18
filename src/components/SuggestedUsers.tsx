import React from 'react';
import { User, Plus } from 'lucide-react';

interface SuggestedUser {
  id: number;
  name: string;
  avatar: string;
  followers: number;
}

const SuggestedUsers: React.FC = () => {
  const suggestedUsers: SuggestedUser[] = [
    { id: 1, name: 'Fashion Guru', avatar: 'https://source.unsplash.com/random/100x100?face=1', followers: 10000 },
    { id: 2, name: 'Style Maven', avatar: 'https://source.unsplash.com/random/100x100?face=2', followers: 8500 },
    { id: 3, name: 'Trend Setter', avatar: 'https://source.unsplash.com/random/100x100?face=3', followers: 12000 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Suggested Users</h2>
      <div className="flex justify-between">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex flex-col items-center">
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
            <p className="font-medium text-sm text-center">{user.name}</p>
            <p className="text-xs text-gray-500 mb-2">{user.followers.toLocaleString()} followers</p>
            <button className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <Plus size={16} className="mr-1" /> Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;