import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

interface SaveNotificationProps {
  isVisible: boolean;
  boardName: string;
  onClose: () => void;
}

const SaveNotification: React.FC<SaveNotificationProps> = ({ isVisible, boardName, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 z-50">
      <Check size={20} />
      <span>{boardName}에 저장됨</span>
      <button onClick={onClose} className="ml-2 text-sm underline">실행 취소</button>
    </div>
  );
};

export default SaveNotification;