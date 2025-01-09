import React from 'react'
import Image from 'next/image'
import ursinhoTecladoGif from '../../../../public/assets/gif/ursinhoteclado-unscreen.gif'
import Nav from '../Nav'
import { Jersey_10 } from 'next/font/google'

const jersey10 = Jersey_10({ subsets: ['latin'], weight: '400', style : "normal"
});

export default function Header() {
   
  return (
    <header className='flex h-[110px] items-center justify-between px-5 border-b-2 border-solid border-red-600 bg-gradient-to-br from-slate-700 via-transparent to-red-600'>
      <div className='flex flex-col items-center gap-1'>
        <h1 className={`${jersey10.className} text-2xl text-green-600`}>Caique___</h1>
        <Image src={ursinhoTecladoGif} width={40} alt='ursinho digitando teclado'/>
      </div>
      <Nav/>
    </header>
  )
}
