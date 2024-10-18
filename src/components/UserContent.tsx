import React from 'react';
import { User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserContent: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">Fashion Enthusiast</p>
          </div>
        </div>
        <Link to="/mypage" className="text-gray-600 hover:text-indigo-600">
          <Settings size={24} />
        </Link>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Bio</h3>
        <p className="text-gray-600">Passionate about discovering and sharing the latest fashion trends. Always on the lookout for innovative styles and designs.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">250</p>
            <p className="text-gray-600">Posts</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10k</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">500</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;