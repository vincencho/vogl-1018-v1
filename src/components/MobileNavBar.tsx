import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User, Upload, Bell } from 'lucide-react';

const MobileNavBar: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-around items-center py-2">
        <Link to="/" className="text-gray-600 hover:text-indigo-600"><Home size={24} /></Link>
        <Link to="/explore" className="text-gray-600 hover:text-indigo-600"><Search size={24} /></Link>
        <Link to="/upload" className="text-gray-600 hover:text-indigo-600"><Upload size={24} /></Link>
        <Link to="/notifications" className="text-gray-600 hover:text-indigo-600"><Bell size={24} /></Link>
        <Link to="/profile" className="text-gray-600 hover:text-indigo-600"><User size={24} /></Link>
      </div>
    </nav>
  );
};

export default MobileNavBar;