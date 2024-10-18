import React from 'react';

const CoordinateTab: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">People's Coordinate</h2>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <img key={item} src={`https://source.unsplash.com/random/150x150?fashion-outfit-${item}`} alt={`Outfit ${item}`} className="w-full h-24 object-cover rounded-lg" />
        ))}
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-bold mb-2">코디 팁</h3>
        <p className="text-sm text-gray-600">
          이 화이트 앙상블은 다양한 스타일링이 가능합니다. 캐주얼한 느낌을 위해 스니커즈와 데님 재킷을 매치하거나, 포멀한 룩을 위해 힐과 statement 주얼리를 더해보세요. 컬러풀한 액세서리로 포인트를 줄 수도 있습니다.
        </p>
      </div>
    </div>
  );
};

export default CoordinateTab;