
import React from 'react';

const PremiumProducts = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center p-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl">
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Premium Quality Products</h1>
            <p className="text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <h2 className="font-bold text-lg mb-2">What's in it?</h2>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>🌿 Aloe Vera</li>
              <li>🍃 Organic</li>
              <li>💧 Jojoba Extract</li>
            </ul>
          </div>

          
          <div className="flex-shrink-0">
            <img
              src="/istockphoto-png.jpg" 
              alt="Premium Products"
              className="w-full max-w-xs rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumProducts;