import React from 'react'
import {musics} from '@/app/data/index'
import Image from 'next/image'
import { FaPlay, FaPause } from 'react-icons/fa'

export default function HomeProjects() {
  return (
    <div className='flex flex-col gap-4 py-4 items-center bg-white justify-around min-h-[500px]'>
      <h1>My Music</h1>
      <div className='flex gap-3 items-center'>
        {musics.map((music) => {
          return (
            <div className="flex flex-col gap-2 items-center relative" key={music.id}>
            <div className='relative' key={music.id}>
                <Image className='rounded-full w-[80px] h-[80px]' width={80} height={80} src={music.img} alt={music.name} />

                <button className="absolute opacity-0 hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 rounded-full p-8">
                  <FaPlay className='text-white' />
                </button>
              </div>
                <h1 className='text-center'>{music.name}</h1>
            </div>
          )
        })}
      </div>
        <h1>Some projects</h1>
        <div className='grid grid-cols-3 gap-4 items-center justify-between'>
            <div className='flex flex-col gap-2'>
                <img src="https://picsum.photos/400/300" alt="" />
        </div>
            <div className='flex flex-col gap-2'>
                <img src="https://picsum.photos/400/300" alt="" />
        </div>
            <div className='flex flex-col gap-2'>
                <img src="https://picsum.photos/400/300" alt="" />
        </div>
            <div className='flex flex-col gap-2'>
                <img src="https://picsum.photos/400/300" alt="" />
        </div>
            <div className='flex flex-col gap-2'>
                <img src="https://picsum.photos/400/300" alt="" />
        </div>
            <div className='flex flex-col gap-2'>
                <img src="https://picsum.photos/400/300" alt="" />
        </div>
      </div>
    </div>
  )
}
