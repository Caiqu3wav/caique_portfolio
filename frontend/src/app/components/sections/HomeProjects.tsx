'use client'
import React from 'react'
import {musics} from '@/app/data/index'
import { FaPlay, FaPause } from 'react-icons/fa'
import { projects } from '@/app/data/index'
import usePlayerStore from '@/app/store/playerStore'
import { RiInformationFill } from "react-icons/ri"
import { Beat } from '@/app/interfaces/index'

export default function HomeProjects() {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const playTrack = usePlayerStore((state) => state.playTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);

const handlePlayTrack = (music: Beat) => {
      playTrack(music); 
        return;
};

const handleToggleTrack = () => {
    togglePlay(!isPlaying);
    console.log("handle tohgle");
  };

  return (
    <div className='flex flex-col gap-4 py-4 items-center bg-white justify-around min-h-[500px]'>
      <h1>My Music</h1>
      <div className='flex gap-3 items-center'>
        {musics.map((music) => {
          return (
            <div className="flex flex-col gap-2 items-center relative" key={music.id}>
            <div className='relative' key={music.id}>
                <img className='rounded-full w-[80px] h-[80px]' width={80} height={80} src={music.img} alt={music.name} />
                <button onClick={currentTrack?.id !== music.id ? () => handlePlayTrack(music) : 
                  () => handleToggleTrack()
                } className="absolute opacity-0 hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 rounded-full p-8">
                  {currentTrack?.id === music.id && isPlaying ? (
                    <FaPause className='text-white' />
                  ) : ( <FaPlay className='text-white' />)}
                </button>
              </div>
                <h1 className='text-center'>{music.name}</h1>
            </div>
          )
        })}
      </div>
        <h1>Some of my projects</h1>
        <div className='grid grid-cols-3 gap-4 items-center justify-between'>
        {projects.map((project) => (
            <div className='flex flex-col gap-2 items-center justify-center' key={project.id}>
              <div className='relative flex flex-col items-center justify-center'>
                <img src={project.img} className='rounded-lg w-[85%] h-[200px]' alt={project.name} />
                
                <button className="absolute flex items-center justify-center opacity-0 hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 rounded-lg w-[85%] h-[200px]">
                <RiInformationFill color='white' size={42} />
                </button>
                </div>
                <p className='w-[75%]'><span className='border-solid border-b-2 border-black hover:bg-slate-500 hover:text-black
                '>{project.name}</span> - {project.descr}</p>
                 <button className="px-4 py-3 bg-red-500 text-red-50 rounded-xl hover:bg-black
                 transition-colors duration-500">Detalhes</button>
            </div>
        ))}
      </div>
    </div>
  )
}