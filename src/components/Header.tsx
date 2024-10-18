import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User, Upload, Bell, Settings } from 'lucide-react';
import { useLayout } from '../contexts/LayoutContext';

const Header: React.FC = () => {
  const { viewportSize, headerStyle } = useLayout();

  if (headerStyle === 'none') {
    return null;
  }

  const headerClass = headerStyle === 'floating'
    ? 'absolute top-0 left-0 right-0 bg-white bg-opacity-90'
    : 'fixed top-0 left-0 right-0 bg-white shadow-md';

  return (
    <header className={`z-50 ${headerClass} transition-transform duration-300 ${headerStyle === 'hide' ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">vogl</Link>
        {viewportSize === 'desktop' ? (
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/explore" className="text-gray-600 hover:text-indigo-600">Explore</Link>
            <Link to="/upload" className="text-gray-600 hover:text-indigo-600">Upload</Link>
            <Link to="/notifications" className="text-gray-600 hover:text-indigo-600">Notifications</Link>
            <Link to="/profile" className="text-gray-600 hover:text-indigo-600">Profile</Link>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-600 hover:text-indigo-600"><Search size={24} /></Link>
            <Link to="/upload" className="text-gray-600 hover:text-indigo-600"><Upload size={24} /></Link>
          </div>
        )}
        <Link to="/mypage" className="text-gray-600 hover:text-indigo-600">
          {viewportSize === 'desktop' ? 'My Page' : <Settings size={24} />}
        </Link>
      </nav>
    </header>
  );
};

export default Header;