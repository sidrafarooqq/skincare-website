'use client'

import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      
      <header className="flex justify-between items-center py-6 px-8 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800">Beautify</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
        </nav>
      </header>

     
      <main className="flex flex-col md:flex-row items-center justify-between py-20 px-10">
       
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enhance <br /> 
            <span className="text-blue-600">your Natural Radiance</span>
          </h1>
          <p className="text-gray-700 text-lg">Discover our range of beauty products that bring out the best in you.</p>
        </div>

        
        <div className="relative w-full h-full max-w-md mt-10 md:mt-0 mr-40 ">
          
          <Image
            src="/blue-podium-png.webp" 
            alt="Beauty Products"
            width={700}
            height={900}
            className="rounded-lg shadow-lg h-72"
          />
          
        </div>
      </main>
    </div>
  );
};

export default Home;
