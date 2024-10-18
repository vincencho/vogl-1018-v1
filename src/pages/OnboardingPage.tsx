import React from 'react';
import RecommendedChannels from '../components/RecommendedChannels';

const OnboardingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to vogl</h1>
      <p className="text-xl mb-8">Follow trend seed channels to get started:</p>
      <RecommendedChannels />
      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Continue to Home
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;