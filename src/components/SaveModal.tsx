import React, { useState, useEffect } from 'react';
import { X, Plus, Search } from 'lucide-react';

interface Board {
  id: number;
  name: string;
  image: string;
}

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (boardId: number) => void;
}

const SaveModal: React.FC<SaveModalProps> = ({ isOpen, onClose, onSave }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [boards, setBoards] = useState<Board[]>([
    { id: 1, name: 'fashion_vogl', image: 'https://source.unsplash.com/random/100x100?fashion' },
    { id: 2, name: '지도', image: 'https://source.unsplash.com/random/100x100?map' },
    { id: 3, name: '가구 아이디어', image: 'https://source.unsplash.com/random/100x100?furniture' },
    { id: 4, name: '대시보드 ui', image: 'https://source.unsplash.com/random/100x100?dashboard' },
    { id: 5, name: '이메일', image: 'https://source.unsplash.com/random/100x100?email' },
  ]);

  if (!isOpen) return null;

  const filteredBoards = boards.filter(board => 
    board.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">저장 위치</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-full"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">최고 인기 보드</h3>
          <ul className="space-y-2">
            {filteredBoards.map(board => (
              <li key={board.id} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded" onClick={() => onSave(board.id)}>
                <img src={board.image} alt={board.name} className="w-12 h-12 object-cover rounded-lg mr-3" />
                <span>{board.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t">
          <button className="flex items-center justify-center w-full p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Plus size={20} className="mr-2" />
            보드 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;