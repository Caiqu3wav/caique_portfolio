'use client'
import React from 'react'
import Image from 'next/image'
import CaiqueAnime from '../../../../public/assets/img/Caique-character14(producing).png'
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNode, FaAws, FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiSpringboot, SiTypescript, SiNestjs, SiPrisma, SiMysql, SiStrapi, SiTailwindcss } from "react-icons/si";
import { GrGraphQl, GrDocker } from "react-icons/gr";
import { BiLogoGoLang, BiLogoCPlusPlus } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import VerticalCarousel from '@/app/components/VerticalCarousel';

export default function Hero() {
  const icons1 = [
    () => <FaReact className='text-blue-500' size={32} />, 
    () => <TbBrandNextjs className='text-yellow-500' size={32} />, 
    () => <GrGraphQl className='text-pink-500' size={32} />, 
    () => <FaAws className='text-blue-600' size={32} />, 
    () => <TbBrandJavascript className='text-yellow-400' size={32} />, 
    () => <FaNode className='text-green-600' size={32} />, 
    () => <SiMongodb className='text-green-600' size={32} />, 
    () => <SiSpringboot className='text-green-600' size={32} />, 
    () => <FaJava className='text-red-600' size={32} />
  ];

  const icons2 = [
    () => <SiTypescript className='text-blue-500' size={32} />, 
    () => <SiNestjs className='text-red-500' size={32} />, 
    () => <SiPrisma className='text-blue-400' size={32} />, 
    () => <SiMysql className='bg-blue-600 rounded-full px-1 text-orange-400' size={32} />, 
    () => <BiLogoGoLang className='text-blue-500' size={32} />, 
    () => <BiLogoCPlusPlus className='text-red-600' size={32} />, 
    () => <GrDocker className='text-blue-500' size={32} />, 
    () => <SiStrapi className='text-purple-500' size={32} />, 
    () => <SiTailwindcss className=' text-blue-500' size={32} />, 
    () => <FcLinux size={32} />
  ];

  return (
  <div className='flex items-center justify-around min-h-[600px]'>
      <Image className='rounded-full w-[30%]' src={CaiqueAnime} alt='caique animated' />
      <div className='flex items-center text-white flex-row justify-center'>
      <VerticalCarousel items={icons1} />
      <div className='flex items-center text-white flex-col justify-center'>
        <h1 className='text-2xl'>Caique</h1>
        <p className='text-4xl'>Digital Craftsman</p>
        <p className='text-lg text-center max-w-xl mt-4'>
          I am a problem solver at heart, leveraging technology to bring ideas to life. As a fullstack developer, I specialize in building scalable and dynamic web applications, with expertise in Next.js, Node.js, Java, Golang, Web3, and Solidity. My passion for programming is complemented by my skills as a music producer, blending creativity with technical precision. Whether crafting code or composing soundscapes, I thrive on turning complex challenges into elegant solutions.
        </p>
      </div>
      <VerticalCarousel items={icons2} />
    </div>
  </div>
  )
}
