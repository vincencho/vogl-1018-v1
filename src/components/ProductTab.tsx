import React from 'react';

const ProductTab: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product Similar</h2>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border rounded-lg p-2">
            <img src={`https://source.unsplash.com/random/200x200?fashion-item-${item}`} alt={`Similar product ${item}`} className="w-full h-32 object-cover rounded-lg mb-2" />
            <p className="text-sm font-semibold truncate">Fashion Item {item}</p>
            <p className="text-xs text-gray-500">Brand Name</p>
            <p className="text-sm font-bold mt-1">$99.99</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-gray-100 rounded-lg p-4">
        <h3 className="font-bold mb-2">유사 디자인</h3>
        <p className="text-sm text-gray-600">
          실루엣 및 라인: 이 드레스는 전체적으로 몸에 꼭 맞고 여성스러운 실루엣을 보여줍니다. 허리에서 약간 들어가고 엉덩이를 지나 퍼지는 라인으로, 클래식한 아워글래스 실루엣을 만듭니다.
        </p>
      </div>
    </div>
  );
};

export default ProductTab;