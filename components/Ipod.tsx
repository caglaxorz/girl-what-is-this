import React, { useState, useEffect } from 'react';
import { SONGS } from '../constants';

const Ipod: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentSong = SONGS[currentSongIndex];

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentSongIndex((i) => (i + 1) % SONGS.length);
            return 0;
          }
          return prev + (100 / currentSong.duration);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong.duration]);

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length);
    setProgress(0);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-10 sm:left-10 z-50 animate-bounce hover:animate-none">
      <div className="w-48 h-80 bg-gradient-to-b from-pink-400 to-pink-500 rounded-[2rem] shadow-2xl border-4 border-pink-300 flex flex-col items-center p-4 relative">
        {/* Screen */}
        <div className="w-full h-32 bg-blue-100 rounded-lg border-2 border-gray-600 mb-6 overflow-hidden relative font-['VT323']">
          <div className="bg-gray-200 h-5 w-full border-b border-gray-400 flex items-center justify-between px-2 text-xs text-gray-600">
             <span>12:43 PM</span>
             <span>🔋</span>
          </div>
          <div className="p-2 text-center w-full overflow-hidden">
            <h3 className="text-sm text-gray-500">Now Playing</h3>
            {currentSong.title.length > 15 ? (
                <div className="w-full overflow-hidden whitespace-nowrap relative h-7 mt-1">
                    <div className="animate-marquee inline-block">
                        <h2 className="text-lg font-bold text-black leading-tight px-2">{currentSong.title}</h2>
                    </div>
                </div>
            ) : (
                <h2 className="text-lg font-bold truncate text-black leading-tight mt-1">{currentSong.title}</h2>
            )}
            <p className="text-sm text-gray-600 truncate">{currentSong.artist}</p>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex justify-between text-[10px] text-gray-600 mb-0.5">
               <span>0:{(progress * currentSong.duration / 100).toFixed(0)}</span>
               <span>-{currentSong.duration}s</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Click Wheel */}
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center relative shadow-inner">
           {/* Menu Button */}
           <button className="absolute top-2 text-gray-400 font-bold text-xs hover:text-pink-500">MENU</button>
           
           {/* Prev/Next Buttons */}
           <button onClick={handlePrev} className="absolute left-2 text-gray-400 font-bold text-lg hover:text-pink-500">⏮</button>
           <button onClick={handleNext} className="absolute right-2 text-gray-400 font-bold text-lg hover:text-pink-500">⏭</button>
           
           {/* Play/Pause Button */}
           <button onClick={togglePlay} className="absolute bottom-2 text-gray-400 font-bold text-lg hover:text-pink-500">
             {isPlaying ? '⏸' : '⏯'}
           </button>

           {/* Center Button */}
           <div 
             className="w-12 h-12 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 shadow-md active:scale-95 transition-transform"
             onClick={togglePlay}
           ></div>
        </div>
      </div>
      
      {/* Headphones Cord decoration */}
      <div className="absolute -top-20 left-1/2 w-1 h-20 bg-white opacity-50 -z-10 transform -rotate-12"></div>
    </div>
  );
};

export default Ipod;