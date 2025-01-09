'use client'
import React from 'react'
import Image from 'next/image'
import CaiqueAnime from '../../../../public/assets/img/Caique-character14(producing).png'

export default function Hero() {
  

  return (
  <div className='flex items-center justify-around min-h-[600px]'>
      <Image className='rounded-full w-[30%]' src={CaiqueAnime} alt='caique animated' />
      <div className='flex items-center text-white flex-row justify-center'>
      <div className='flex items-center text-white flex-col justify-center'>
        <h1 className='text-2xl'>Caique</h1>
        <p className='text-4xl'>Digital Craftsman</p>
        <p className='text-lg text-center max-w-xl mt-4'>
          I am a problem solver at heart, leveraging technology to bring ideas to life. As a fullstack developer, I specialize in building scalable and dynamic web applications, with expertise in Next.js, Node.js, Java, Golang, Web3, and Solidity. My passion for programming is complemented by my skills as a music producer, blending creativity with technical precision. Whether crafting code or composing soundscapes, I thrive on turning complex challenges into elegant solutions.
        </p>
      </div>
    </div>
  </div>
  )
}
