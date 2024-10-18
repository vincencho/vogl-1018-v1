import React from 'react';

const IdeaTab: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">IDEA</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {['남성복', '꽃', '브라이덜', '기하학', '가을', '겨울'].map((tag) => (
          <span key={tag} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      <img src="https://source.unsplash.com/random/400x400?fashion-sketch" alt="Fashion Idea" className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-bold mb-2">새롭고 스타일리쉬한 서정적 패턴 랩스커트</h3>
        <p className="text-sm text-gray-600">
          이 스케치는 현대적이고 세련된 스타일의 랩스커트를 제안합니다. 기하학적 패턴과 부드러운 곡선이 조화롭게 어우러져 독특한 디자인을 만들어냅니다. 허리 부분의 타이 디테일로 실루엣 조절이 가능하며, 다양한 상의와 매치하기 좋은 versatile한 아이템입니다.
        </p>
      </div>
    </div>
  );
};

export default IdeaTab;