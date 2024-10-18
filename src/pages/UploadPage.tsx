import React from 'react';
import SingleUpload from '../components/SingleUpload';
import BoardUpload from '../components/BoardUpload';

const UploadPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SingleUpload />
        <BoardUpload />
      </div>
    </div>
  );
};

export default UploadPage;