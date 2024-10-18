import React, { useState, useRef } from 'react';
import { Plus, Check } from 'lucide-react';

interface SuggestedUser {
  id: number;
  name: string;
  avatar: string;
  followers: number;
  isFollowing: boolean;
}

const SuggestedUsers: React.FC = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<SuggestedUser[]>([
    { id: 1, name: 'Fashion Guru', avatar: 'https://source.unsplash.com/random/100x100?face=1', followers: 10000, isFollowing: false },
    { id: 2, name: 'Style Maven', avatar: 'https://source.unsplash.com/random/100x100?face=2', followers: 8500, isFollowing: false },
    { id: 3, name: 'Trend Setter', avatar: 'https://source.unsplash.com/random/100x100?face=3', followers: 12000, isFollowing: false },
    { id: 4, name: 'Chic Influencer', avatar: 'https://source.unsplash.com/random/100x100?face=4', followers: 15000, isFollowing: false },
    { id: 5, name: 'Fashionista', avatar: 'https://source.unsplash.com/random/100x100?face=5', followers: 9000, isFollowing: false },
    { id: 6, name: 'Vogue Visionary', avatar: 'https://source.unsplash.com/random/100x100?face=6', followers: 11000, isFollowing: false },
    { id: 7, name: 'Couture Queen', avatar: 'https://source.unsplash.com/random/100x100?face=7', followers: 13500, isFollowing: false },
    { id: 8, name: 'Runway Rebel', avatar: 'https://source.unsplash.com/random/100x100?face=8', followers: 7500, isFollowing: false },
    { id: 9, name: 'Fashion Forward', avatar: 'https://source.unsplash.com/random/100x100?face=9', followers: 14000, isFollowing: false },
    { id: 10, name: 'Style Savant', avatar: 'https://source.unsplash.com/random/100x100?face=10', followers: 10500, isFollowing: false },
  ]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleFollow = (id: number) => {
    setSuggestedUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className="mb-6 overflow-hidden">
      <h2 className="text-xl font-semibold mb-4 px-4">Suggested Users</h2>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 px-4 -mx-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {suggestedUsers.map((user) => (
          <div 
            key={user.id} 
            className="flex flex-col items-center mr-4 flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
            <p className="font-medium text-sm text-center truncate w-20">{user.name}</p>
            <p className="text-xs text-gray-500 mb-2">{user.followers.toLocaleString()} followers</p>
            <button
              onClick={() => toggleFollow(user.id)}
              className={`px-3 py-1 rounded-full text-xs flex items-center ${
                user.isFollowing
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              {user.isFollowing ? (
                <>
                  <Check size={12} className="mr-1" /> Following
                </>
              ) : (
                <>
                  <Plus size={12} className="mr-1" /> Follow
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;