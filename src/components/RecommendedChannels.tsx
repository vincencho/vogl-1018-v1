import React, { useState } from 'react';
import { User, Camera, Youtube, ShoppingBag, MapPin } from 'lucide-react';

interface Channel {
  id: number;
  name: string;
  type: 'user' | 'brand' | 'category' | 'location';
  icon: React.ReactNode;
  followers: number;
}

const RecommendedChannels: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([
    { id: 1, name: 'Fashion Influencer', type: 'user', icon: <User size={20} />, followers: 100000 },
    { id: 2, name: 'Gucci', type: 'brand', icon: <ShoppingBag size={20} />, followers: 5000000 },
    { id: 3, name: 'Dresses', type: 'category', icon: <Camera size={20} />, followers: 500000 },
    { id: 4, name: 'New York Fashion', type: 'location', icon: <MapPin size={20} />, followers: 750000 },
    { id: 5, name: 'Fashion Week Channel', type: 'user', icon: <Youtube size={20} />, followers: 2000000 },
  ]);

  const handleFollow = (id: number) => {
    setChannels(channels.map(channel =>
      channel.id === id ? { ...channel, followers: channel.followers + 1 } : channel
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {channels.map((channel) => (
        <div key={channel.id} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-4">
            <span className="mr-2 text-indigo-600">{channel.icon}</span>
            <h3 className="text-lg font-semibold">{channel.name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{channel.followers.toLocaleString()} followers</p>
          <button
            onClick={() => handleFollow(channel.id)}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedChannels;