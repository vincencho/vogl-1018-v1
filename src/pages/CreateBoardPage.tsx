import React, { useState } from 'react';
import { Plus, Lock, Globe } from 'lucide-react';

const CreateBoardPage: React.FC = () => {
  const [boardName, setBoardName] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating board:', { boardName, isPrivate, category });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create a New Board</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="boardName" className="block text-sm font-medium text-gray-700 mb-2">
            Board Name
          </label>
          <input
            type="text"
            id="boardName"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Privacy
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setIsPrivate(false)}
              className={`flex items-center px-4 py-2 rounded-md ${!isPrivate ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe size={20} className="mr-2" />
              Public
            </button>
            <button
              type="button"
              onClick={() => setIsPrivate(true)}
              className={`flex items-center px-4 py-2 rounded-md ${isPrivate ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <Lock size={20} className="mr-2" />
              Private
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a category</option>
            <option value="fashion">Fashion</option>
            <option value="home-decor">Home Decor</option>
            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus size={20} className="inline mr-2" />
          Create Board
        </button>
      </form>
    </div>
  );
};

export default CreateBoardPage;