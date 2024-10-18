import React, { useState } from 'react';
import { User, Camera, Youtube, ShoppingBag, MapPin, X } from 'lucide-react';

interface Channel {
  id: number;
  name: string;
  type: 'user' | 'brand' | 'category' | 'location';
  icon: React.ReactNode;
  followers: number;
}

const ManageChannelsPage: React.FC = () => {
  const [followedChannels, setFollowedChannels] = useState<Channel[]>([
    { id: 1, name: 'Fashion Influencer', type: 'user', icon: <User size={20} />, followers: 100000 },
    { id: 2, name: 'Gucci', type: 'brand', icon: <ShoppingBag size={20} />, followers: 5000000 },
    { id: 3, name: 'Dresses', type: 'category', icon: <Camera size={20} />, followers: 500000 },
    { id: 4, name: 'New York Fashion', type: 'location', icon: <MapPin size={20} />, followers: 750000 },
    { id: 5, name: 'Fashion Week Channel', type: 'user', icon: <Youtube size={20} />, followers: 2000000 },
  ]);

  const handleUnfollow = (id: number) => {
    setFollowedChannels(followedChannels.filter(channel => channel.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Followed Channels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {followedChannels.map((channel) => (
          <div key={channel.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="mr-2 text-indigo-600">{channel.icon}</span>
                <h3 className="text-lg font-semibold">{channel.name}</h3>
              </div>
              <button
                onClick={() => handleUnfollow(channel.id)}
                className="text-gray-500 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{channel.followers.toLocaleString()} followers</p>
            <p className="text-sm text-gray-500">Type: {channel.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageChannelsPage;