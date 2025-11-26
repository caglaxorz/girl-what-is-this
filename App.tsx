
import React, { useState } from 'react';
import Snow from './components/Snow';
import Ipod from './components/Ipod';
import ChaosLinks from './components/ChaosLinks';
import VisitorCounter from './components/VisitorCounter';
import Marquee from './components/Marquee';
import Hamburger from './components/Hamburger';
import ProjectWindow from './components/ProjectWindow';
import Poll from './components/Poll';
import { 
  HUSBAND_FINDER_HTML, 
  PARTICULARLY_HTML, 
  HANGI_MANIFEST_HTML, 
  PAGE_IN_PAGE_HTML,
  LYRICS_2003_HTML,
  ANKET_DEFTERI_HTML,
  ONE_OF_YOU_HTML,
  RED_FLAG_HTML,
  THE_CRUNCH_HTML,
  THE_VOID_HTML,
  MS_PAINT_HTML,
  THE_FROG_HTML,
  RABBIT_HTML,
  THE_ORB_HTML,
  SCREAM_HTML,
  ICECUBE_HTML,
  EXCUSE_GEN_HTML,
  HOGWARTS_HTML,
  PAST_LIFE_HTML,
  STARTUP_GEN_HTML,
  TUESDAY_HTML
} from './data/projects';

const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<{ title: string; content: string } | null>(null);

  const handleOpenProject = (id: string) => {
    switch (id) {
        case 'husband-finder':
            setActiveProject({ title: 'Husband Finder', content: HUSBAND_FINDER_HTML });
            break;
        case 'particularly':
            setActiveProject({ title: 'Particularly', content: PARTICULARLY_HTML });
            break;
        case 'hangi-manifest':
            setActiveProject({ title: 'Manifest Fan Club', content: HANGI_MANIFEST_HTML });
            break;
        case 'page-in-page':
            setActiveProject({ title: "Çağla's World", content: PAGE_IN_PAGE_HTML });
            break;
        case 'lyrics-2003':
            setActiveProject({ title: "2003 Lyric Gen", content: LYRICS_2003_HTML });
            break;
        case 'anket-defteri':
            setActiveProject({ title: "Anket Defteri", content: ANKET_DEFTERI_HTML });
            break;
        case 'betrayal-calculator':
            setActiveProject({ title: "Betrayal Calc", content: ONE_OF_YOU_HTML });
            break;
        case 'red-flag':
            setActiveProject({ title: "Red or Green Flag?", content: RED_FLAG_HTML });
            break;
        case 'cbs-simulator':
            setActiveProject({ title: "ÇBS Simulator", content: THE_CRUNCH_HTML });
            break;
        case 'anti-productivity':
            setActiveProject({ title: "The Void", content: THE_VOID_HTML });
            break;
        case 'cbs-paint':
            setActiveProject({ title: "ÇBS Paint", content: MS_PAINT_HTML });
            break;
        case 'catch-the-frog':
            setActiveProject({ title: "Catch the Frog", content: THE_FROG_HTML });
            break;
        case 'rabbit':
            setActiveProject({ title: "Follow the White Rabbit", content: RABBIT_HTML });
            break;
        case 'the-orb':
            setActiveProject({ title: "The Prophecy", content: THE_ORB_HTML });
            break;
        case 'scream':
            setActiveProject({ title: "Scream into the Void", content: SCREAM_HTML });
            break;
        case 'ice-cube':
            setActiveProject({ title: "Ice Ice Baby", content: ICECUBE_HTML });
            break;
        case 'excuse-generator':
            setActiveProject({ title: "Excuse Generator", content: EXCUSE_GEN_HTML });
            break;
        case 'hogwarts':
            setActiveProject({ title: "Sorting Ceremony", content: HOGWARTS_HTML });
            break;
        case 'past-life':
            setActiveProject({ title: "Soul Records", content: PAST_LIFE_HTML });
            break;
        case 'startup-generator':
            setActiveProject({ title: "Stealth Mode", content: STARTUP_GEN_HTML });
            break;
        case 'tuesday-check':
            setActiveProject({ title: "Is It Tuesday?", content: TUESDAY_HTML });
            break;
        default:
            break;
    }
  };

  const closeProject = () => {
    setActiveProject(null);
  };

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
      <Hamburger onOpenProject={handleOpenProject} />
      <ChaosLinks onOpenProject={handleOpenProject} />
      <Ipod />

      {/* Project Popup Window */}
      {activeProject && (
        <ProjectWindow 
          title={activeProject.title} 
          htmlContent={activeProject.content} 
          onClose={closeProject} 
        />
      )}

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
