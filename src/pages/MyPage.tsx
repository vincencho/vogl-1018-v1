import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CreditCard, Gift, HelpCircle, LogOut } from 'lucide-react';

const MyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Page</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img src="https://source.unsplash.com/random/100x100?face" alt="Profile" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/account-management" className="flex items-center text-gray-700 hover:text-indigo-600">
                <Settings className="mr-3" size={20} />
                Account Settings
              </Link>
            </li>
            <li>
              <Link to="/subscription" className="flex items-center text-gray-700 hover:text-indigo-600">
                <CreditCard className="mr-3" size={20} />
                Subscription & Payments
              </Link>
            </li>
            <li>
              <Link to="/ai-credits" className="flex items-center text-gray-700 hover:text-indigo-600">
                <Gift className="mr-3" size={20} />
                AI Credits: 500
              </Link>
            </li>
            <li>
              <Link to="/help-center" className="flex items-center text-gray-700 hover:text-indigo-600">
                <HelpCircle className="mr-3" size={20} />
                Help Center
              </Link>
            </li>
            <li>
              <button className="flex items-center text-red-600 hover:text-red-800">
                <LogOut className="mr-3" size={20} />
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MyPage;