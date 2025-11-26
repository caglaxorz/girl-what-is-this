import React, { useEffect, useState } from 'react';
import { CHAOS_LINKS } from '../constants';
import { ChaosLinkItem } from '../types';

interface ChaosLinksProps {
  onOpenProject: (id: string) => void;
}

const ChaosLinks: React.FC<ChaosLinksProps> = ({ onOpenProject }) => {
  const [items, setItems] = useState<{ top: string; left: string; item: ChaosLinkItem; rotation: number }[]>([]);

  useEffect(() => {
    // Generate positions only on client side to match window size
    const poolSize = 40; // Number of floating links to show
    const newItems = [];

    for (let i = 0; i < poolSize; i++) {
        // Randomly pick one from the definitions
        const randomLink = CHAOS_LINKS[Math.floor(Math.random() * CHAOS_LINKS.length)];
        
        newItems.push({
            top: `${Math.random() * 120 - 10}%`, // allow overflowing top/bottom slightly
            left: `${Math.random() * 100}%`,
            item: randomLink,
            rotation: Math.random() * 360,
        });
    }
    setItems(newItems);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      {items.map((pos, idx) => (
        <a
          key={idx}
          href={pos.item.url}
          target={pos.item.isExternal ? "_blank" : "_self"}
          rel={pos.item.isExternal ? "noopener noreferrer" : undefined}
          className="absolute pointer-events-auto hover:scale-125 transition-transform duration-100 font-mono text-xs sm:text-sm font-bold bg-white border border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-200 hover:text-red-600 whitespace-nowrap cursor-pointer"
          style={{
            top: pos.top,
            left: pos.left,
            transform: `rotate(${pos.rotation}deg)`,
            fontFamily: idx % 2 === 0 ? '"Comic Neue", cursive' : '"Courier Prime", monospace',
            color: idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'magenta' : 'green',
            zIndex: Math.floor(Math.random() * 20) // Random z-index layer
          }}
          onClick={(e) => {
             if (pos.item.internalId) {
                 e.preventDefault();
                 onOpenProject(pos.item.internalId);
                 return;
             }

            // Only alert if it's a dummy link
            if (pos.item.url === '#') {
                e.preventDefault();
                // 1 in 5 chance to show an alert for extra annoyance/nostalgia
                if (Math.random() > 0.8) {
                    alert("omg where are you going???");
                }
            }
          }}
        >
          {pos.item.text}
        </a>
      ))}
    </div>
  );
};

export default ChaosLinks;
