'use client'
import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-indigo-200 text-gray-700 p-10">
      <div className="container mx-auto grid grid-cols-3 gap-10">
        
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Roseify</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-500">
              
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500">
              
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-600 hover:text-red-500">
              
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-500">
              
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Services</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>18-0000000</li>
            <li>@xyz@gmail.com</li>
            <li>ABC street #3</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        <p>© 2024 Rose House. All rights reserved.</p>
      </div>

     
    </footer>
  );
};

export default Footer;