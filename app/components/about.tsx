'use client'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div>
        <div className='bg-slate-50 h-screen w-screen'>
            <div className='flex justify-center text-blue-900'>
                <h1 className='text-blue-500 text-2xl text-inherit text-center flex justify-center pt-36'><i> About us <br />
                Welcome to our skincare haven, where beauty meets science! Our mission is to empower individuals to embrace their natural beauty through effective and gentle skincare solutions. We believe that healthy skin is the foundation of confidence, and we are dedicated to providing high-quality products that cater to all skin types.</i> </h1>
                </div>
                <br />

                <div className='flex justify-center space-x-5'>
                <Image
            src="/istockphoto-png.jpg" 
            alt="Beauty Products"
            width={500}
            height={500}
            className="rounded-lg shadow-lg h-72"
          />
                
              
                <Image
            src="/blue-podium-png.webp" 
            alt="Beauty Products"
            width={500}
            height={500}
            className="rounded-lg shadow-lg "
          />

                </div>
                
              


            </div>

        </div>
        
    
  )
}

export default About