'use client'
import React from 'react'
import Image from 'next/image';
import { features } from 'process';

 const Features = () => {
  return (
  
    <div className="bg-slate-50 h-screen w-screen">
      <div className="text-center">
        
        <p className='text-4xl pt-5 pr-44 text-blue-900' >
          <b><i> Our features products </i> </b>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        <div className="flex items-cente pt-10">

          <Image  src ="/HOBMineral-png.webp" 
           alt=" sun cream " width={200} height={200} className="mr-4 rounded-lg" />
         <p className='text-blue-900'>
          Sun cream <br />
          sheild your skin from harmful Uv rays with our broad-spectrum sunscreen.
          
         </p>
        </div>
        
        <div className="flex items-center text-blue-900">
          <Image src="/630_x_427_png.webp" alt="Brightning cream" width={200} height={200} className="mr-4 rounded-lg" />
          <p> <i> Brightning cream<br />
           Unlock brighter , more rediant skin with our advanced brightning cream. </i></p>
        </div>
        <div className="flex items-center text-blue-900">
          <Image src="/images-png.jpeg" alt="Night cream" width={200} height={200} className="mr-4 rounded-lg" />
          <p> <i> Night cream <br />
           Revitalize your slin overnight with our nourishing night cream.</i> </p>
        </div>
        <div className="flex items-center text-blue-900">
          <Image src="/images-ppnnngg.jpeg" alt="soothing cream" width={150} height={150} className="mr-4 rounded-lg" />
          <p> <i> Soothing cream <br />
           Soothe and calm dry, irritated skin with our gentle bringing cream. </i></p>
        </div>
        <div className="flex items-center text-blue-900">
          <Image src="/Images-ppnngg.jpeg" alt="Anti Aging cream" width={150} height={150} className="mr-4 rounded-lg" />
          <p> <i> Anit-aging cream <br />
           Reduce fine line and wrinkles with our Anti-aging bringing cream. </i></p>
        </div>
        <div className="flex items-center text-blue-900">
          <Image src="/iamgess-pngg.jpg" alt="hydrating cream" width={150} height={150} className="mr-4 rounded-lg" />
          <p> <i> Hydrating cream <br />
           Quench your skin's thirstwith our intensed hydrating cream. </i></p>
        </div>
      </div> 
      </div>
      

  )}
  export default Features
      
