import React, { useEffect, useState } from 'react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<string>("000000");

  useEffect(() => {
    // Simulate fetching a count or just chaos math
    const randomStart = Math.floor(Math.random() * 8000) + 1000;
    setCount(randomStart.toString().padStart(6, '0'));
    
    // Increment randomly
    const interval = setInterval(() => {
        setCount(prev => {
            const next = parseInt(prev) + 1;
            return next.toString().padStart(6, '0');
        });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1 border-2 border-dashed border-fuchsia-500 p-2 bg-black/80 rounded-lg">
       <span className="text-fuchsia-300 font-['Press_Start_2P'] text-[10px] uppercase">You are visitor no.</span>
       <div className="flex gap-1">
         {count.split('').map((char, i) => (
           <div key={i} className="w-6 h-8 bg-gradient-to-b from-gray-700 to-black border border-gray-600 text-red-500 font-mono text-xl flex items-center justify-center font-bold shadow-inner">
             {char}
           </div>
         ))}
       </div>
    </div>
  );
};

export default VisitorCounter;