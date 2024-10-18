import React from 'react';
import { X, ChevronDown } from 'lucide-react';

interface ProductSimilarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductSimilar: React.FC<ProductSimilarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const similarProducts = [
    { id: 1, name: "Women's gold v...", brand: "ChiqueChics", price: "US$22.32", image: "https://source.unsplash.com/random/200x200?fashion,skirt", discount: false, rating: 0 },
    { id: 2, name: "2023 automne/...", brand: "Droshki", price: "US$48.98", image: "https://source.unsplash.com/random/200x200?fashion,sweater", discount: false, rating: 0 },
    { id: 3, name: "2023 autom", brand: "Droshki", price: "US$48.98", image: "https://source.unsplash.com/random/200x200?fashion,top", discount: false, rating: 0 },
    { id: 4, name: "2023AW: iCoN COLOR...", brand: "mamian", price: "₩78,000", image: "https://source.unsplash.com/random/200x200?fashion,shoes", discount: true, originalPrice: "₩112,000", rating: 5 },
    { id: 5, name: "10% OFF: 2024SS: iCo...", brand: "mamian", price: "₩108,000", image: "https://source.unsplash.com/random/200x200?fashion,heels", discount: false, rating: 5 },
    { id: 6, name: "15% OFF: 2024SS: T-s...", brand: "mamian", price: "₩105,000", image: "https://source.unsplash.com/random/200x200?fashion,tshirt", discount: true, originalPrice: "₩116,000", rating: 0 },
  ];

  return (
    <div className="fixed inset-y-0 right-0 bg-white z-50 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-lg overflow-y-auto">
      <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
        <h2 className="text-xl font-semibold">Product similar</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm whitespace-nowrap">카테고리 드...</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm whitespace-nowrap">롱라인_v3</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm whitespace-nowrap">어깨라인_v3</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm whitespace-nowrap">스페인어...</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {similarProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-2">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-xs text-gray-500">{product.brand}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">{product.price}</p>
                {product.discount && (
                  <p className="text-xs text-gray-500 line-through">{product.originalPrice}</p>
                )}
              </div>
              {product.rating > 0 && (
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">5</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">유사 디자인</h3>
            <ChevronDown size={20} className="text-gray-500" />
          </div>
          <p className="text-sm text-gray-600">
            실루엣 및 라인: 이 드레스는 전체적으로 몸에 꼭 맞고 여성스러운 실루엣을 보여줍니다. 허리에서 약간 들어가고 엉덩이를 지나 퍼지는 라인으로, 클래식한 아워글래스 실루엣을 만듭니다. 허리에서 스커트 부분으로 이어지는 라인이 부드럽고 자연스럽습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSimilar;