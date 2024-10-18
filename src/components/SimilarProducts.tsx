import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

const SimilarProducts: React.FC = () => {
  const similarProducts: Product[] = [
    { id: 1, name: 'V-Neck White Tee', brand: 'Fashion Co.', price: 24.99, image: 'https://source.unsplash.com/random/300x300?white-tshirt' },
    { id: 2, name: 'Crew Neck Gray Tee', brand: 'Style Inc.', price: 22.99, image: 'https://source.unsplash.com/random/300x300?gray-tshirt' },
    { id: 3, name: 'Black Cotton Tee', brand: 'Urban Threads', price: 19.99, image: 'https://source.unsplash.com/random/300x300?black-tshirt' },
    { id: 4, name: 'Striped Navy Tee', brand: 'Nautical Wear', price: 27.99, image: 'https://source.unsplash.com/random/300x300?striped-tshirt' },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;