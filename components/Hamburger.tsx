

import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-[100] font-['Comic_Neue']">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,105,180,1)] px-4 py-2 font-bold text-xl hover:translate-y-1 hover:shadow-none transition-all active:bg-pink-200"
      >
        {isOpen ? 'CLOSE [X]' : 'MENU ☰'}
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 w-64 bg-pink-100 border-4 border-double border-blue-50 shadow-2xl p-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
           <h3 className="text-center font-bold border-b-2 border-dashed border-pink-400 pb-2 mb-2 text-fuchsia-700">
             i made these!!!
           </h3>
           <ul className="space-y-3">
             {PROJECTS.map(project => (
               <li key={project.id}>
                 <a 
                   href={project.url}
                   onClick={() => setIsOpen(false)}
                   className="block hover:bg-white p-1 border border-transparent hover:border-pink-300 cursor-pointer group"
                 >
                   <span className="group-hover:animate-spin inline-block mr-2">{project.emoji}</span>
                   <span className="underline decoration-wavy decoration-blue-400">{project.title}</span>
                 </a>
               </li>
             ))}
           </ul>
        </div>
      )}
    </div>
  );

};

export default Hamburger;
