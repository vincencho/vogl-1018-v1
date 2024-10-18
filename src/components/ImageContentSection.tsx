import React from 'react';
import { ArrowLeft, MoreHorizontal, Share2, Menu } from 'lucide-react';
import ObjectRecognition from './ObjectRecognition';

interface ImageContentSectionProps {
  imageUrl: string;
  title: string;
  isObjectRecognitionActive: boolean;
  onGoBack: () => void;
  onShare: () => void;
  onSave: () => void;
  onObjectRecognition: () => void;
  onProductSimilar: () => void;
  isPCView: boolean;
}

const ImageContentSection: React.FC<ImageContentSectionProps> = ({
  imageUrl,
  title,
  isObjectRecognitionActive,
  onGoBack,
  onShare,
  onSave,
  onObjectRecognition,
  onProductSimilar,
  isPCView,
}) => {
  return (
    <div className={`relative ${isPCView ? 'h-[calc(100vh-4rem)]' : 'h-screen'}`}>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      {isObjectRecognitionActive && <ObjectRecognition />}
      {!isPCView && (
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button onClick={onGoBack} className="text-white bg-black bg-opacity-50 rounded-full p-2">
            <ArrowLeft size={24} />
          </button>
          <div className="flex space-x-2">
            <button onClick={onShare} className="text-white bg-black bg-opacity-50 rounded-full p-2">
              <Share2 size={24} />
            </button>
            <button onClick={onSave} className="text-white bg-black bg-opacity-50 rounded-full p-2">
              <Menu size={24} />
            </button>
            <button className="text-white bg-black bg-opacity-50 rounded-full p-2">
              <MoreHorizontal size={24} />
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={onObjectRecognition}
          className={`px-3 py-1 rounded-full text-sm ${
            isObjectRecognitionActive ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'
          }`}
        >
          Object
        </button>
        <button
          onClick={onProductSimilar}
          className="px-3 py-1 bg-white text-gray-800 rounded-full text-sm"
        >
          Product Similar
        </button>
      </div>
    </div>
  );
};

export default ImageContentSection;