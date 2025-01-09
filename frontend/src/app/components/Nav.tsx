import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className=''>
      <ul className='flex gap-4 '>
        <li><Link className='text-white' href='/'>Home</Link></li>
        <li><Link className='text-white' href='/about'>About</Link></li>
        <li className='flex items-center'><a href=''><IoLogoWhatsapp size={30} className='text-green-500'/></a></li>
      </ul>
    </nav>
  )
}
