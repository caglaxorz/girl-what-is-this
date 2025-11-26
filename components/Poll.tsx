
import React, { useState } from 'react';

const Poll: React.FC = () => {
  const [voted, setVoted] = useState(false);

  return (
    <div className="bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 w-48 font-['MS_Sans_Serif'] text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] absolute top-24 left-4 z-40 md:static md:mt-6 md:mx-auto rotate-[-2deg]">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-1 mb-2 flex justify-between items-center">
        <span>POLL</span>
        <button className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center text-[10px] border border-white border-b-black border-r-black leading-none">x</button>
      </div>
      
      {!voted ? (
        <div className="p-2 text-black">
          <p className="mb-2 font-bold">Did you like my page?</p>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" id="yes" name="poll" defaultChecked />
            <label htmlFor="yes">Yes</label>
          </div>
          <button 
            onClick={() => setVoted(true)}
            className="w-full bg-[#c0c0c0] border border-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white px-2 py-1 font-bold text-xs"
          >
            Vote
          </button>
        </div>
      ) : (
        <div className="p-2 text-center">
          <p className="font-bold text-green-700">Thanks for voting!</p>
          <p className="text-xs mt-1">Results: Yes (100%)</p>
        </div>
      )}
    </div>
  );
};

export default Poll;
