import React from 'react';
import { User, Camera, Youtube, ShoppingBag, MapPin } from 'lucide-react';

interface Channel {
  id: number;
  name: string;
  type: 'user' | 'brand' | 'category' | 'location';
  icon: React.ReactNode;
}

const channels: Channel[] = [
  { id: 1, name: 'Fashion Influencer', type: 'user', icon: <User size={20} /> },
  { id: 2, name: 'Gucci', type: 'brand', icon: <ShoppingBag size={20} /> },
  { id: 3, name: 'Dresses', type: 'category', icon: <Camera size={20} /> },
  { id: 4, name: 'New York Fashion', type: 'location', icon: <MapPin size={20} /> },
  { id: 5, name: 'Fashion Week Channel', type: 'user', icon: <Youtube size={20} /> },
];

const TrendSeedChannels: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Trend Seed Channels</h2>
      <ul className="space-y-2">
        {channels.map((channel) => (
          <li key={channel.id} className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <span className="mr-2">{channel.icon}</span>
            <span>{channel.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendSeedChannels;