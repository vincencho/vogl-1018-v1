import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User, Upload, Bell } from 'lucide-react';
import { useLayout } from '../contexts/LayoutContext';

interface FooterProps {
  style: 'fixed';
}

const Footer: React.FC<FooterProps> = ({ style }) => {
  const { viewportSize } = useLayout();

  if (viewportSize === 'desktop') return null;

  return (
    <footer className={`bg-white shadow-md ${style === 'fixed' ? 'fixed bottom-0 left-0 right-0' : ''}`}>
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex justify-between items-center">
          <li className="flex-1">
            <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-indigo-600">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/explore" className="flex flex-col items-center text-gray-600 hover:text-indigo-600">
              <Search size={24} />
              <span className="text-xs mt-1">Explore</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/upload" className="flex flex-col items-center text-gray-600 hover:text-indigo-600">
              <Upload size={24} />
              <span className="text-xs mt-1">Upload</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/notifications" className="flex flex-col items-center text-gray-600 hover:text-indigo-600">
              <Bell size={24} />
              <span className="text-xs mt-1">Notifications</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-indigo-600">
              <User size={24} />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;