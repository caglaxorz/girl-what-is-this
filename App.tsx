
import React from 'react';
import Snow from './components/Snow';
import Ipod from './components/Ipod';
import ChaosLinks from './components/ChaosLinks';
import VisitorCounter from './components/VisitorCounter';
import Marquee from './components/Marquee';
import Hamburger from './components/Hamburger';
import Poll from './components/Poll';

const App: React.FC = () => {
  // Project list for easy navigation to standalone .html files
  const projects = [
    { id: 'husband-finder', title: 'Husband Finder', href: '/husband-finder.html' },
    { id: 'hangi-manifest', title: 'Manifest Fan Club', href: '/hangi-manifest.html' },
    { id: 'particularly', title: 'Particularly', href: '/particularly.html' },
    { id: 'page-in-page', title: "Çağla's World", href: '/page-in-page.html' },
    { id: 'lyrics-2003', title: "2003 Lyric Gen", href: '/2003lyrics.html' },
    { id: 'anket-defteri', title: "Anket Defteri", href: '/anket-defteri.html' },
    { id: 'betrayal-calculator', title: "Betrayal Calc", href: '/oneofyou.html' },
    { id: 'red-flag', title: "Red or Green Flag?", href: '/redflag.html' },
    { id: 'cbs-simulator', title: "ÇBS Simulator", href: '/thecrunch.html' },
    { id: 'anti-productivity', title: "The Void", href: '/thevoid.html' },
    { id: 'cbs-paint', title: "ÇBS Paint", href: '/mspaint.html' },
    { id: 'catch-the-frog', title: "Catch the Frog", href: '/thefrog.html' },
    { id: 'rabbit', title: "Follow the White Rabbit", href: '/rabbit.html' },
    { id: 'the-orb', title: "The Prophecy", href: '/theorb.html' },
    { id: 'scream', title: "Scream into the Void", href: '/scream.html' },
    { id: 'ice-cube', title: "Ice Ice Baby", href: '/icecube.html' },
    { id: 'excuse-generator', title: "Excuse Generator", href: '/excusegen.html' },
    { id: 'hogwarts', title: "Sorting Ceremony", href: '/hogwarts.html' },
    { id: 'past-life', title: "Soul Records", href: '/pastliferegistry.html' },
    { id: 'startup-generator', title: "Stealth Mode", href: '/startupgen.html' },
    { id: 'tuesday-check', title: "Is It Tuesday?", href: '/tuesday.html' },
  ];

  return (
    <div className="min-h-screen relative font-['Courier_Prime'] text-fuchsia-900 overflow-hidden">
      {/* Background Elements */}
      <div 
        className="fixed inset-0 z-[-20] pointer-events-none"
        style={{
          backgroundColor: '#ffc0cb',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
            linear-gradient(to bottom right, #ffc0cb, #ffb6c1, #ff69b4)
          `,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <Snow />
      <Marquee />
      <Hamburger />
      <ChaosLinks />
      <Ipod />

      {/* Main Content Area */}
      <main className="relative z-30 pt-20 pb-40 px-4 max-w-4xl mx-auto pointer-events-none">
        {/* Header */}
        <header className="text-center mb-12 pointer-events-auto">
          <div className="inline-block bg-white p-6 border-4 border-fuchsia-500 shadow-[8px_8px_0px_0px_rgba(0,0,255,1)] rotate-[-2deg]">
             <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-tighter drop-shadow-sm">
               girl what is this
             </h1>
             <p className="mt-2 text-sm md:text-base font-bold bg-yellow-200 inline-block px-2">
               aka abla bu ne
             </p>
          </div>
          <div className="mt-8 flex justify-center">
             <a href="https://i.ibb.co/RGSs2FW8/493-FAA4-F-3-DDD-4-EB1-A5-C4-C3-A997-EBD55-F-2.jpg" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://i.ibb.co/RGSs2FW8/493-FAA4-F-3-DDD-4-EB1-A5-C4-C3-A997-EBD55-F-2.jpg" 
                alt="me_irl" 
                className="border-4 border-white outline outline-2 outline-pink-500 shadow-xl rounded-full animate-spin-slow w-32 h-32 object-cover hover:scale-110 transition-transform" 
              />
             </a>
          </div>
        </header>

        {/* Introduction Box */}
        <section className="bg-white/90 backdrop-blur-sm border-2 border-black p-6 mb-12 shadow-[6px_6px_0px_0px_#00ff00] transform rotate-1 pointer-events-auto max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-['Press_Start_2P'] text-blue-600 mb-4">
            <span className="animate-blink">_</span>HELLO WORLD
          </h2>
          <p className="mb-0 font-bold text-fuchsia-600 text-lg">
            girls will do anything but go to therapy
          </p>
        </section>

        {/* Poll Component */}
        <div className="pointer-events-auto relative z-40">
           <Poll />
        </div>

      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gradient-to-t from-pink-200/90 to-transparent pt-12 pb-2 text-center z-40 pointer-events-none">
        <div className="pointer-events-auto inline-flex flex-col items-center gap-4">
          <VisitorCounter />
          <p className="font-['VT323'] text-xl text-fuchsia-800 bg-white/50 px-2 rounded">
            built by çbs 2026 &copy; all rights reserved
          </p>
          <div className="flex gap-2 text-xs font-mono text-gray-500 mb-2">
            <a href="mailto:cagla@walruscreativeworks.com" className="hover:text-black hover:underline">[email]</a>
            <a href="https://www.instagram.com/caglabuyukkoc" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">[insta]</a>
            <a href="https://myspace.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">[myspace]</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
