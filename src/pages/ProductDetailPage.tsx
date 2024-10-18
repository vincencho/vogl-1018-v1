import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, ShoppingCart } from 'lucide-react';
import SimilarProducts from '../components/SimilarProducts';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // 임시 제품 데이터
  const product = {
    id: parseInt(id || '0'),
    name: 'Classic White T-Shirt',
    brand: 'Fashion Brand',
    price: 29.99,
    description: 'A timeless classic white t-shirt made from 100% organic cotton. Perfect for any casual outfit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://source.unsplash.com/random/800x600?tshirt',
      'https://source.unsplash.com/random/800x600?white-tshirt',
      'https://source.unsplash.com/random/800x600?cotton-tshirt',
    ],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    console.log(`Added to cart: ${quantity} x ${product.name} (Size: ${selectedSize})`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.images[0]} alt={product.name} className="w-full rounded-lg shadow-md" />
          <div className="mt-4 flex space-x-2">
            {product.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`${product.name} view ${index + 2}`} className="w-1/4 rounded-lg shadow-md cursor-pointer" />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-1 border rounded-md">{quantity}</span>
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <button
              className="flex-1 bg-indigo-600 text-white py-3 rounded-md flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
            <button className="p-3 border rounded-md">
              <Heart size={20} />
            </button>
            <button className="p-3 border rounded-md">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
};

export default ProductDetailPage;