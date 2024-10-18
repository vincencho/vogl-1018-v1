import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Bell, Shield } from 'lucide-react';

const AccountManagementPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nickname, setNickname] = useState('JohnDoe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('********');
  const [notifications, setNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving changes:', { nickname, email, password, notifications, privateProfile });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Account Management</h1>
      <form onSubmit={handleSaveChanges} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-2">
            <User size={20} className="inline mr-2" />
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <User size={20} className="inline mr-2" />
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            <Lock size={20} className="inline mr-2" />
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-sm text-gray-700">
              <Bell size={20} className="inline mr-2" />
              Receive notifications
            </span>
          </label>
        </div>
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={privateProfile}
              onChange={(e) => setPrivateProfile(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-sm text-gray-700">
              <Shield size={20} className="inline mr-2" />
              Make profile private
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountManagementPage;