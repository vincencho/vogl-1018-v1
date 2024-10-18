import React, { useState } from 'react';
import { Plus, Palette } from 'lucide-react';

const CreateSectionPage: React.FC = () => {
  const [sectionName, setSectionName] = useState('');
  const [mood, setMood] = useState('');
  const [color, setColor] = useState('#000000');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating section:', { sectionName, mood, color });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create a New Section</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="sectionName" className="block text-sm font-medium text-gray-700 mb-2">
            Section Name
          </label>
          <input
            type="text"
            id="sectionName"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mood" className="block text-sm font-medium text-gray-700 mb-2">
            Mood
          </label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a mood</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="elegant">Elegant</option>
            <option value="sporty">Sporty</option>
            <option value="bohemian">Bohemian</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
            Color Theme
          </label>
          <div className="flex items-center">
            <Palette size={20} className="mr-2 text-gray-500" />
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-8 h-8 border-none rounded-md cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-500">{color}</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus size={20} className="inline mr-2" />
          Create Section
        </button>
      </form>
    </div>
  );
};

export default CreateSectionPage;