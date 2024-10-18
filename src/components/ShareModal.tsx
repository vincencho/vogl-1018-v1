import React from 'react';
import { X, Link, Facebook, Twitter } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentId: number;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, contentId }) => {
  if (!isOpen) return null;

  const shareUrl = `https://vogl.com/content/${contentId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('링크가 클립보드에 복사되었습니다.');
    });
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">공유하기</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <button onClick={handleCopyLink} className="w-full py-2 px-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Link size={20} className="mr-2" />
              링크 복사
            </button>
          </div>
          <div className="flex justify-center space-x-4">
            <button onClick={handleShareFacebook} className="p-2 bg-blue-600 text-white rounded-full">
              <Facebook size={24} />
            </button>
            <button onClick={handleShareTwitter} className="p-2 bg-blue-400 text-white rounded-full">
              <Twitter size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;