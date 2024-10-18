import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserContent from '../components/UserContent';
import SavedContent from '../components/SavedContent';
import UserUploads from '../components/UserUploads';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <UserContent />
        <SavedContent />
      </div>
      <UserUploads />
    </div>
  );
};

export default ProfilePage;