'use client';
import { useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, RandomMusicsTrue, RandomMusicsFalse, VolumeOff, VolumeOn } from '../../utils/icons/index';
import "../../styles/musicPlayer.css"
import React from "react";
import usePlayerStore from "@/app/store/playerStore";

export default function MusicPlayer() {
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const isMuted = usePlayerStore((state) => state.isMuted);
    const volume = usePlayerStore((state) => state.volume);
    const setProgress = usePlayerStore((state) => state.setProgress);
    const setDuration = usePlayerStore((state) => state.setDuration);
    const currentTrack = usePlayerStore((state) => state.currentTrack);
    const playNextTrack = usePlayerStore((state) => state.playNextTrack);
    const progress = usePlayerStore((state) => state.progress);
    const duration = usePlayerStore((state) => state.duration);
    const togglePlay = usePlayerStore((state) => state.togglePlay);
    const toggleMute = usePlayerStore((state) => state.toggleMute);
    const toggleRandom = usePlayerStore((state) => state.toggleRandom);
    const isRandom = usePlayerStore((state) => state.isRandom);
    const playPrevTrack = usePlayerStore((state) => state.playPrevTrack);
    const setVolume = usePlayerStore((state) => state.setVolume);

  const audioRef = useRef<HTMLAudioElement>(null);

        useEffect(() => {
            if (audioRef.current) {
                if (isPlaying) {
                    audioRef.current.play();
                } else {
                    audioRef.current.pause();
                }
            }
        }, [isPlaying]);
        
        useEffect(() => {
            if (audioRef.current) {
                audioRef.current.volume = isMuted ? 0 : volume;
            }
        }, [volume, isMuted]);

        const calculeDuration = (sec: number) => {
            const minutes = Math.floor(sec / 60)
            const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
            const seconds = Math.floor(sec % 60)
            const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

            return `${newMinutes}:${newSeconds}`
        }
        
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setProgress(audioRef.current.currentTime);
            }
        };
        
        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };

        return(
        <div className={`player-container ${currentTrack === null ? 'hidden' : ''}`}>
            <div className="w-full flex justify-between bg-slate-200 rounded-md">
            
            <div className='musicDiv'>
            <div 
             className='flex gap-3' key={currentTrack?.id}>
                                <>
                                {currentTrack && (
                                   <button className="flex flex-nowrap gap-1">
                                <img className="w-[50px] h-[50px] majorfour:h-[60px] majorfour:w-[60px] lowtwo2:w-[50px]" src={currentTrack.img} alt={currentTrack.name} />
                                    <div>
                                        <h1>{currentTrack.name}</h1>
                                    </div>
                                    </button>
                                          )}
                                </>
                               <audio
                                src={currentTrack?.audio} 
                                ref={audioRef}
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                onEnded={playNextTrack}/>
                            </div>    
            </div>
            <div className='flex items-center'>
                <div className='flex gap-32 mr-[290px] majortwo2:gap-20 majortwo3:gap-10 majortwo3:mr-[190px]
                 majortwo4:mr-0 majorfour:flex-col-reverse majorfour:gap-0 majorfour:items-center majorfour:text-[14px]
                 midtwo3:mr-10 midfour:mr-6 low:mr-3 lowtwo:mr-0 lowtwo2-1:text-[10px]'>
                        <div className='progressBar flex gap-2 majorfour:ml-4'>
                            <p className='PcurrentTime'>
                            {(progress !== null) && calculeDuration(progress)}
                            </p>
                            <input 
                                type="range" 
                                className='currentProgress'
                                value={progress} 
                                max={duration}
                                onChange={(e) => {
                                    const newProgress = parseFloat(e.target.value);
                                    if (audioRef.current) {
                                        audioRef.current.currentTime = newProgress;
                                        setProgress(newProgress);
                                      } 
                                }}
                            />
                            
                            <p className='Pduration'>
                                {(duration && !isNaN(duration)) && 
                                calculeDuration(duration)}
                            </p>
                        </div> 

                    <div className='buttons flex flex-nowrap text-3xl text-orange-400 space-x-3 majorfour:text-[28px]
                    lowtwo2-1:text-[24px]'>
                        <button 
                            onClick={toggleRandom} className='randomMusicsButton'>
                            {isRandom ? <RandomMusicsTrue /> : <RandomMusicsFalse />}
                        </button> 
          
                        <button onClick={playPrevTrack}>
                            <SkipBack />
                        </button>
                        <button 
                            className='playPause' 
                            onClick={() => togglePlay()}>
                                {isPlaying ?  <Pause /> : <Play />}
                        </button>
                        <button onClick={playNextTrack}>
                            <SkipForward />
                        </button>
                        
                    </div>
                </div>
            </div>

                <div className='test mr-5 gap-1 flex items-center majorfour:mr-2'>
                <button 
                    className='volumeButton midfour:hidden ' 
                    onClick={toggleMute}>
                    {isMuted ? <VolumeOff/> : <VolumeOn />}
                </button>
                <input
                className="volume-input"
                    type="range" 
                    step="0.01"
                    onChange={(e) => setVolume(parseFloat(e.target.value))} 
                    value={volume}
                    max='1'
                    min='0' 
                />
                </div>
        </div>
    </div>
        )
}

