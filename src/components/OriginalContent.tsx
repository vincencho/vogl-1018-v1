import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Share2, Plus } from 'lucide-react';

interface OriginalContentProps {
  content: {
    title: string;
    description: string;
    user: {
      name: string;
      avatar: string;
    };
    trendSeed: {
      name: string;
      url: string;
    };
  };
}

const OriginalContent: React.FC<OriginalContentProps> = ({ content }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="space-y-4">
      {/* User info and actions */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow">
        <div className="flex items-center">
          <img src={content.user.avatar} alt={content.user.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-semibold">{content.user.name}</p>
            <button className="text-sm text-gray-500">팔로우</button>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-medium">
            씨드채널 추가
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            저장
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-xl font-bold mb-2">{content.title}</h2>
        <p className="text-gray-600 mb-4">{content.description}</p>
      </div>

      {/* Trend Seed */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-bold mb-1">트렌드 시드</h3>
        <p className="text-sm">{content.trendSeed.name}</p>
        <p className="text-xs text-gray-500">{content.trendSeed.url}</p>
        <button className="mt-2 bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
          <Plus size={16} className="mr-1" /> 씨드 채널 추가
        </button>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
        <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center ${isLiked ? 'text-red-500' : 'text-gray-600'}`}>
          <Heart size={24} className={isLiked ? 'fill-current' : ''} />
          <span className="ml-1">좋아요</span>
        </button>
        <button className="flex items-center text-gray-600">
          <MessageCircle size={24} />
          <span className="ml-1">댓글</span>
        </button>
        <button onClick={() => setIsSaved(!isSaved)} className={`flex items-center ${isSaved ? 'text-yellow-500' : 'text-gray-600'}`}>
          <Bookmark size={24} className={isSaved ? 'fill-current' : ''} />
          <span className="ml-1">저장</span>
        </button>
        <button className="flex items-center text-gray-600">
          <Share2 size={24} />
          <span className="ml-1">공유</span>
        </button>
      </div>

      {/* Share options */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-bold mb-2">공유</h3>
        <div className="flex justify-between">
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-1">
              <span className="text-2xl">🔗</span>
            </div>
            <span className="text-xs">링크 복사</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-1">
              <span className="text-2xl">📱</span>
            </div>
            <span className="text-xs">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
              <span className="text-2xl">💬</span>
            </div>
            <span className="text-xs">메신저</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-1">
              <span className="text-2xl">f</span>
            </div>
            <span className="text-xs">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OriginalContent;